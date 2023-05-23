import NavBar from "../Nav/NavBar";
import SideBar from "components/Nav/SideBar";
import { LINKS } from "utility/sitemap";
import { useState, useEffect } from "react";

const toExclude = [
  LINKS.SIGNUP,
  LINKS.LOGIN,
  "hospital/preview",
  "/doctor",
  "/",
].join("|");

const Layout = ({ children, pathname }) => {
  const [hideSideBar, setHideSideBar] = useState(false);

  const layoutWidth = hideSideBar ? "0" : "240px";

  useEffect(() => {
    console.log(pathname);
    const hideSideBar = new RegExp(`(${toExclude})$`, "i").test(pathname);
    setHideSideBar(hideSideBar);
  }, [pathname]);

  return (
    <>
      <style jsx>{`
        @media (min-width: 960px) {
          .push_layout {
            margin-left: ${layoutWidth};
          }
        }
      `}</style>
      <div className="uk-height-1-1">
        <NavBar />
        <SideBar hide={hideSideBar} />
        <section className="uk-container-expand push_layout uk-height-1-1">
          {children}
        </section>
      </div>
    </>
  );
};

export default Layout;
