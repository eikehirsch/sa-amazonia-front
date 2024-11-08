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

import "./FuncionariosTable.css"

export default function BasicTable() {

    const navigate = useNavigate();

    const [isPopupGerenciarOpen, setIsPopupGerenciarOpen] = useState(false);
    const [selectedGerenciarFuncionario, setSelectedGerenciarFuncionario] = useState();

    const [isPopupDeletarOpen, setIsPopupDeletarOpen] = useState(false);
    const [selectedDeletarFuncionario, setSelectedDeletarFuncionario] = useState();

    const toggleGerenciarPopup = (row) => {
        setIsPopupGerenciarOpen(!isPopupGerenciarOpen);
        setSelectedGerenciarFuncionario(row)
    };

    const toggleDeletarPopup = (row) => {
        setIsPopupDeletarOpen(!isPopupDeletarOpen);
        setSelectedDeletarFuncionario(row)
    };

    const [isLoading, setIsLoading] = useState(false);
    const [funcionarios, setFuncionarios] = useState([]);

    const getFuncionarios = async () => {
        setIsLoading(true);  // Inicia o carregamento
        try {
            const response = await fetch('http://localhost:8080/usuarios/');
            const data = await response.json();
            console.log('eita', data);  // Verifique a estrutura aqui
            setFuncionarios(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        } finally {
            setIsLoading(false);  // Finaliza o carregamento
        }
    };

    const handleEditFuncionario = (funcionario) => {
        // Navega para a página /edit-fiscal passando o ID do funcionário como parâmetro
        if (funcionario.tipo == "FISCAL") navigate(`/edit-fiscal/${funcionario.id}`);
        if (funcionario.tipo == "BIOLOGO") navigate(`/edit-biologo/${funcionario.id}`);
    };

    useEffect(() => {
        getFuncionarios();
    }, []);

    useEffect(() => {
        console.log('isPopupDeletarOpen', isPopupDeletarOpen)
    }, [selectedDeletarFuncionario])


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
                                                <button onClick={() => toggleGerenciarPopup(funcionario)} className='designar-funcionario-button'>Designar à denúncia</button>
                                                <button onClick={() => handleEditFuncionario(funcionario)} className='designar-funcionario-button'>Editar funcionário</button>
                                                <button onClick={() => toggleDeletarPopup(funcionario)} className='deletar-funcionario-button'>Desativar funcionário</button>
                                            </div></>
                                    ) : <></>}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} align="center">Nenhuma denúncia registrada.</TableCell>
                        </TableRow>
                    )}
                    {isPopupGerenciarOpen && <PopupGerenciarFuncionario funcionario={selectedGerenciarFuncionario} toggleGerenciarPopup={toggleGerenciarPopup} />}
                    {isPopupDeletarOpen && <PopupDeletarFuncionario funcionario={selectedDeletarFuncionario} toggleDeletarPopup={toggleDeletarPopup} setIsPopupDeletarOpen={setIsPopupDeletarOpen} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}