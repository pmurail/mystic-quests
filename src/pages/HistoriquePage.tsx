import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { mockData } from '../mock-data';

const HistoryPage: React.FC = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Historique des parties
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: 'black' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white' }}>#</TableCell>
              <TableCell style={{ color: 'white' }}>Nom de la Partie</TableCell>
              <TableCell style={{ color: 'white' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow key={1}>
                <TableCell style={{ color: 'white' }}>{1}</TableCell>
                <TableCell style={{ color: 'white' }}>{mockData.scenario.name}</TableCell>
                <TableCell style={{ color: 'white' }}>{mockData.scenario.date}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HistoryPage;
