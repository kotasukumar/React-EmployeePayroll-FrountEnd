import './App.css';
import PayrollHome from './component/EmployeeHome';
import EmployeePayroll from './component/Employeeform';
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">      
        <Routes>
            <Route path="/add" element={ <EmployeePayroll/> }/>
            <Route path="/home" element={<PayrollHome/>} /> 
            <Route exact path="/EmployeeForm/:id" element={ <add/>} />  
            <Route path='' element={ <PayrollHome/> } />        
        </Routes>        
    </div>
  );
}

export default App;
