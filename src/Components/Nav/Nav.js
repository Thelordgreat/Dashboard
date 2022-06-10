import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <div>
      <ul class="nav nav-tabs p-3">
        <li class="nav-item">
          <Link to={'/'}>
            <a class="nav-link active" aria-current="page" href="/">
              SignIn
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/signup"}>
            <a class="nav-link" href="/signup">
              Sign Up
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
