import React from 'react';
import { NavLink } from 'react-router-dom';


   const Header = ()=>(
   
    <header>
        <h1>Expensify</h1>
       <div className="navlink">
        <NavLink  to="/" exact activeClassName="active-now">Home</NavLink>
        <NavLink to="/create" activeClassName="active-now">Create</NavLink>
        {/*<NavLink to="/edit" activeClassName="active-now">Edit</NavLink>*/}
        <NavLink to="/help" activeClassName="active-now">Help</NavLink>
       </div>
    </header>

);

export default Header;