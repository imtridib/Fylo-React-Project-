/** @format */

import Logo from "../img/logo.svg";
export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img src={Logo} alt='logo' />
        <div className='menubar'>
          <div>Features</div>
          <div>Team</div>
          <div>Sign In</div>
        </div>
      </div>
    </>
  );
}
