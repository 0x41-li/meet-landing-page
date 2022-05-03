import React from "react";

// mobile images for first section
import firstImg from "../assets/images/fs-gird-1.png";
import secondImg from "../assets/images/fs-gird-2.png";
import thirdImg from "../assets/images/fs-gird-3.png";
import fourthImg from "../assets/images/fs-gird-4.png";

// tablet images for first section
import firstImgTablet from "../assets/images/fs-gird-1-tablet.png";
import secondImgTablet from "../assets/images/fs-gird-2-tablet.png";
import thirdImgTablet from "../assets/images/fs-gird-3-tablet.png";
import fourthImgTablet from "../assets/images/fs-gird-4-tablet.png";

// desktop images for first section
import firstImgDesktop from "../assets/images/fs-gird-1-desktop.png";
import secondImgDesktop from "../assets/images/fs-gird-2-desktop.png";
import thirdImgDesktop from "../assets/images/fs-gird-3-desktop.png";
import fourthImgDesktop from "../assets/images/fs-gird-4-desktop.png";

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
        {/* Mobile grid images */}
        <img class="first-sec__grid-m" src={firstImg} alt="" />
        <img class="first-sec__grid-m" src={secondImg} alt="" />
        <img class="first-sec__grid-m" src={thirdImg} alt="" />
        <img class="first-sec__grid-m" src={fourthImg} alt="" />

        {/* Tablet grid images */}
        <img className="first-sec__grid-t" src={firstImgTablet} alt="" />
        <img className="first-sec__grid-t" src={secondImgTablet} alt="" />
        <img className="first-sec__grid-t" src={thirdImgTablet} alt="" />
        <img className="first-sec__grid-t" src={fourthImgTablet} alt="" />

        {/* Desktop grid image */}
        <img className="first-sec__grid-d" src={firstImgDesktop} alt="" />
        <img className="first-sec__grid-d" src={secondImgDesktop} alt="" />
        <img className="first-sec__grid-d" src={thirdImgDesktop} alt="" />
        <img className="first-sec__grid-d" src={fourthImgDesktop} alt="" />
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
