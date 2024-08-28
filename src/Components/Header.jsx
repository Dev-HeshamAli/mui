import React from "react";
import {
  Link,
  Avatar,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Header({ drawerWidth, showDrawer }) {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => {
              showDrawer();
            }}
            sx={{
              display: {
                sm: "none",
              },
            }}
          >
            <Menu />
          </IconButton>
          <Link
            href="/"
            variant="h6"
            underline="none"
            sx={{
              ml: "10px",
              flexGrow: 1,
              "&:hover": {
                fontSize: "21px",
                cursor: "pointer",
                transition: "0.3s",
              },
            }}
            component="p"
            color="inherit"
          >
            My expenses
          </Link>

          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="h6"
            component="h6"
          >
            Hesham Ali
          </Typography>

          <Avatar
            sx={{ width: 45, height: 45, ml: "15px" }}
            alt="Hesham Ali"
            src="./imgs/1.jpg"
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
