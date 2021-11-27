import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5">
      <footer className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="course">
              <h3 className="text-light pl-5">Latest</h3>
              <ul>
                <li>
                  <a href="/">360-tours</a>
                </li>
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Italian</a>
                </li>
                <li>
                  <a href="/">Downloads</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h3 className="text-light pl-5">About</h3>

            <ul>
              <li>
                <a href="/">Abut us</a>
              </li>
              <li>
                <a href="/">Corprate</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Members</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h3 className="text-light pl-5">Contact</h3>
            <li>
              <a href="/">+(960) 3323229</a>
            </li>
            <li>
              <a href="/">info@visitmaldives.com</a>
            </li>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h3 className="text-light pl-5">Address</h3>
            <li>
              2nd Floor, H. Zonaria, <br /> Boduthakurufaanu Magu, Male', <br />{" "}
              Maldives
            </li>
          </div>
          <div className="text-center text-light">
            Copyright © Developer SUJAN 2021{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
