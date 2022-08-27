import logo from './logo.svg';
import './App.css';
import Dashboard from './Componenets/Dashboard/Dashboard'
import Login from './Componenets/Login/Login'
import {Navigate,  Routes,  Route } from 'react-router-dom';
import Homepage from './Componenets/Homepage/Homepage';
import Service from './Componenets/Service/Service';
// import PrivateRoute from './Componenets/PrivateRoute/PrivateRoute';
import Default from './Componenets/Default/Default'
import Projects from './Componenets/Projects/Projects'
import Hello from './Componenets/Hello'
import PrivateRoute from './Componenets/PrivateRoute/PrivateRoute';
import PrivateOutlet from './Componenets/PrivateOutlet';


function App() {
  return (

    <div><a href="/">home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/dashboard/Projects">Projects</a>
      <a href="/service/34513345">Service</a>
      <Routes>
        <Route path="/" element={<Navigate to="/Homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />


        <Route path="/dashboard/*" element={<Dashboard/>}>
          
          <Route path="/dashboard/*" element={<PrivateOutlet />}>
            <Route path="projects" element={<Projects /> }/>
            <Route path="hello" element={<Hello /> }/>
          </Route> 
        </Route>


        {/* <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="service" element={<Service /> }/>
          </Route>  */}
      </Routes>
    </div>
  );
}

export default App;
