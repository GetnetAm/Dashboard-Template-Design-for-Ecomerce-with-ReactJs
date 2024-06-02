import React from 'react'
import profleImg from "../../images/user2.jpg"
import "./Nav.css"

function NavAvater() {
  return (
    <li className="nav-item dropdown pe-3">
    <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">

     <img src={profleImg} alt='profile' className='rounded-circle' />
     <span className='d-none d-md-block dropdown-toggle ps-2'>GetWare</span>
      
   </a>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
      <li className="dropdown-header">
      <h6>GetWare</h6>
      <span>Fullstack Developer</span>
        <a href="/">
          <span className="badge rounded-pill bg-primary p-2 ms-2">
            view All
          </span>
        </a>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

    <li>
      <a className='dropdown-item d-flex align-items-center' href='/'>
      <i class="fa-solid fa-user"></i>
        <span>My Profile</span>

      </a>
    </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
        <a className='dropdown-item d-flex align-items-center' href='/'>
        <i class="fa-solid fa-gear"></i>

          <span>Account Settings</span>


        </a>
      </li>

      <li>
        <hr className="dropdown-divider" />

      </li>
     <li>
      <a className='dropdown-item d-flex align-items-center' href='/'>
      <i class="fa-regular fa-circle-question"></i>

        <span>Need Help</span>

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
  )
}

export default NavAvater
