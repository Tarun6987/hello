import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  return (
    <div className="container-fluid vh-100">
      {/* Main Row */}
      <div className="row h-100 justify-content-center align-items-center">
        {/* Left Section: Brand and Text */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 text-primary fw-bold">Amazon</h1>
          <p className="fs-4">
          An online marketplace offering a wide range of products, from electronics to groceries, with fast delivery and customer-focused services."          </p>
        </div>
        {/* Right Section: Forms */}
        <div className="col-md-4">
          {/* Login Form */}
          <div className="bg-white p-4 shadow rounded">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email or Phone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary btn-lg w-100 mb-3">
                Log In
              </button>
              <div className="text-center">
                <a href="/" className="text-decoration-none">
                  Forgotten password?
                </a>
              </div>
              <hr />
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  Create New Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="registerModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <div className="d-flex gap-2">
                    <select className="form-select">
                      <option>Day</option>
                      {[...Array(31).keys()].map((day) => (
                        <option key={day + 1}>{day + 1}</option>
                      ))}
                    </select>
                    <select className="form-select">
                      <option>Month</option>
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month, idx) => (
                        <option key={idx}>{month}</option>
                      ))}
                    </select>
                    <select className="form-select">
                      <option>Year</option>
                      {Array.from({ length: 100 }, (_, i) => (
                        <option key={i}>{new Date().getFullYear() - i}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="d-flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="form-check-input"
                      />
                      <label htmlFor="male" className="form-check-label">
                        Male
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="form-check-input"
                      />
                      <label htmlFor="female" className="form-check-label">
                        Female
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="custom"
                        className="form-check-input"
                      />
                      <label htmlFor="custom" className="form-check-label">
                        Custom
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
