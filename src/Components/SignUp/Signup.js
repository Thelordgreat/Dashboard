import React from "react";
import "./Signup.css";
import Nav from "../Nav/Nav";

const Signup = () => {

  const submitHandler = async (e) =>{
    e.preventDefault();
  }


  return (
    <>
      <Nav />
      <div className="container mt-5 px-5 border p-5">
        <form className="row g-3" onSubmit={submitHandler}>
          
            <div className="col-md-6">
              <label for="username" className="mb-1">
                Username:
              </label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  required
                />
            </div>

            <div className="col-md-6">
              <label for="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              required
            />
          </div>

          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              required
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label"
                for="gridCheck"
                required
              >
                Confirm that the details are correct
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
