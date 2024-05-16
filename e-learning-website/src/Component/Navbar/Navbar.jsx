import * as React from "react";

import { Link } from "react-router-dom"; // Import Link from React Router
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import BookIcon from "@mui/icons-material/Book";

const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Courses", link: "/courses" },
  { name: "Contact", link: "/contact" },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SeekhoOnline
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const isLoggedIn = localStorage.getItem("id");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
      id: "",
      role: "",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/sign-in");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAuth({
        user: null,
        token: "",
        id: "",
        role: "",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("role");
      navigate("/sign-in");
    }, 12 * 60 * 60 * 1000); // 12 hours

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/" // Link to your home page
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            <SchoolIcon />
            SeekhoOnline
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.link}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "yellow",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <div style={{ paddingRight: "10px" }}>
            <Link to="/cart">
              <IconButton
                aria-label="cart"
                style={{
                  color: "white",
                }}
              >
                <StyledBadge color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>

          <div className="Account">
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleAvatarClick}
                size="small"
                sx={{ ml: 2, color: "white" }}
              >
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <LockIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  SignUp
                </Link>
              </MenuItem>

              {isLoggedIn ? ( // Assuming isLoggedIn is a state variable indicating whether the user is logged in
                <>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <PersonAddIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/user-profile" style={{ textDecoration: "none" }}>
                      User Profile
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <ListItemIcon>
                      <BookIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/learning" style={{ textDecoration: "none" }}>
                      My Learning
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        fontSize: "1rem",
                        color: "blue",
                        border: "none",
                        transition: "background-color 0.3s",
                      }}
                      onClick={handleLogout}
                      className="logout"
                    >
                      Logout
                    </button>
                  </MenuItem>
                </>
              ) : null}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
