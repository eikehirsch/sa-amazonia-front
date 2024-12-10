import { useState } from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';

import PopupGerenciarFuncionario from '../popupGerenciarFuncionario/PopupGerenciarFuncionario';
import PopupDeletarFuncionario from '../popupDeletarFuncionario/PopupDeletarFuncionario';
import PopupAtivarFuncionario from '../popupAtivarFuncionario/PopupAtivarFuncionario'

import { useAuth } from "../../context/AuthContext";

import "./FuncionariosTable.css"

export default function BasicTable() {

    const navigate = useNavigate();
    const { token } = useAuth();

    const [isFuncionarioFoiDesativado, setIsFuncionarioFoiDesativado] = useState(false);
    const [isFuncionarioFoiAtivado, setIsFuncionarioFoiAtivado] = useState(false);

    const [isPopupGerenciarOpen, setIsPopupGerenciarOpen] = useState(false);
    const [selectedGerenciarFuncionario, setSelectedGerenciarFuncionario] = useState();

    const [isPopupDeletarOpen, setIsPopupDeletarOpen] = useState(false);
    const [selectedDeletarFuncionario, setSelectedDeletarFuncionario] = useState();

    const [isPopupAtivarOpen, setIsPopupAtivarOpen] = useState(false);
    const [selectedAtivarFuncionario, setSelectedAtivarFuncionario] = useState();

    const toggleGerenciarPopup = (row) => {
        setIsPopupGerenciarOpen(!isPopupGerenciarOpen);
        setSelectedGerenciarFuncionario(row)
    };

    const toggleDeletarPopup = (row) => {
        setIsPopupDeletarOpen(!isPopupDeletarOpen);
        setSelectedDeletarFuncionario(row)
    };

    const toggleAtivarPopup = (row) => {
        setIsPopupAtivarOpen(!isPopupAtivarOpen);
        setSelectedAtivarFuncionario(row)
    };

    const [funcionarios, setFuncionarios] = useState([]);

    const getFuncionarios = async () => {
        try {
            const response = await fetch('http://localhost:8080/usuarios/', {
                method: 'GET',  // Define o método da requisição
                headers: {
                    'Authorization': `Bearer ${token}`,  // Adiciona o token ao cabeçalho
                    'Content-Type': 'application/json'  // Define o tipo de conteúdo (opcional)
                }
            });
            const data = await response.json();
            setFuncionarios(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        }
    };

    const handleEditFuncionario = (funcionario) => {
        console.log('funcionario', funcionario)
        // Navega para a página /edit-fiscal passando o ID do funcionário como parâmetro
        if (funcionario.tipo == "fiscal") navigate(`/edit-fiscal/${funcionario.id}`);
        if (funcionario.tipo == "biologo") navigate(`/edit-biologo/${funcionario.id}`);
    };

    useEffect(() => {
        getFuncionarios();
        setIsFuncionarioFoiAtivado(false);
        setIsFuncionarioFoiDesativado(false);
    }, [isFuncionarioFoiDesativado, isFuncionarioFoiAtivado]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">NOME DO PROFISSIONAL</TableCell>
                        <TableCell align="center">CARGO</TableCell>
                        <TableCell align="center">STATUS NO SISTEMA</TableCell>
                        <TableCell align="center">GERENCIAR FUNCIONÁRIO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {funcionarios.length > 0 ? (
                        funcionarios.map((funcionario) => (
                            <TableRow
                                key={funcionario.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {funcionario.name}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {funcionario.tipo}
                                </TableCell>
                                <TableCell style={{ color: funcionario.isActive === true ? 'blue' : 'red' }} align="center">{funcionario.isActive ? 'Ativo' : 'Não ativo'}</TableCell>
                                <TableCell align="center">
                                    {funcionario.isActive ? (
                                        <>
                                            <div className='gerenciar-funcionario-container'>
                                                {funcionario.tipo != "admin" && (
                                                    <>
                                                        {/* <button onClick={() => toggleGerenciarPopup(funcionario)} className='designar-funcionario-button'>Designar à denúncia</button> */}
                                                        <button onClick={() => handleEditFuncionario(funcionario)} className='designar-funcionario-button'>Editar funcionário</button></>
                                                )}
                                                <button onClick={() => toggleDeletarPopup(funcionario)} className='deletar-funcionario-button'>Desativar funcionário</button>
                                            </div></>
                                    ) : <>
                                        <button onClick={() => toggleAtivarPopup(funcionario)} className='ativar-funcionario-button'>Ativar funcionário</button>
                                    </>}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} align="center">Nenhuma denúncia registrada.</TableCell>
                        </TableRow>
                    )}
                    {/* {isPopupGerenciarOpen && <PopupGerenciarFuncionario funcionario={selectedGerenciarFuncionario} toggleGerenciarPopup={toggleGerenciarPopup} />} */}
                    {isPopupDeletarOpen && <PopupDeletarFuncionario setIsFuncionarioFoiDesativado={setIsFuncionarioFoiDesativado} funcionario={selectedDeletarFuncionario} toggleDeletarPopup={toggleDeletarPopup} setIsPopupDeletarOpen={setIsPopupDeletarOpen} />}
                    {isPopupAtivarOpen && <PopupAtivarFuncionario setIsFuncionarioFoiAtivado={setIsFuncionarioFoiAtivado} funcionario={selectedAtivarFuncionario} toggleAtivarPopup={toggleAtivarPopup} setIsPopupAtivarOpen={setIsPopupAtivarOpen} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}