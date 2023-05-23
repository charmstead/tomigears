import React from "react";
import logo from "../../../assets/images/logo.png";
import Aux from "../../../hoc/Aux";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
  <Aux>
    <header
      className="uk-margin-bottom uk-width-expand"
      id="page_toolbar"
      uk-sticky=""
      style={{ backgroundColor: "#fff" }}
    >
      <nav
        className="uk-navbar menu uk-box-shadow-small uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        uk-navbar=""
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <li className="uk-active">
              <a href="https://mrbrepair.tech" target="_blank">
                <img className="uk-preserve-width" src={logo} width="150" alt="logo" />
              </a>
            </li>
            <li className="uk-active uk-flex ">
              <a
                uk-navbar-toggle-icon=""
                type="button"
                uk-toggle="target: .nav-anchor; cls: hide-sidebar;"
                className="uk-navbar-toggle uk-visible@m uk-icon uk-navbar-toggle-icon"
                aria-expanded="false"
              ></a>
            </li>
          </ul>
        </div>

        <div className={["uk-navbar-right uk-visible@s", classes.HideLogOut].join(" ")}>
          <ul className="uk-navbar-nav">
            <li></li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <a
            uk-navbar-toggle-icon=""
            href="#offcanvas"
            uk-toggle=""
            className="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon"
            aria-expanded="false"
          ></a>
        </div>
      </nav>
      <div id="toggle-animation" className="uk-hidden@s uk-container uk-box-shadow-small" hidden={1}>
        <ul className="uk-nav uk-navbar-dropdown-nav uk-text-secondary">
          <li>
            <NavLink activeClassName="uk-active" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <a className="uk-active" href="/customer">
              Customers
            </a>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/inventory">
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/appointment">
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/create-order">
              Create-Order
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/order">
              Order
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/terms-and-conditions">
              Terms and Conditions
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/signout">
              Signout
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  </Aux>
);

export default Toolbar;
