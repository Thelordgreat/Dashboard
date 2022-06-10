import React, { useState, useEffect, useRef } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();
  const [errMsg, setErr] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErr("");
    //userRef.current.focus();
    console.log(userRef);
  }, [user, pwd]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      
      {success ? (
        <section>
          <Dashboard/>
        </section>
      ) : (
        <section className="container mt-5 pd-3">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-center mb-5">Sign In</h1>

          <form onSubmit={submitHandler}>
            <div className="form-content">
              <div className="row mb-3 justify-content-center">
                <div className="col-sm-6">
                  <input
                    type="username"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3 ml-5 justify-content-center ">
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />

                  <div className="invalid-feedback">
                    please enter a valid password
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-success w-50 btn-lg text-center"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-2">
            <p>
              Dont have an account? <Link to="/signup">Click here</Link>
            </p>
          </div>
        </section>
      )}

    </>
  );
};

export default SignIn;
