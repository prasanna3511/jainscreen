import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./App/Pages/Login";
import DashBoard from "./App/Pages/Dashboard/DashBoard";
import Categorydetail from "./App/Pages/CategoryDetail/CategoryDetail";
import QuantityTable from "./App/Pages/QuantitySize/QuantityTable";
import PrintingDetails from "./App/Pages/PrintingDetails/PrintingDetails";
import TableCreation from "./App/Pages/TableCreation/TableCreation";



function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={  <Login/>} />
<Route path="/dashboard" element={  <DashBoard/>} />
<Route path="/categorydetail" element={  <Categorydetail/>} />
<Route path="/quantitytable" element={  <QuantityTable/>} />
<Route path="/printingdetails" element={  <PrintingDetails/>} />
<Route path='/tablecreation' element={ <TableCreation />  } />
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
