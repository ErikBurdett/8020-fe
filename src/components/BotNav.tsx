import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const BotNav = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="footer"
                sx={(theme) => ({
                    py: 2,
                    px: 3,
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.common.white,
                    [theme.breakpoints.up('sm')]: {
                        px: 4,
                    },
                    [theme.breakpoints.up('lg')]: {
                        px: 5,
                    },
                })}
            >
                <Typography variant="body1" component="div">
                    Footer content
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default BotNav;
