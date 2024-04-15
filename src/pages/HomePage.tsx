import React from 'react';
import { Button } from '@mui/material';
import Column from "../components/Column";

const HomePage: React.FC = () => {
    return (
        <div>
            <Button variant="contained" color="primary" size="large" style={{ marginTop: 10, marginBottom: 10, display: 'block', margin: 'auto' }}>
                Générer
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Column />
            </div>
        </div>
    );
};

export default HomePage;
