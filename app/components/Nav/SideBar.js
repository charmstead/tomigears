"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SideBar({ hide = false }) {
  return (
    !hide && (
      <>
        <style jsx>{`
          .tm-sidebar-left {
            position: fixed;
            top: 0;
            bottom: 0;
            box-sizing: border-box;
            width: 240px !important;
            padding: 120px 40px 60px 40px;
            border-right: 1px #e5e5e5 solid;
            overflow: auto;
            z-index: 10;
          }

          .tm-sidebar-left ul li a:hover:not(#menu) {
            background-color: #226caf !important;
            padding-left: 5px;
            color: #fff;
            font-weight: 600;
          }
        `}</style>
        <div className="tm-sidebar-left uk-visible@m uk-background-muted">
          <ul className="uk-nav uk-nav-default tm-nav">
            {/* <li className="uk-nav-header">Patients</li> */}
            <li className="uk-active">
              <Link href="/repairs">Repairs</Link>
            </li>
            <li className="uk-active">
              <Link href="/bookings">Appointments</Link>
            </li>
          </ul>
          <ul className="uk-nav uk-nav-default tm-nav">
            <li className="uk-active">
              <Link href="/settings">Setting</Link>
            </li>
            <li className="uk-active">
              <a role="button" href="#" onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>
                <i className="uk-margin-small-right" uk-icon="icon: sign-out"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  );
}
