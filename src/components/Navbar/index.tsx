import React from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
// import DarkMode from "../DarkMode";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Navbar: React.FC = () => {
  const { userData } = React.useContext<any>(UserContext);
  const navigate = useNavigate();

  const HandleLogOut = () => {
    // Logout functionality
  };

  return (
    <nav
      className={classNames({
        "z-[1000] fixed top-0": true, // z-index
        "flex items-center justify-center": true, // layout
        "w-screen py-3 h-[80px]": true, //positioning & styling
        "bg-transparent": true, //background
      })}
    >
      <div
        className={classNames({
          "z-[1000] rounded-2xl": true, // z-index
          "flex items-center justify-between": true, // layout
          "w-[95%] relative py-2 sm:px-10 px-2 h-fit": true, //positioning & styling
          "bg-gray-100 dark:bg-gray-900": true, //background
          "shadow-md dark:shadow-[0px_2px_4px_0_rgba(0,0,0,0.5)]": true, //shadow
        })}
      >
        <Link to={"/"} className="flex justify-center items-center gap-2">
          <img src="/logo.png" width={42} height={42} alt="logo" />
          <h3
            className={classNames({
              "font-bold bound text-xl text-[var(--black)] dark:text-white":
                true,
              "flex justify-center items-center gap-4": true,
            })}
          >
            ScoreMine
          </h3>
        </Link>
        <div className="flex items-center justify-around gap-8 w-fit">
          <div
            onClick={() => {
              if (
                userData === null ||
                userData === undefined ||
                userData.name
              ) {
                navigate("/login");
              } else {
                HandleLogOut();
              }
            }}
            className={classNames({
              "flex items-center justify-center gap-2": true,
              "px-3 py-1.5 cursor-pointer": true,
              "block rounded-md bg-zinc-800 hover:bg-blue-600 border-none outline-none":
                true,
              "shadow-lg dark:shadow-[1px_2px_4px_0_rgba(0,0,0,0.5)]": true, //shadow
              "font-bold bound text-gray-100": true,
              "hover:scale-[1.025] hover:invert transition-all ease-in-out":
                true,
            })}
          >
            <p className={"mobile:hidden"}>
              {userData === null || userData === undefined || userData.name
                ? "Sign In"
                : userData.name}
            </p>
            <img
              src={
                userData === null || userData === undefined || userData.name
                  ? "/enter.png"
                  : "login.png"
              }
              className="h-5 w-5"
            />
          </div>
          {/* <DarkMode /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
