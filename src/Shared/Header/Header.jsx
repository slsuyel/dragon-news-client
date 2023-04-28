import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" className="img-fluid" />
        <p>
          <small> This is tittle of dragon news</small>
          <p>{moment().format("dddd,MMMM Do, YYYY")}</p>
        </p>
      </div>
      <div></div>
      <div className="align-items-center bg-info border d-flex mb-2">
        <p className="bg-danger mb-0 me-2 p-1 px-4 text-white">Latest</p>
        <Marquee pauseOnHover={true} speed={70}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="fw-normal me-2 text-dark text-decoration-none"
                to="/"
              >
                Home
              </Link>

              <Link
                className="fw-normal me-2 text-dark text-decoration-none"
                to="/about"
              >
                About
              </Link>

              <Link
                className="fw-normal me-2 text-dark text-decoration-none"
                to="/career"
              >
                Career
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
              {user ? (
                <>
                  <Button variant="primary">Log Out</Button>
                </>
              ) : (
                <>
                 <Link> login </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
