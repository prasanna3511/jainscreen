// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Box } from '@mui/system';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <Box sx={{m:1}} >

//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 250 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Size</TableCell>
//             <TableCell align="right">Quantity</TableCell>
//             {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
//             {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               {/* <TableCell align="right">{row.fat}</TableCell> */}
//               {/* <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell> */}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </Box>

//   );
// }


import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { Box, display } from '@mui/system';
import NavBar from '../../Components/NavBar';
import { useNavigate } from "react-router-dom";


const EditableTablePage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleCellEdit = (id, field, value) => {
    setData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
    console.log(data)
  };

  const handleAddRow = () => {
    const newRow = { id: Date.now(), name: '', age: '' };
    setData(prevData => [...prevData, newRow]);
  };

  const handleDeleteRow = id => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleNext=()=>{
    navigate('/printingdetails')
    console.log(data)
  }

  return (
    <div>
        <Box>
        <NavBar />
      </Box>
         <Button variant="outlined" onClick={handleAddRow}>
        Add Row
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ justifyContent:'center',
        }} >
              {/* <TableCell>ID</TableCell> */}
              <TableCell sx={{}} >Size</TableCell>
              <TableCell>Quantity</TableCell>
              {/* <TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                {/* <TableCell>{item.id}</TableCell> */}
                <TableCell sx={{width:'10%'}}>
                  <TextField
                  size='small'
                    value={item.size}
                    onChange={event => handleCellEdit(item.id, 'size', event.target.value)}
                  />
                </TableCell>
                <TableCell sx={{width:'10%'}} >
                  <TextField
                  size='small'
                    value={item.quantity}
                    onChange={event => handleCellEdit(item.id, 'quantity', event.target.value)}
                  />
                </TableCell>
                {/* <TableCell sx={{border:1}} >
                  <Button variant="outlined" onClick={() => handleDeleteRow(item.id)}>
                    Delete
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
     
    </div>
  );
};

export default EditableTablePage;
