import React from "react";
import "./Footer.css";
import "tachyons";
// import googleForm from "./assests/images/google-form.png";
import instaLogo from "./assests/logos/instagram.svg";
// import youtubeLogo from "./assests/logos/youtube.svg";
// import tuplesLogo from "./assests/images/logo192.png";
// import leoLogo from "./assests/images/leoclub.png";

const Footer = () => {
  return (
    <div className="bgcolour pa3">
      <div style={{ margin: "0" }} className="social-logos">
      </div>
      <div className="tc grow br1 pa1 ma2 dib bw2">
        <h4>Made By : </h4>
      </div>
      <div className="tc grow br1 pa1 ma2 dib bw2">
          <a href="https://www.instagram.com/designer.thou.25/" rel="noopener noreferrer" target='_blank'>
            <img
              className="instagram-logo"
              src={instaLogo}
              alt="instagram-logo-2"
            />
            designer.thou.25
          </a>
        {/*<div className="tc grow br1 pa1 ma2 dib bw2">
          <a href="https://t.me/therealengineering" rel="noopener noreferrer" target='_blank'>
            <img className="youtube-logo" src={tuplesLogo} alt="tuples-logo" />
            TuplesEdu
          </a>
        </div>
        <div className="tc grow  br1 pa1 ma2 dib bw2">
          <a href="https://www.instagram.com/new.design.09/" rel="noopener noreferrer" target='_blank'>
            <img
              className="instagram-logo"
              src={instaLogo}
              alt="instagram-logo-1"
            />
            new.design.09
          </a>
        </div>
        <div className="tc grow br1 pa1 ma2 dib bw2">
          <a href="https://www.instagram.com/leoclub.walkeshwar/" rel="noopener noreferrer" target='_blank'>
            <img
              className="instagram-logo"
              src={leoLogo}
              alt="leo-logo"
            />
            leoclub.walkeshwar
          </a>
        </div>
        <div className="tc grow br1 pa1 ma2 dib bw2">
          <a href="https://www.youtube.com/c/TuplesEdu" rel="noopener noreferrer" target='_blank'>
            <img
              className="youtube-logo"
              src={youtubeLogo}
              alt="youtube-logo"
            />
            TuplesEdu
          </a>
        </div>
        <div className="tc grow br1 pa1 ma2 dib bw2">
          <a href="http://bit.ly/learnfromhome-feedback" rel="noopener noreferrer" target='_blank'>
            <img className="github-logo" src={googleForm} alt="github-logo" />
        Feedback Link
        </a>
  </div>*/}
      </div>
    </div>
  );
};

export default Footer;

