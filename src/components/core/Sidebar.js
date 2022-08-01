import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <Link to="/">
          <li>
            <i className="fa-solid fa-house-chimney"></i>
            <span className="fw-bold">Dashboard</span>
          </li>
        </Link>
        <Link to="/backcare">
          <li>
            <i className="fa-solid fa-child"></i>
            <span>Back care</span>
          </li>
        </Link>
        <Link to="/eyecare">
          <li>
            <i className="fa-solid fa-eye"></i>
            <span>Eye Care</span>
          </li>
        </Link>
        <Link to="/earcare">
          <li>
            <i className="fa-solid fa-ear-listen"></i>
            <span>Ear Care</span>
          </li>
        </Link>
        <Link to="/teethcare">
          <li>
            <i class="fa-solid fa-teeth"></i>
            <span>Teeth Care</span>
          </li>
        </Link>
        <Link to="/headcare">
          <li>
            <i className="fa-solid fa-child"></i>
            <span>Head Care</span>
          </li>
        </Link>
        <Link to="/bonecare">
          <li>
            <i class="fa-solid fa-bone"></i>
            <span>Bone Care</span>
          </li>
        </Link>
        <Link to="/howtouse">
          <li>
            <i className="fa-solid fa-circle-question"></i>
            <span>How to use</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
