import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const login = require("../Assests/login.png");

export default function Login() {
  const [data , setData ] = useState({})
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    console.log(key, value);
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit=()=>{
    console.log(data)
    navigate('/dashboard')

  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          mt: 7,
          boxShadow: 3,
          width: "65%",
          height: "100%",
        }}
      >
        {/* display: { xs: '', md: 'block' } , */}
        <Box sx={{ width:'50%'}}>
          <img src={login} alt="hello" style={{ width: '100%', margin: 5 }} />
        </Box>
        {/* login fields */}
        <Box
          sx={{
            width: 400,
            display: "flex",
            justifyContent: "center",
            alignItems:'center',
            flexDirection: "column",
            mx:1
          }}
        >
          <Box sx={{ width: "90%", my: 1 }}>
            <Typography sx={{ my: 0.5}} >Email</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Email"
              value={data.name}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            />
          </Box>
          <Box sx={{ width: "90%", my: 1 }}>
            <Typography sx={{ my: 0.5}} >Password</Typography>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              placeholder="Password"
              value={data.password  }
              onChange={(e) => {
                handleChange("password  ", e.target.value);
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", my: 0.5 }}>
              <Typography sx={{ color: "#0000D0", fontSize: 10 }}>
                Forgot Password?
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "90%", my: 1 }}>
          {/* <Link to='/dashboard'> */}
          <Button
              sx={{ width: "100%", backgroundColor: "#4158E0" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button> 
            {/* </Link> */}
        
          </Box>
          <Box
            sx={{
              width: "90%",
              my: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography>Don't have an account?</Typography>
            <Typography>Signup</Typography>

          
          </Box>
        </Box>
       
      </Box>
      <Box sx={{width:'80%' ,mt:0.5, display:'flex' , justifyContent:'center' , alignItems:'center'}}>
          <Typography sx={{fontSize:10}} >@2023 ORIONSOFT TECH SERVICES PRIVATE LIMITED. All Rights Reserved </Typography>
        </Box>
    </Box>
  );
}
