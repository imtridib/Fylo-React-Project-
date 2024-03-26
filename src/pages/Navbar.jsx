/** @format */

import Logo from "../img/logo.svg";
export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img className='limg' src={Logo} alt='logo' />
        <ul className='menubar'>
          <li className='options'>Features</li>
          <li className='options'>Team</li>
          <li className='options'>Sign In</li>
        </ul>
      </div>
    </>
  );
}
