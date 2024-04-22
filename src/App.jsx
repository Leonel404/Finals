import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/login.jsx'
import Register from './assets/register.jsx'
import Home from './assets/home.jsx'
function App() {
  return (
    <BrowserRouter>

      <Routes>
          {/* Route for the Home component */}
          <Route path="/Login" element={<Login/>} />

          {/* Route for the About component */}
          <Route path="/Register" element={<Register/>} />

          {/* Route for the Contact component */}
          <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
