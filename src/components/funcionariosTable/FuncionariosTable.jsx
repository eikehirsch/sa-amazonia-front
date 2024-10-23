import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PopupGerenciarFuncionario from '../popupGerenciarFuncionario/PopupGerenciarFuncionario';

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

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedFuncionario, setselectedFuncionario] = useState();

    const togglePopup = (row) => {
        setIsPopupOpen(!isPopupOpen);
        setselectedFuncionario(row)
    };

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
                                            <button onClick={() => togglePopup(row)} className='designar-funcionario-button'>Designar à denúncia</button>
                                            <button className='deletar-funcionario-button'>Desativar funcionário</button>
                                        </div></>
                                ) : <></>}
                            </TableCell>
                        </TableRow>
                    ))}
                    {isPopupOpen && <PopupGerenciarFuncionario funcionario={selectedFuncionario} togglePopup={togglePopup} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}