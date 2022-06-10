import React from "react";
import './DashboardNav.css'

const DasboardNav = () => {
  return (
    <div className="dashboard-nav">
      <nav class="navbar bg-light">
        <div class="container p-2">
          <h2>Great</h2>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default DasboardNav;
