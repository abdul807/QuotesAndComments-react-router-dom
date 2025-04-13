import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
// import {QuoteForm} from '../quotes/QuoteForm'

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Great Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/addquote'>Add a Quote</NavLink>
          </li>{" "}
          <li>
            <NavLink to='/'>All Quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
