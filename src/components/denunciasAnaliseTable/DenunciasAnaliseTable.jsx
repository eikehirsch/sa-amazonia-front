import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PopupGerenciarFuncionario from '../popupGerenciarFuncionario/PopupGerenciarFuncionario';

import "./DenunciasAnaliseTable.css"

function createData(uf, queimadas, garimpo, contrabando, desmatamento, outros, total) {
    return { uf, queimadas, garimpo, contrabando, desmatamento, outros, total};
}

const rows = [
    createData("SC", 10, 5, 7, 1, 1, 24),
    createData("SP", 2, 1, 3, 4, 1, 11)
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
                        <TableCell align="center">UNIDADE FEDERATIVA</TableCell>
                        <TableCell align="center">QUEIMADAS</TableCell>
                        <TableCell align="center">GARIMPO</TableCell>
                        <TableCell align="center">CAÇA OU CONTRABANDO</TableCell>
                        <TableCell align="center">OUTROS</TableCell>
                        <TableCell align="center">TOTAL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.uf}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {row.queimadas}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                                {row.garimpo}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">{row.contrabando}</TableCell>
                            <TableCell align="center" component="th" scope="row">{row.desmatamento}</TableCell>
                            <TableCell align="center" component="th" scope="row">{row.outros}</TableCell>
                            <TableCell align="center" component="th" scope="row">{row.total}</TableCell>
                        </TableRow>
                    ))}
                    {isPopupOpen && <PopupGerenciarFuncionario funcionario={selectedFuncionario} togglePopup={togglePopup} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}