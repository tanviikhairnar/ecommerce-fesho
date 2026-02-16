import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Search, Cart } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../ProductCart/CartContext";

import "./mainNavbar.css";
import feshologo from "../assets/fesho-logo.png";

function MainNavbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <Navbar expand="lg" bg="white" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand className="fw-bold text-success">
          <img src={feshologo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto align-items-center">

            <NavDropdown title="Home" className="nav-hover">
              <NavDropdown.Item>Home Page 01</NavDropdown.Item>
              <NavDropdown.Item>Home Page 02</NavDropdown.Item>
              <NavDropdown.Item>Home Page 03</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" className="nav-hover">
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item>Service</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Shop" className="nav-hover">
              <NavDropdown.Item as={Link} to="/products">
                Products
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/cart">
                Cart
              </NavDropdown.Item>

              <NavDropdown.Item>Checkout</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-hover">News</Nav.Link>
            <Nav.Link className="nav-hover">Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-4">

            <Search size={20} className="icon-hover" />

            <div
              className="cart-wrapper"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <Cart size={22} className="icon-hover" />
              {totalItems > 0 && (
                <span className="cart-badge">
                  {totalItems}
                </span>
              )}
            </div>

            <Button className="discover-btn"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}>SHOP NOW</Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;



