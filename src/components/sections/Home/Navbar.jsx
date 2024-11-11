import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { user } = useSelector((state) => state.auth);
  const storeduserid = localStorage.getItem("userId");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "About", link: "/about" },
    { text: "Courses", link: "/categories" },
    { text: "Support", link: "/support" },
    { text: "Community", link: "/review" },
  ];

  const renderAuthButtons = () => (
    <>
      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <Button
          color="inherit"
          sx={{
            fontSize: isSmallScreen ? 16 : 18,
           
            textTransform: "none",
          }}
        >
          Log In
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #e50914, #b00020)",
            color: "#FAFAFA",
            textTransform: "none",
            borderRadius: 2,
            
            fontSize: isSmallScreen ? 16 : 16,
            "&:hover": { bgcolor: "#E50914" },
          }}
        >
          Sign Up
        </Button>
      </Link>
    </>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#0f0f0f", color: "#FAFAFA" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: isSmallScreen ? 0 : 50,
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="/assets/images/logo.png"
              alt="logo"
              height={isSmallScreen ? 85 : 110}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 2,
            alignItems: "center",
            marginRight: isSmallScreen ? 0 : 5, 
          }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                color="inherit"
                sx={{
                  fontSize: isSmallScreen ? 14 : isTablet ? 16 : 18,
                  textTransform: "none",
                }}
              >
                {item.text}
              </Button>
            </Link>
          ))}
          {storeduserid ? (
            <>
              <Link
                to={`/profile/${storeduserid}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: isSmallScreen ? 16 : 18,
                    textTransform: "none",
                  }}
                >
                  Profile
                </Button>
              </Link>
              <Link
                to="/addtocart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <IconButton color="inherit" sx={{ marginLeft: 1 }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
            </>
          ) : (
            renderAuthButtons()
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem button component={Link} to={item.link} key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                {storeduserid ? (
                  <>
                    <ListItem
                      button
                      component={Link}
                      to={`/profile/${storeduserid}`}
                    >
                      <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/addtocart">
                      <ListItemText primary="Cart" />
                    </ListItem>
                  </>
                ) : (
                  renderAuthButtons()
                )}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
