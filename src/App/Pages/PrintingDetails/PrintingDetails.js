import { Box } from '@mui/system'
import React from 'react'
import NavBar from '../../Components/NavBar'
import { Button, Checkbox, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import { useState } from 'react';
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export default function PrintingDetails() {
    const [checkboxValues, setCheckboxValues] = useState({
        Right: false,
        left: false,
        Front: false,
        Back: false,
        other: false,
      });
    
      const handleChange = (event) => {
        // console.log(event.target.checked , event.target.name)
        setCheckboxValues({
          ...checkboxValues,
          [event.target.name]: event.target.checked,
        });
        // setData()
      };
      const [coverImgFile, setCoverImgFile] = useState();

      const handleCoverImgChange = (e) => {
        setCoverImgFile(e.target.files[0]);
      };
      const handleNext = () => {
        const selectedCheckboxes = Object.keys(checkboxValues).filter(
          (checkbox) => checkboxValues[checkbox]
        );
        console.log('Selected checkboxes:', selectedCheckboxes);
        setData(selectedCheckboxes)
        console.log(data)
        console.log("selected images",coverImgFile?coverImgFile:'')
      };
      const [data , setData ] = useState({})
      const [doc , setDoc]=useState()
      const handleChangev = (key, value) => {
        console.log(key, value);
        if(value==='yes'){
            setDoc(true)
            console.log(doc)
        }
        else{
            setDoc(false)

        }
        setData({
          ...data,
          [key]: value,
        });

      };
      
  return (
    <Box>
        <Box>
        <NavBar />
      </Box>
        {/* <p>sjdnfkjsndjkfnjksdnkjfd</p> */}
        <Box sx={{m:1}} >
            <Typography>Printing Details</Typography>
        </Box>
        <Box sx={{ m: 2 }}>
      <FormGroup sx={{display:'flex' , flexDirection:'row'}} >
        <FormControlLabel
          control={<Checkbox checked={checkboxValues.Right} onChange={handleChange} name="Right" />}
          label="Right"
        />
        <FormControlLabel
          control={<Checkbox checked={checkboxValues.left} onChange={handleChange} name="left" />}
          label="left"
        />
        <FormControlLabel
          control={<Checkbox checked={checkboxValues.Front} onChange={handleChange} name="Front" />}
          label="Front"
        />
        <FormControlLabel
          control={<Checkbox checked={checkboxValues.Back} onChange={handleChange} name="Back" />}
          label="Back"
        />
        <FormControlLabel
          control={<Checkbox checked={data.other} value={data.other} onChange={handleChange}
           name="other" />}
          label="other"
        />
      </FormGroup>
      {/* <Button variant="contained" onClick={handleNext}>Next</Button> */}
      <Box sx={{m:1}} >
            <Typography>Is it Sports Kit ? </Typography>
        </Box>
        <Box width={{ width: 300 }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            // onChange={(e, val) => console.log(val)}
            value={data.clothtype}
            onChange={(e) => handleChangev('clothtype',e.target.value)}
            sx={{ mt: 2 }}
          >
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
            {/* <FormControlLabel   value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </Box>
      { doc && <OutlinedInput
                  id="outlined-basic"
                  type="file"
                  label="cover image"
                  placeholder="Cover Image"
                  size="small"
                  sx={{ mt: 2, bgcolor: "white", width: "80%" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <DriveFolderUploadIcon />
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    handleCoverImgChange(e);
                  }}
                />}
      <Box
          sx={{
            width: '100%',
            display: "flex",
            justifyContent: "space-around",
            mt: 5,
            // border:1
          }}
        >
          <Button sx={{ width: "40%", border: 1 }}>Back</Button>
       
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
    
        </Box>
    </Box>

      
    </Box>
  )
}
