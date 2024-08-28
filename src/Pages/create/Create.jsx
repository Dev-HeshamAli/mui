import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { blue } from "@mui/material/colors";
import { Done, DoubleArrow } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const sendData = () => {
    fetch("http://localhost:3200/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box autoComplete="off" component="form" sx={{ width: "500px" }}>
      <Paper elevation={3} sx={{ padding: "30px" }}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth
          label="Transaction Title"
          variant="outlined"
          sx={{ my: "35px", display: "block" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DoubleArrow />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
          fullWidth
          label="Amount"
          variant="outlined"
          sx={{ my: "25px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <ColorButton
          onClick={sendData}
          variant="contained"
          sx={{ margin: "auto", display: "flex" }}
        >
          Submit
          <Done sx={{ ml: "5px" }} />
        </ColorButton>
      </Paper>
    </Box>
  );
}
