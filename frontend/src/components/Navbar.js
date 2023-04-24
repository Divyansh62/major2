import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Route,Routes, Navigate } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
function Navbar  ()  {
  const user = localStorage.getItem("token");
  return(<Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      {/* <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} /> */}
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes> 
    </Stack>
  </Stack>);
};

export default Navbar;
