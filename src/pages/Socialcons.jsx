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
      <div
        className={`fb${clicked === "fb" ? " clicked" : ""}`}
        onClick={() => handleClick("fb")}
      >
        <LiaFacebook style={{ fontSize: "40px" }} />
      </div>
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
