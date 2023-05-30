// ResponsiveContainer.tsx
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface ResponsiveContainerProps {
    children: React.ReactNode;
}

const ResponsiveContainer = ({ children }: ResponsiveContainerProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container
            component="main"
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                minHeight: '100vh', // this will make sure the container is always full height
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                paddingTop: isSmallScreen ? theme.spacing(4) : theme.spacing(8), // Adjust the top padding based on screen size
            }}
        >

            {children}

        </Container>
    );
}

export default ResponsiveContainer;
