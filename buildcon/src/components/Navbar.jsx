import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
    <a className="navbar-brand" href="#"><span className="text-warning">Build</span>Con</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#project">Products</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#conatct">Contact</a>
        </li>
      </ul>
      <button className="btn p-2 my-lg-0 my-2">Sign In</button>
    </div>
  </nav>

 

  )
}

export default Navbar


