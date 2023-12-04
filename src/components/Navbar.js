import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 700, // set md to 700px
//       lg: 960,
//       xl: 1200,
//     },
//   },
// });

const ListItemButtonStyle = styled(ListItemButton)`
  text-transform: capitalize;
  transition: 0.2s;
  &:hover {
    color: blue;
  }
`;

const AppBarStyle = styled(AppBar)`
  height: 100px;
  background: transparent;
`;
const LinksStyle = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 16px;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`;
const BookButtonStyle = styled(Button)`
  color: white;
  margin-left: 16px;
  background: #1e3f68;

  &:hover {
    background: #3e699e;
  }
`;

const drawerWidth = 240;

const AppNavBar = (props) => {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Spring Auto Care
      </Typography>
      <Divider />
      <List>
          <ListItem >
            <ListItemButtonStyle to="/page1" sx={{ textAlign: "center" }}>
              <ListItemText primary="About"/>
            </ListItemButtonStyle>
          </ListItem>
          <ListItem >
            <ListItemButtonStyle sx={{ textAlign: "center" }}>
              <ListItemText primary="Services"/>
            </ListItemButtonStyle>
          </ListItem>
          <ListItem >
            <ListItemButtonStyle sx={{ textAlign: "center" }}>
              <ListItemText primary="Packages"/>
            </ListItemButtonStyle>
          </ListItem>
          <ListItem >
            <ListItemButtonStyle sx={{ textAlign: "center" }}>
              <ListItemText primary="Contact Us"/>
            </ListItemButtonStyle>
          </ListItem>
          <ListItem >
            <ListItemButtonStyle sx={{ textAlign: "center" }}>
              <ListItemText primary="Gallery"/>
            </ListItemButtonStyle>
          </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyle>
        <Toolbar sx={{marginTop:"auto",marginBottom:"auto"}}>
        <IconButton
            color="dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div">
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Spring Auto Care
            </Link>
          </Typography>

          <Box sx={{ mr: 2, display: { xs: 'none', md: 'block' } }} style={{ marginLeft: "auto" }}>
            <LinksStyle to="/page1">About</LinksStyle>
            <LinksStyle to="/page2">Services</LinksStyle>
            <LinksStyle to="/page2">Packages</LinksStyle>
            <LinksStyle to="/page2">Contact us</LinksStyle>
            <LinksStyle to="/page2">Gallery</LinksStyle>
            <BookButtonStyle variant="contained">Book Now</BookButtonStyle>
          </Box>
          <Box sx={{ mr: 2, display: { md: 'none' } }} style={{ marginLeft: "auto" }}>
          <BookButtonStyle variant="contained">Book Now</BookButtonStyle>
          </Box >
        </Toolbar>
      </AppBarStyle>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default AppNavBar;
