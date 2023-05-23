"use client";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import background from "../../../public/images/dev-bg.gif";

const inter = Inter({ subsets: ["latin"] });

const Main = () => {
  return (
    <>
      <main
        className="uk-position-relative uk-flex uk-flex-middle uk-flex-center"
        // data-src={"/images/dev-bg.gif"}
        // uk-height-viewport="offset-bottom: 11.9"
        // uk-img=""
        style={{ height: "88vh" }}
      >
        <Image className={"uk-position uk-position-center"} src={background} sizes="100vw" alt="banner" />
        <div
          className="bg-fade uk-position-center"
          style={{ width: "100%", height: "88vh" }}
          // uk-height-viewport="offset-bottom: 12"
        ></div>

        <section className={["tm-text-white uk-text-center", inter.className].join(" ")} style={{ zIndex: "2" }}>
          <div className="bg-fade uk-padding-small" style={{ fontSize: "2rem", fontWeight: "500" }}>
            Software Development. Service Management toolkit.
          </div>
          <div className="uk-margin-bottom">The ultimate Management toolkit for artisan and service shops.</div>
          <Link href="/booking">
            <button className="uk-button uk-border-pill uk-button-default tm-text-white">Book now</button>
          </Link>
          <Link href="/login">
            <button className="uk-button uk-border-pill tm-background-white uk-text-primary">Get Started</button>
          </Link>
        </section>
      </main>
      <footer className="uk-background-danger uk-text-primary uk-padding-small">
        <section className="uk-grid-divider uk-grid uk-grid-small uk-flex-center uk-text-center">
          <div>Copyrights © {new Date().getFullYear()} Tomigears Ltd - All Rights Reserved.</div>
          <div>
            <Link href="/terms" className="uk-link-reset">
              Terms of service
            </Link>
          </div>
        </section>
      </footer>

      <style jsx>{`

        .font-medium{
          font-size:1.2rem;
        }

        .bg-white {
          background-color: #fff !important;
        }

        .bg-fade {
          background-color: rgba(11, 39, 90, 0.68);
        }
        
        }
      `}</style>
    </>
  );
};

export default Main;
