import React from "react";
import "./Sidebar.css";
import navList from "../../data/navItem";
import NavItem from "../nav/NavItem";

function Sidebar() {
  return (
    // sidebar style
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa-solid fa-border-all"></i>
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
            <i class="fa-solid fa-book"></i>
            <span>Documents</span>
            <i class="fa-solid fa-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
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
            <i class="fa-solid fa-list"></i>
            <span>Forms</span>
            <i class="fa-solid fa-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Release Form</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <i class="fa-solid fa-table"></i>
            <span>Tables</span>
            <i class="fa-solid fa-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <span>Charts</span>
            <i class="fa-solid fa-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Chart .Js</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>ApexCharts</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Echarts</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="/"
          >
            <i class="fa-solid fa-icons"></i>
            <span>Icons</span>
            <i class="fa-solid fa-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Remix Icons</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-circle-info"></i>
                <span>Box Icons</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>
        {navList.map(nav=>(
          <NavItem key={nav._id} nav={nav} />
         
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
