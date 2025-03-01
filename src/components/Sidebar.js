import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-left">
      <div className="nano-content">
        <nav className="nav-main">
          <ul className="nav">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i> 홈
              </Link>
            </li>
            <li>
              <Link to="/calculator">
                <i className="fa fa-calculator"></i> 계산기
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <i className="fa fa-check-square-o"></i> To-Do 리스트
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
