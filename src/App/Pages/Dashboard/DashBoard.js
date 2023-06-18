import { Box } from "@mui/system";
import React from "react";
import NavBar from "../../Components/NavBar";
import tshirt from "../../Assests/tshirt.png";
import chaddi from "../../Assests/chaddi.png"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// const login = require("../../Assests/login.png");

export default function DashBoard() {

  const categorydata =[
    {
      img:tshirt,
      titleCategory:'T-Shirts',
      descriptionL:'small t-shirt'

    },
    {
      img:chaddi,
      titleCategory:'Shorts',
      descriptionL:'medium t-shirt'

    },
    {
      img:tshirt,
      titleCategory:'T-Shirts',
      descriptionL:'big t-shirt'


    },
    {
      img:chaddi,
      titleCategory:'Shorts',
      descriptionL:'large t-shirt'

    },
    {
      img:tshirt,
      titleCategory:'T-Shirts',
      descriptionL:'small t-shirt'


    },
    {
      img:chaddi,
      titleCategory:'Shorts',
      descriptionL:'big t-shirt'

    },
  ]
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "fixed", width: "100%" }}>
        <NavBar />
      </Box>
      


     
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
          // border:1
        }}
      >
        {categorydata.map((item)=>(
          <Link to='/categorydetail ' state={{img:item.img,titleCategory:item.titleCategory}} style={{textDecoration:'none',display:'flex',justifyContent:'center'}} >
        <Box
          sx={{
            // height: "10%",
            width: '80%',
            // maxWidth: 210,
            // resize: "block",
            background: "cover",
            mt: 10,
            mx:2,
            display:'flex',
            flexDirection:'row',
            border:1,
           justifyContent: 'center',
           alignItems: 'center',
           borderColor:'#999999',
           boxShadow: 3 ,
           borderRadius:1,
           alignSelf:'center',
          }}
        >
          <Box sx={{width:'50%',height:'50%'}} >
          <img
            src={item.img}
            alt="hello"
            style={{ width: "100%", height: "100%" ,borderRadius:10}}
          />

          </Box>
          
          <Box
            sx={{
              width: '50%',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:3
              // border:1
    
              // mt:-2
              
            }}
          >
            <Box>

            <Typography sx={{color:'#3457D5',fontSize:20,fontWeight:'300'}} variant="h3">{item.titleCategory}</Typography>
     
          <Typography sx={{color:'grey'}} >{item.descriptionL}</Typography>
          </Box>

          </Box>
        </Box>
        </Link>

      ))}      </Box>
    </Box>
  );
}
