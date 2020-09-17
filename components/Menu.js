import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = () => {
  return (
    <Navbar className="Menu" fixed="top" collapseOnSelect expand="lg">
      <Navbar.Brand
        className="logo"
        href="#"
        onClick={() => scroll.scrollToTop({ smooth: true })}
      >
        <img src="/static/img/galaxy.png" width={40} height={40} />
        Galaxies
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Link smooth={true} offset={-60} to="whatIs" href="#">
            <Nav.Link className="btnM" href="#">
              What's that ?
            </Nav.Link>
          </Link>
          <Link smooth={true} offset={-80} to="someG" href="#">
            <Nav.Link className="btnM" href="#">
              Some of them
            </Nav.Link>
          </Link>
          <Link smooth={true} offset={-80} to="contributions" href="#">
            <Nav.Link className="btnM" href="#">
              Contributions
            </Nav.Link>
          </Link>
          <Link smooth={true} to="about">
            <Nav.Link className="btnM">About</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
