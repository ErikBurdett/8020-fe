import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// TopNav.tsx
import { IconButton, Switch} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness5Icon from '@mui/icons-material/Brightness5';



interface TopNavProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const TopNav = ({ onThemeToggle, isDarkMode }: TopNavProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="fixed">
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
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Home</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>About</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Services</Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Contact</Button>
        <IconButton color="inherit">
          {isDarkMode ? <Brightness5Icon /> : <WbSunnyIcon />}
        </IconButton>
        <Switch checked={isDarkMode} onChange={onThemeToggle} />
      </Toolbar>
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
    </AppBar>
  );
};

export default TopNav;
