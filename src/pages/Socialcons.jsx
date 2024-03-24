/** @format */

import React, { useState } from "react";
import { LiaFacebook, LiaTwitter, LiaInstagram } from "react-icons/lia";
function SocialIcons() {
  const [clicked, setClicked] = useState("");

  const handleClick = (icon) => {
    setClicked(icon);
    setTimeout(() => setClicked(""), 300); // Reset clicked state after 300ms
  };

  return (
    <div className='e'>
      <a
        href='https://www.facebook.com/tridib.chakraborty.180'
        className={`fb${clicked === "fb" ? " clicked" : ""}`}
        onClick={() => handleClick("fb")}
        style={{ textDecoration: "none", color: "inherit" }}
        target='_blank' // Open link in new window
        rel='noopener noreferrer' // Add security measures
      >
        <LiaFacebook style={{ fontSize: "40px" }} />
      </a>
      <div
        className={`tw${clicked === "tw" ? " clicked" : ""}`}
        onClick={() => handleClick("tw")}
      >
        <LiaTwitter style={{ fontSize: "40px" }} />
      </div>
      <div
        className={`ins${clicked === "ins" ? " clicked" : ""}`}
        onClick={() => handleClick("ins")}
      >
        <LiaInstagram style={{ fontSize: "40px" }} />
      </div>
    </div>
  );
}

export default SocialIcons;
