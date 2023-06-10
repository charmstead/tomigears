"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { LINKS } from "@/utility/sitelink";
import logo from "../../../public/images/tomigear_logo.png";

const inter = Inter({ subsets: ["latin"], weight: ["900"] });

const NavBar = ({ session }) => {
  return (
    <header className="height">
      <nav
        className="uk-navbar-container height uk-flex uk-flex-middle uk-card uk-card-default tm-background-white zIndex"
        uk-navbar=""
      >
        <div className="uk-navbar-left uk-padding-small">
          <ul className="uk-navbar-nav ">
            <li className="">
              <Link className="uk-padding-small uk-logo" href="/">
                <Image
                  className="uk-preserve uk-margin-small-right"
                  src={logo}
                  width="30"
                  height="50"
                  alt="logo"
                  sizes="100vw"
                  // uk-img=""
                />
                <span className={["uk-text-large uk-text-primary", inter.className].join(" ")}>TOMIGEARS</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right uk-visible@m">
          <ul className="uk-navbar-nav ">
            <li className="">
              <Link className="uk-text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <a href="#services" className="uk-text-primary">
                Service
              </a>
            </li>
            <li className="uk-text-primary">
              <a href="#contact_us" className="uk-text-primary">
                Contact
              </a>
            </li>
            <li className="">
              <Link className="uk-text-primary" href="/booking">
                Appointment
              </Link>
            </li>
            {session?.user?._id ? null : (
              <li className="">
                <Link href={LINKS.LOGIN}>
                  <button className="uk-button uk-button-primary uk-button-small">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="uk-navbar-right uk-margin-right">
          <ul className="uk-navbar-nav uk-dropnav" uk-dropnav=""></ul>
        </div>
      </nav>
      <style jsx>
        {`
          .height {
            height: 60px;
          }
          .button_padding {
            padding: 10px;
          }

          .signup_padding {
            padding-left: 5px;
            padding-right: 10px;
          }

          .signup_dropdown {
            width: 220px;
          }

          .zIndex {
            z-index: 100;
          }
        `}
      </style>
    </header>
  );
};

export default NavBar;
