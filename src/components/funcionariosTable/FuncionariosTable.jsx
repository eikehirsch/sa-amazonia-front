import { useState } from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PopupGerenciarFuncionario from '../popupGerenciarFuncionario/PopupGerenciarFuncionario';
import PopupDeletarFuncionario from '../popupDeletarFuncionario/PopupDeletarFuncionario';

import "./FuncionariosTable.css"

function createData(name, occupation, status) {
    return { name, occupation, status };
}

const rows = [
    createData("Lucas Ferreira da Silva", "Fiscal", true),
    createData('Ana Clara Oliveira Santos', "Biologo", false),
    createData('Pedro Henrique Costa Lima', "Biologo", false),
    createData('Juliana Maria Rodrigues Alves', "Fiscal", true),
    createData('Rafael dos Santos Pereira', "Fiscal", false)
];

export default function BasicTable() {

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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                                {row.occupation}
                            </TableCell>
                            <TableCell style={{ color: row.status === true ? 'blue' : 'red' }} align="center">{row.status ? 'Ativo' : 'Não ativo'}</TableCell>
                            <TableCell align="center">
                                {row.status ? (
                                    <>
                                        <div className='gerenciar-funcionario-container'>
                                            <button onClick={() => toggleGerenciarPopup(row)} className='designar-funcionario-button'>Designar à denúncia</button>
                                            <button onClick={() => toggleDeletarPopup(row)} className='deletar-funcionario-button'>Desativar funcionário</button>
                                        </div></>
                                ) : <></>}
                            </TableCell>
                        </TableRow>
                    ))}
                    {isPopupGerenciarOpen && <PopupGerenciarFuncionario funcionario={selectedGerenciarFuncionario} toggleGerenciarPopup={toggleGerenciarPopup} />}
                    {isPopupDeletarOpen && <PopupDeletarFuncionario funcionario={selectedDeletarFuncionario} toggleDeletarPopup={toggleDeletarPopup} setIsPopupDeletarOpen={setIsPopupDeletarOpen} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}