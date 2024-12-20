import React from "react";

const Index = () => {
  const filter = (category) => {
    console.log(`Filter applied: ${category}`);
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home-page</title>
        <script
          src="https://kit.fontawesome.com/1e086755ed.js"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../js/script.js"></script>
      </head>
      <body>
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
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  Cart(<span id="cart-value">0</span>)
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="banner-img text-white d-flex align-items-center justify-content-start bg-dark mx-3"
          style={{
            backgroundImage: "url('../images/main-banner.jpg')",
            height: "600px",
            backgroundSize: "cover",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <p className="display-4">New Season Arrivals</p>
            <p className="fs-5">
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </p>
          </div>
        </div>
        <div className="container text-center my-5">
          <h1>Latest Products</h1>
          <hr />
          <div className="d-flex justify-content-center gap-3 my-3 flex-wrap">
            <button onClick={() => filter("all")} className="btn btn-outline-dark">
              All
            </button>
            <button
              onClick={() => filter("men's clothing")}
              className="btn btn-outline-dark"
            >
              Men's Clothing
            </button>
            <button
              onClick={() => filter("women's clothing")}
              className="btn btn-outline-dark"
            >
              Women's Clothing
            </button>
            <button onClick={() => filter("jewelery")} className="btn btn-outline-dark">
              Jewellery
            </button>
            <button onClick={() => filter("electronics")} className="btn btn-outline-dark">
              Electronics
            </button>
          </div>
          <div id="card-items" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
        </div>
        <footer className="text-center py-3">
          <p className="mb-0" style={{ fontSize: "1.3em" }}>
            Made with <span style={{ color: "red" }}>&#x2665;</span> By <u>Tarun Mudhiraj</u>
          </p>
        </footer>
      </body>
    </>
  );
};

export default Index;
