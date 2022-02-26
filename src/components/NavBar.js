
import avatarJoako from "../assets/logos/AvatarJoaquinV02.jpg";
import logo from "../assets/logos/logovivero00.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./Context/CartContext";
import {useContext } from "react";

const pages = ['exterior', 'interior', 'detalles','Nosotros'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const is_ok=false;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {carrito}=useContext(CartContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <MenuItem>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: 50,
                  height: 50,
                }}
              >
                <Avatar alt="Vivero" src={logo} variant="square" />
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}
              >
                VIVERO Joaquin
              </Typography>
            </MenuItem>
          </Link>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <MenuItem>
                <Avatar alt="Vivero" src={logo} variant="square" />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  VIVERO Joaquin
                </Typography>
              </MenuItem>
            </Link>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >

             {/*  {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <Link to='/category/interior' style={{ textDecoration: "none", color: "black" }} >
                 <MenuItem  onClick={handleCloseNavMenu}>
                   <Typography textAlign="center">Plantas Interior</Typography>
                </MenuItem>
              </Link >

              <Link to='/category/exterior' style={{ textDecoration: "none", color: "black" }} >
                 <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Plantas Exterior</Typography>
                </MenuItem>
              </Link >

              <Link to='/item/6' style={{ textDecoration: "none", color: "black" }} >
                 <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Detalles Plantas</Typography>
                </MenuItem>
              </Link>

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            
            {/* {pages.map((page,ind) =>{ 
              if (page==="interior")
                return(
      
                <Link to={`/category/${page}`} style={{ textDecoration: "none", color: "white" }} >
                 <Button
                   key={ind}
                   onClick={handleCloseNavMenu}
                   sx={{ my: 2, color: "white", display: "block" }}
                 >
                  Plantas1 {page}
                 </Button>
                </Link>
            
                )
              return(null)

              }
            )} */}
            

             <Link to='/category/interior' style={{ textDecoration: "none", color: "white" }} >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Plantas Interior
                </Button>
              </Link>

              <Link to='/category/exterior' style={{ textDecoration: "none", color: "white" }} >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Plantas Exterior
                </Button>
              </Link>
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>

         
           <Link to='/cart' style={{ textDecoration: "none" }} >
             <CartWidget
             
               carrito={carrito}
            
             />
            </Link>

            <Tooltip title="Abrir Perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Jako" src={avatarJoako} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,ind) => (
                <MenuItem key={ind} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
