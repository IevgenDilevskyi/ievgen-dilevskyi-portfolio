import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const location = useLocation();
  console.log("location - " + location.pathname);
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            exact
            to="/"
            activeClassName="text-red-50"
            // activeStyle={{
            //   color: "white",
            // }}
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-500 text-4xl font-bold cursive tracking-widest"
          >
            Ievgen
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-500"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-500"
          >
            About Me
          </NavLink>
          <NavLink
            to={location.pathname}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-500"
          >
            <td
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/15_AT8YFhkKRgtE2oc8Lvn2pp45MmnYgV/view?usp=sharing"
                )
              }
            >
              Resume
            </td>
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/ievgen-dilevskyi"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/IevgenDilevskyi"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://ievgendilevskyi.medium.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
