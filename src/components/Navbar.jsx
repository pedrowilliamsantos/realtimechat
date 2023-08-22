import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <span className="logo">Dev Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Jonh</span>
        <button>logout</button>
      </div>
    </div>
    </>
  );
}

export default Navbar;