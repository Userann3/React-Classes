import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Your Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <span className='nav-link'><NavLink to={'/'} style={{textDecoration:'none', fontSize:'20px'}}>Home</NavLink></span>
            </li>
            <li className="nav-item">
              <span className='nav-link'><NavLink to={'/Products'} style={{textDecoration:'none', fontSize:'20px'}}>Products</NavLink></span>

              {/* <NavLink to={'/Products'}>Products</NavLink> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Contact</a> */}
              <span className='nav-link'><NavLink to={'/Contact'} style={{textDecoration:'none', fontSize:'20px'}}>Contact</NavLink></span>
              {/* <NavLink to={'/Contact'}>Contact</NavLink> */}

            </li>
            <li className="nav-item">
              {/* <NavLink to={'/About'}>About</NavLink> */}
              <span className='nav-link'><NavLink to={'/About'} style={{textDecoration:'none', fontSize:'20px'}}>About</NavLink></span>
              

              {/* <a className="nav-link" href="#">About</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default header;
