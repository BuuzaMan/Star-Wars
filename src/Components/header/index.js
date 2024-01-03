import React from "react";



const Header = () => {
    return (
    <header className="flex h-[300px] bg-black desktop:w-[1440px] tablet:w-[1024px] mobile-[375px] justify-between items-center bg-header-image bg-center bg-cover">
      <img className="flex mx-auto desktop:h-[100px] tablet:h-[100px] mobile:h-[100px]" src="../images/png/SWLogo.png" alt="starwarslogo" />
    </header>
      
    );
  };

export default Header;