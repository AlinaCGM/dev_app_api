import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import avatar from "../../assets/avatar";
import logo from "../../assets/logo.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "Customers", path: "/customers" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

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

  const handleLogout = () => {
    setIsLogged(false);
    navigate("/loggedOut");
  };

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#a4aabd",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "70px", marginRight: "8px" }}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              width: "30%",
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "#1c2c54",
              textDecoration: "none",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "2rem",
              },
            }}
          >
            {/* There is no such font as "Lator" in the provided json */}
            DEV APP
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={page.path}>{page.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page.path} exact>
                      <Typography className="nav-link">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              marginLeft: "auto",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Box sx={{ textAlign: "start", paddingInline: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#1c2c54",
                }}
              >
                John Zoiberg
              </Typography>
              <Typography
                sx={{
                  color: "#a4aabd",
                }}
              >
                Customer Success Hero
              </Typography>
            </Box>
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
              {isLogged ? (
                <MenuItem onClick={handleLogout}>
                  <Button>Logout</Button>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleLogin}>
                  <Button>Login</Button>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
