import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function CategoryDetail() {
  // const [female, setFemale] = useState();
  // const history = useHistory();
  const navigate = useNavigate();
  const location = useLocation();
  const propsData = location.state;

  const handleNext=()=>{
    navigate('/quantitytable')
    console.log(data)

  }

  const [data , setData ] = useState({})
  const handleChange = (key, value) => {
    console.log(key, value);
    setData({
      ...data,
      [key]: value,
    });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img
            src={propsData.img}
            alt=""
            style={{ height: "60%", width: "60%" }}
            size="small"
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            size="small"
            fullWidth
            value={data.category}
            onChange={(e) => {
              handleChange("category", e.target.value);
            }}
          />
        </Box>

        <Box width={{ width: 300 }}>
          <Typography style={{ marginTop: 15, fontSize: 15 }}>
            Cloth Type
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            // onChange={(e, val) => console.log(val)}
            value={data.clothtype}
            onChange={(e) => handleChange('clothtype',e.target.value)}
            sx={{ mt: 2 }}
          >
            <FormControlLabel value="hc" control={<Radio />} label="Hc" />
            <FormControlLabel value="pp" control={<Radio />} label="Pp" />
            {/* <FormControlLabel   value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </Box>
        <Box width={{ width: 300 }}>
          <Typography style={{ marginTop: 15, fontSize: 15 }}>
            With Cloth
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={data.cloth}
            onChange={(e) => handleChange('cloth',e.target.value)}
            // value={}
            sx={{ mt: 2 }}
          >
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
            {/* <FormControlLabel   value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </Box>
        <Box sx={{ width: 300 }}>
          {/* <TextField id="outlined-basic" label="Design Number"  variant="outlined" size="small" fullWidth />
           */}
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Design</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              placeholder="Design number"
              inputProps={{ "aria-label": "Without label" }}
              value={data.desing_number}
              onChange={(e) => {
                handleChange("desing_number", e.target.value);
              }}
              // onChange={handleChange}
            >
              {[1, 2, 3].map((item, index) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-around",
            mt: 5,
          }}
        >
          <Button sx={{ width: "40%", border: 1 }}>Back</Button>
          {/* <Link to='/quantitytable '  style={{textDecoration:'none',display:'flex',justifyContent:'center'}} > */}
       
        <Button
            sx={{
              width: "40%",
              border: 1,
              backgroundColor: "#3457D5",
              color: "white",
            }}
            onClick={handleNext}
          >
            Next
          </Button>
          {/* </Link> */}
        </Box>
      </Box>
    </Box>
  );
}
