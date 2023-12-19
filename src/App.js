import React from 'react';
import './App.css';
import Header from './Components/header';
import Wrapper from './Components/Wrapper';
import { Outlet } from 'react-router-dom';





function App() {
  return (
    
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
