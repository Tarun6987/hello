import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Cart = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cart</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../js/script.js"></script>
        <link href="../css/styles.css" rel="stylesheet" />
      </head>
      <body className="bg-white">
        <div>
          <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
              <a className="navbar-brand" href="#">
                <h2 className="mb-0">Ecommerce</h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="./index.html" id="home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="./Product-page.html" id="products">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="./About.html" id="about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="./Contact-page.html" id="contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-flex gap-3">
                  <a href="./login.html" className="btn btn-outline-dark btn-md">
                    <i className="fa-solid fa-right-to-bracket me-2"></i>Login
                  </a>
                  <a href="./Register.html" className="btn btn-outline-dark btn-md">
                    <i className="fas fa-user-plus me-2"></i>Register
                  </a>
                  <a href="./cart.html" className="btn btn-outline-dark btn-md">
                    <i className="fa-solid fa-cart-shopping me-2"></i>Cart(<span id="cart-value">0</span>)
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div id="cart" className="container">
            <h1 className="text-center mt-2">Cart</h1>
            <hr className="w-100 mx-auto" />
            <div
              className="d-flex flex-column justify-content-center align-items-center p-4 bg-dark-gray border rounded"
              style={{ height: "350px" }}
            >
              <p className="fs-1 mb-4 text-center">Your Cart is Empty</p>
              <a href="./index.html" className="text-decoration-none">
                <button
                  id="cart-continue-btn"
                  className="btn btn-outline-dark px-4 py-2"
                >
                  <i className="fa-solid fa-left-long me-2"></i>Continue Shopping
                </button>
              </a>
            </div>
            <p className="text-center mt-3 fs-5">
              Made with <span style={{ color: "red" }}>&#x2665;</span> By <u>Tarun Mudhiraj</u>
            </p>
          </div>
          <div className="container my-5" id="cart-checkout">
            <div className="row">
              <div className="border rounded col-md-8" id="cart-items"></div>
              <div className="col-md-4" id="checkout"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Cart;
