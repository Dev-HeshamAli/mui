import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { AttachMoney, Close, DoubleArrow } from "@mui/icons-material";

export default function Home() {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/myData")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, [mydata]);

  const deleteData = (id) => {
    fetch(`http://localhost:3200/myData/${id}`, { method: "DELETE" });
  };


  let totalPrice = 0;
  const showData = mydata.map((el, index) => {
    totalPrice += el.price;
    return (
      <Paper
        key={index}
        elevation={3}
        sx={{
          position: "relative",
          padding: "35px 15px 10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          mb: "25px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h6"
        >
          {el.title}
        </Typography>

        <Typography
          sx={{
            opacity: "0.8",
          }}
          variant="h6"
        >
          {`${el.price} $`}
        </Typography>

        <IconButton
          onClick={() => {
            deleteData(el.id);
          }}
          sx={{ position: "absolute", top: "0", right: "0" }}
        >
          <Close />
        </IconButton>
      </Paper>
    );
  });

  return (
    <Box sx={{ width: "450px" }}>
      {showData}
      <Typography
        sx={{
          pt:"20px",
          m: "auto",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
        }}
        variant="h5"
      >
        <DoubleArrow sx={{ mr: "10px" }} />
        you Spend {totalPrice}
        <AttachMoney />
      </Typography>
    </Box>
  );
}
