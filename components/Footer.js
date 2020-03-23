
import {Navbar,Nav} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="foot" fixed="bottom">
      <div className="left">
        <p>Made by: Jorge Ocaris</p> <a href="#"> Github </a> <a href="#"> Linkedin </a> <a href="#"> Facebook </a>
      </div>
      <div className="right">
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
            Smashicons
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Icon made by
          <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">
            Darius Dan
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
      <div className="bot">
         2020 Copyright 
      </div>
    </div>
  );
};

export default Footer;
