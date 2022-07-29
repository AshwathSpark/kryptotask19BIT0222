import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Menu.css';
import {Link} from 'react-router-dom'
// import { createTheme } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = ['Products', 'Login'];
// const customTheme = createTheme({
//   palette: {
//     secondary: {
//       main: "#F5BD1F",
//       contrastText: "#6a0dad "
//     }
//   }
// });
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
<Link to="cart">
        <ListItem>
          <ListItemButton>
         
              <ShoppingCartIcon style={{color:"black"}}/>
            
          </ListItemButton>
        </ListItem>

        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
//   const StyledButton = styled(Button)(`
//   text-transform: none;
// `);
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar  component="nav" style={{backgroundColor:'#087cec'}}>
        <Toolbar className='navbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: '35px', fontFamily: 'Helvetica', fontWeight: '500'}}
          >
            ShopKart.
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} class="textBox">
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', textTransform: 'none', fontFamily: 'Helvetica', fontWeight: '10'}}>
                {item}
              </Button>
            ))}
            <Link to="cart">
            <Button>
              <ShoppingCartIcon  style={{color:"black"}}/>
            </Button>
            </Link>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
