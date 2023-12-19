import React from "react";
import { Link } from "react-router-dom";




const Header = () => {
    return (
     
    <header className="flex h-[180px] bg-black w-full">
      <Link to='/'><button className="flex w-[100px] place-self-center mt-[50px] ml-[200px]"><img src="../images/png/JediOrder.png" alt="jedilogo"></img></button></Link>
      <img className="flex mt-[px] place-self-center h-[130px] ml-[300px]" src="../images/png/SWLogo.png" alt="starwarslogo" />
    </header>
      
    );
  };

export default Header;