import React from "react";

function CardFiliter({ filterChange }) {
  return (
    <div className="filter">
      <a className="icon" href="/" data-bs-toggle="dropdown">
        <i class="fa-solid fa-ellipsis"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filiter</h6>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("Today")}
            href="/"
          >
            Today
          </a>
        </li>

        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("This Month")}
            href="/"
          >
            This Month
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("This Year")}
            href="/"
          >
            This Year
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFiliter;
