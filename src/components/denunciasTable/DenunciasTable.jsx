import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(titulo, fiscal, biologo, status, dataRegistro) {
    return { titulo, fiscal, biologo, status, dataRegistro };
}

const rows = [
    createData('Queimadas em Jurerê', "Joaquim de Assunção", "Ana Clara Rodrigues Silva", "Em análise", "20/10/2024"),
    createData('Contrabando de Animais em São José, Setembro de 2024', "Beatriz da Costa", "Felipe Augusto de Souza", "Aguardando análise", "30/09/2024"),
    createData('Desmatamento no Pantanal', "Manoel Cândido", "Mariana Luiza Costa Pereira", "Análise concluída", "01/10/2024"),
    createData('Garimpo em Curitiba, Bairro Ipirange', "Lara Fertz", "Ricardo Henrique Almeida Santos", "Em análise", "07/10/2024"),
    createData('Despejo de lixo em rio, Bairro Tapera.', "Bianca da Luz", "Tatiane Fernanda Lima Gomes", "Análise concluída", "16/10/2024"),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Título da denúncia</TableCell>
                        <TableCell align="center">Fiscal responsável</TableCell>
                        <TableCell align="center">Biólogo responsável</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Data de registro</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.titulo}
                            </TableCell>
                            <TableCell align="center">{row.fiscal}</TableCell>
                            <TableCell align="center">{row.biologo}</TableCell>
                            <TableCell style={{ color: row.status === 'Aguardando análise' ? 'black' : row.status === 'Em análise' ? 'blue' : 'green' }} align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.dataRegistro}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}