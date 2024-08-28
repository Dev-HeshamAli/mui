import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

let drawerWidth = 240;
export default function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currantMode") === null
      ? "light"
      : localStorage.getItem("currantMode") === "light"
      ? "light"
      : "dark"
  );

  const [NoneOrBlock, setNoneOrBlock] = useState("none");
  const [remove, setRemove] = useState("permanent");

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            color: {
              main: grey[300],
            },
          }
        : {
            color: {
              main: grey[800],
            },
          }),
    },
  });

  const showDrawer = () => { 
    setRemove("temporary");
    setNoneOrBlock("block");
   }
  const removeDrawer = () => { 
    setNoneOrBlock("none");
    setRemove("permanent");
   }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header
          drawerWidth={drawerWidth}
          showDrawer={showDrawer}
        />
        <SideBar
          drawerWidth={drawerWidth}
          setMode={setMode}
          NoneOrBlock={NoneOrBlock}
          remove={remove}
          removeDrawer={removeDrawer}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "150px",
            p:"20px"
          }}
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}
