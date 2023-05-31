import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { lightTheme, darkTheme } from '../theme/theme';

interface BotNavProps {
    isDarkMode: boolean;
  }

const BotNav: React.FC<BotNavProps> = ({ isDarkMode }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AppBar position="fixed" color="secondary" sx={{top: 'auto', bottom: 0}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Your Logo
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>
    );
};

export default BotNav;
