import React from 'react';
import './Header.css'
import LeftDrawer from './LeftDrawer';
function Header({setCategory}) {
   return <div className='head'>
      <div className="icon">
         <LeftDrawer setCategory={setCategory}/>
      </div>
      <img style={{
         cursor: "pointer"
      }}
         src="logo.png"
         alt="logo"
         height="80%"
      />
  </div>;
}

export default Header;
