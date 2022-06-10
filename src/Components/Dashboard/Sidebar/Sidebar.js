import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div><i className="icon">{val.icon}</i></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
