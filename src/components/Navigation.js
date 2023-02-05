import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavScrollExample() {
  const dispatch = useDispatch();
  const searchInput = useRef();
  const navigate = useNavigate();

  const test = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput.current.value}`);
    dispatch(movieAction.loadingChange());
    // console.log(e.target.value);
    // console.log(searchInput.current.value);
    dispatch(movieAction.getSearchPage(searchInput.current.value));
    searchInput.current.value = "";
  };
  const goMovieDetail = () => {
    // console.log(item);
    dispatch(movieAction.loadingChange());
  };
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" onClick={goMovieDetail}>
            <img
              width={100}
              src="https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-item" onClick={goMovieDetail}>
                Home
              </Link>
              <Link to="/movies" className="nav-item" onClick={goMovieDetail}>
                Movies
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => test(e)}>
              <Form.Control
                ref={searchInput}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
