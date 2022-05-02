import React from "react";

import firstImg from "../assets/images/fs-gird-1.png";
import secondImg from "../assets/images/fs-gird-2.png";
import thirdImg from "../assets/images/fs-gird-3.png";
import fourthImg from "../assets/images/fs-gird-4.png";

export default function FirstSec() {
  return (
    <div className="first-sec">
      <div className="section-number__css-icon">
        <span className="section-number__css-icon__line"></span>
        <div className="section-number__css-icon__circle">
          <span className="section-number__css-icon__number">01</span>
        </div>
      </div>
      <div className="first-sec__grid">
        <img src={firstImg} alt="" />
        <img src={secondImg} alt="" />
        <img src={thirdImg} alt="" />
        <img src={fourthImg} alt="" />
      </div>
      <h3 className="first-sec__h3">Built for modern use</h3>
      <h2 className="first-sec__h2">Smarter meetings, all in one place</h2>
      <p className="first-sec__p">
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </div>
  );
}
