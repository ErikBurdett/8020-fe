// ResponsiveContainer.tsx
import * as React from 'react';
import Container from '@mui/material/Container';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface ResponsiveContainerProps {
    children: React.ReactNode;
}

const ResponsiveContainer = ({ children }: ResponsiveContainerProps) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

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
                paddingTop: matchesSM ? theme.spacing(8) : theme.spacing(2), // Adjust the top padding based on the screen size
            }}
        >

            {children}

        </Container>
    );
}

export default ResponsiveContainer;
