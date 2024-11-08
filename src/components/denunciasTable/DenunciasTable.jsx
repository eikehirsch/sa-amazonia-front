import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
    const [isLoading, setIsLoading] = useState(false);
    const [denuncias, setDenuncias] = useState([]);

    const getDenuncias = async () => {
        setIsLoading(true);  // Inicia o carregamento
        try {
            const response = await fetch('http://localhost:8080/denuncias/');
            const data = await response.json();
            console.log('datinha', data);  // Verifique a estrutura aqui
            setDenuncias(data || []);  // Ajuste conforme necessário
        } catch (erro) {
            console.error(erro);
        } finally {
            setIsLoading(false);  // Finaliza o carregamento
        }
    };

    useEffect(() => {
        getDenuncias();
    }, []);

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
                    {denuncias.length > 0 ? (
                        denuncias.map((denuncia) => (
                            <TableRow
                                key={denuncia.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {denuncia.title || 'Título não informado'}
                                </TableCell>
                                <TableCell align="center">
                                    {denuncia.fiscal ? denuncia.fiscal.name : 'N/A'}
                                </TableCell>
                                <TableCell align="center">
                                    {denuncia.biologist ? denuncia.biologist.name : 'N/A'}
                                </TableCell>
                                <TableCell style={{
                                    color: denuncia.status === 'Aguardando análise'
                                        ? 'black'
                                        : denuncia.status === 'Em análise'
                                        ? 'blue'
                                        : denuncia.status === 'Finalizada'
                                        ? 'green'
                                        : 'gray' // Para quando o status for null ou outro valor
                                }} align="center">
                                    {denuncia.status || 'Sem status'}
                                </TableCell>
                                <TableCell align="center">
                                    {denuncia.date || 'Data não informada'}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} align="center">Nenhuma denúncia registrada.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
