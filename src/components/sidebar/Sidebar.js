import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa-solid fa-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <i class="fa-solid fa-bars"></i>
            <span>Documents</span>
            <i class="fa-solid fa-chevron-down"></i>
          </a>

          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-users"></i>

                <span>Customers</span>
              </a>
            </li>

            <li>
              <a href="/">
                <i class="fa-solid fa-users"></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li>
              <a href="/">
                <i className="bi bi-circle"></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <i class="fa-solid fa-users"></i>
            <span>Forms</span>
            <i class="fa-solid fa-users"></i>
          </a>

          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i className="bi bi-circle"></i>
                <span>Application Form</span>
              </a>
            </li>

            <li>
              <a href="/">
                <i className="bi bi-circle"></i>
                <span>Realse Form</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bi bi-circle"></i>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tabllets-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <i className="bi bi-layout-text-window-reverse">
              <span>Tables</span>
              <i class="fa-solid fa-chevron-down ms-auto"></i>
            </i>
          </a>

          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i className="bi bi-circle"></i>
                <span>General Tablets</span>
              </a>
            </li>

            <li>
                <a href="/">
                <i className="bi bi-circle"></i>
                    <span>Data Tablets</span>
                </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse" href="/">
                <i className="bi bi-bar-chart"></i>
                <span>Charts</span>
                <i class="fa-solid fa-chevron-down ms-auto"></i>
            </a>

        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
