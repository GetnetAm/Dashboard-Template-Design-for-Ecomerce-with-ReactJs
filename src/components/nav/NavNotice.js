import React from "react";
import "./Nav.css";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
        <i className="fa-solid fa-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="/">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i class="fa-solid fa-circle-exclamation text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum varitatials editseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i class="fa-solid fa-circle-xmark text-danger"></i>

          <div>
            <h4>Atque rerum nescunt</h4>
            <p>Quae dolorem earum veritais oditseno</p>
            <p>1 hr ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <li className="notification-item">
            <i class="fa-solid fa-circle-check text-success"></i>
            <div>
              <h4>Site rerum fuga</h4>
              <p>Quae dolorem earum veritails editseno</p>
              <p>2 hrs. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="notification-item">
            <i class="fa-solid fa-circle-info text-primary"></i>
            <div>
              <h4>Dicta reprehendirt</h4>
              <p>Quae dolorem earum veritais editseno</p>
              <p>4 hrs. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="dropdown-footer">
            <a href="/" style={{color:"dodgerblue",fontStyle:"italic", background:"white"}}>show all notifications</a>
          </li>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
