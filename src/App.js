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

function App() {
  return (

    <div>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
      <a href="/service/34513345">Service</a>
      <Routes>
        <Route path="/" element={<Navigate to="/Homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Dashboard/*" element={<Dashboard/>}>
          
          {/* <Route path="/" element={<Default />}/> */}
          <Route path="projects" element={<Projects /> }/>
          <Route path="hello" element={<Hello /> }/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/service/:id" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
