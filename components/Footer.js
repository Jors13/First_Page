import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="foot" fixed="bottom">
      <div className="left">
        <p>Made by: Jorge Ocaris</p>

        <a href="https://github.com/Jors13">
          <img src="/static/img/githubLogo.svg" alt="Github" height="40" width="60" />
        </a>

        <a href="https://www.linkedin.com/in/jorge-andres-ocaris-acu%C3%B1a-8b73b01a7/">
          <img src="/static/img/linkedinLogo.svg" alt="Linkedin" height="40" width="60" />
        </a>

        <a href="#">
          <img src="/static/img/workLogo.svg" alt="Portfolio" height="40" width="60" />
        </a>
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
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">
            Dave Gandy
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div className="bot">2020 Copyright</div>
    </div>
  );
};

export default Footer;
