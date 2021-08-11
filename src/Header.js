import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header(){
    const style={
        backgroundColor:'#e3f2fd'
      };
    return(
        <nav className="navbar-light" style={style}>
                <NavLink to="/" activeClassName={{fontWeight: "bold", color: "red"  }}> Home</NavLink>
                 <NavLink to="/about" activeClassName={{fontWeight: "bold", color: "red"  }}> About</NavLink>
           </nav>
    )
}
export default Header;