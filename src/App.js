import React from 'react';
import './App.css';
import Header from './Components/header';
import Wrapper from './Components/Wrapper';
import { Outlet } from 'react-router-dom';
import Search from './Components/Search';





function App() {
  return (
    <Wrapper>
      <Header />
      <Search />
      <Outlet />
    </Wrapper>
  );
}

export default App;
