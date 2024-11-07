import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({ denuncias }) {

    console.log("gostoso", denuncias)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>TÍTULO DA DENÚNCIA</TableCell>
                        <TableCell align="center">FISCAL RESPONSÁVEL</TableCell>
                        <TableCell align="center">BIÓLOGO RESPONSÁVEL</TableCell>
                        <TableCell align="center">STATUS</TableCell>
                        <TableCell align="center">DATA DE REGISTRO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {denuncias.length > 0 && denuncias != null && (
                        denuncias.map((denuncia) => (
                            <TableRow
                                key={denuncia.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {denuncia.title}
                                </TableCell>
                                <TableCell align="center">{denuncia.fiscal}</TableCell>
                                <TableCell align="center">{denuncia.biologist}</TableCell>
                                <TableCell style={{ color: denuncia.status === 'Aguardando análise' ? 'black' : denuncia.status === 'Em análise' ? 'blue' : 'green' }} align="center">{denuncia.status}</TableCell>
                                <TableCell align="center">{denuncia.data}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}