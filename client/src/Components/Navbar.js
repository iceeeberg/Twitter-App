import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav mr-auto" id="navbarNavDropdown">
        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item active"><Link to="/search" className="nav-link">Search</Link></li>
        <li className="nav-item active"><Link to="/randomtweet" className="nav-link">Random Tweet</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;