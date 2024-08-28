import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  SettingsSharp,
  LogoutSharp,
  HomeSharp,
  CreateSharp,
  AccountCircleSharp,
  Brightness7,
  Brightness4,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";

export default function SidBar({
  drawerWidth,
  setMode,
  NoneOrBlock,
  remove,
  removeDrawer,
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  const currantMode = theme.palette.mode;
  const currantLocation = useLocation();

  const myList = [
    { text: "Home", icon: <HomeSharp />, path: "/" },
    { text: "Create", icon: <CreateSharp />, path: "/create" },
    { text: "Profile", icon: <AccountCircleSharp />, path: "/profile" },
    { text: "Settings", icon: <SettingsSharp />, path: "/settings" },
  ];

  const mainList = myList.map((el, index) => {
    return (
      <ListItem
        key={index}
        sx={{
          bgcolor:
            currantLocation.pathname === el.path
              ? theme.palette.color.main
              : null,
        }}
        disablePadding
      >
        <ListItemButton
          onClick={() => {
            navigate(el.path);
          }}
        >
          <ListItemIcon>{el.icon}</ListItemIcon>
          <ListItemText primary={el.text} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: {
            xs: `${NoneOrBlock}`,
            sm: "block",
          },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={remove}
        anchor="left"
        open
        onClose={() => {
          removeDrawer();
        }}
      >
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", py: "11px" }}
        >
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.setItem(
                "currantMode",
                currantMode === "light" ? "dark" : "light"
              );
              setMode(currantMode === "light" ? "dark" : "light");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        <List>
          {mainList}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutSharp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
