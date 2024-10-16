import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nome do profissional</TableCell>
                        <TableCell align="center">Cargo</TableCell>
                        <TableCell align="center">Status no sistema</TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}