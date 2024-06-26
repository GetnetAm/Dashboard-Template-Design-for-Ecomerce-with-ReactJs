import React from "react";
import "./Nav.css"

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
      <i class="fa-solid fa-message"></i>
        <span className="badge bg-primary badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new Messages
          <a href="/">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view All
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="/">
            <img src="" alt="profille" className="rounded-circle" />
         

          <div>
            <h4>Iyasu J</h4>
            <p>Software Developers internationals</p>
            <p>4 hrs. ago</p>
          </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="/">
            <img src="" className="rounded-circle" alt="" />
            <div>
              <h4>Antonio</h4>
              <p>software devloper solutions find software solution</p>
              <p>6 Hrs.ago</p>
            </div>
          </a>

        </li>

        <li>
          <hr className="dropdown-divider" />

        </li>
        <li className="message-item">
          <a href="/">
            <img src="" className="rounded-circle" alt="" />
            <div>
              <h4>Get Amsalu</h4>
              <p>software devloper solutions find software solution</p>
              <p>6 Hrs.ago</p>
            </div>
          </a>

        </li>

        <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="dropdown-footer">
            <a href="/" style={{color:"dodgerblue",fontStyle:"italic", background:"white"}}>show all notifications</a>
          </li>
      </ul>
    </li>
  );
}

export default NavMessage;
