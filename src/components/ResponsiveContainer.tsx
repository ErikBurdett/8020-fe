// ResponsiveContainer.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface ResponsiveContainerProps {
    children: React.ReactNode;
}

const ResponsiveContainer = ({ children }: ResponsiveContainerProps) => {
    return (
        <Container
            component="main"
            maxWidth={false}
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                minHeight: '100vh', // this will make sure the container is always full height
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                paddingTop: theme.spacing(8), // Adjust the top padding to make room for the fixed AppBar
            })}
        >

            {children}

        </Container>
    );
}

export default ResponsiveContainer;
