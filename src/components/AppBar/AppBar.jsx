/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { sidebarLinks, sidebarTitle } from "../../constants";
import ThemeToggle from "../Theme/ThemeToggle";
import { useOutSideClick } from "../../hooks/useOutSideClick";
import { useAuthContext } from "../../contexts/AuthContext ";

const NavItem = ({
  to,
  label,
  onClick,
  isButton,
  className,
  setToggleMenu,
}) => (
  <li className={`mx-4 cursor-pointer ${className}`}>
    {isButton ? (
      <button
        onClick={onClick}
        className="hover:text-accent !text-white transition-colors duration-300"
      >
        {label}
      </button>
    ) : (
      <NavLink
        to={to}
        onClick={() => setToggleMenu && setToggleMenu(false)}
        className={({ isActive }) =>
          `transition-colors duration-300 ${isActive ? "text-accent" : "text-primary-text"}`
        }
      >
        {label}
      </NavLink>
    )}
  </li>
);

const AppBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isAuthenticated: isAuth, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const ref = useOutSideClick(() => {
    setToggleMenu(false);
  });

  const handleSignOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    setToggleMenu(false);
  };

  const handleLogin = async () => {
    navigate("/login");
  };

  const filteredLinks = sidebarLinks.filter(({ type, label }) => {
    if (isAuth) {
      return true;
    }
    return type !== "dynamicLink" || label !== "My Profile";
  });

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white/20 p-4 text-primary-text shadow-lg backdrop-blur-md md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <Link to="/">
          <div className="text-2xl font-bold text-primary-text transition-transform duration-300 hover:scale-105">
            {sidebarTitle}
          </div>
        </Link>
      </div>
      <ul className="hidden list-none flex-row items-center justify-between text-primary-text md:flex">
        {filteredLinks?.map(({ label, route }) => (
          <NavItem
            key={label}
            to={route}
            label={label}
            className="text-lg font-medium transition-transform duration-300 hover:scale-105"
          />
        ))}
        <NavItem
          label={isAuth ? "Logout" : "Login"}
          isButton
          onClick={isAuth ? handleSignOut : handleLogin}
          to={!isAuth ? "/login" : undefined}
          className="m-4 my-2 rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold !text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        />
      </ul>
      <div className="relative flex">
        {!toggleMenu && (
          <>
            <ThemeToggle className="m-4" />
            <HiMenuAlt4
              fontSize={28}
              className="hover:text-accent ml-3 cursor-pointer text-primary-text transition-transform duration-300 md:hidden"
              onClick={() => setToggleMenu(true)}
              aria-label="Open menu"
            />
          </>
        )}
        {toggleMenu && (
          <>
            {/* <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div> */}
            <ul
              ref={ref}
              className="animate-slide-in fixed right-0 top-0 z-50 flex h-screen w-3/4 max-w-md flex-grow flex-col items-end justify-start bg-primary-background text-primary-text shadow-lg backdrop-blur-md md:hidden"
            >
              <li className="w-full p-3 text-right">
                <AiOutlineClose
                  fontSize={28}
                  onClick={() => setToggleMenu(false)}
                  aria-label="Close menu"
                  className="hover:text-accent cursor-pointer text-primary-text transition-transform duration-300"
                />
              </li>
              {filteredLinks?.map(({ label, route }) => (
                <NavItem
                  key={label}
                  to={route}
                  setToggleMenu={setToggleMenu}
                  label={label}
                  className="px-4 py-2 text-lg font-medium transition-transform duration-300 hover:scale-105"
                />
              ))}
              <NavItem
                label={isAuth ? "Logout" : "Login"}
                isButton
                onClick={isAuth ? handleSignOut : handleLogin}
                to={!isAuth ? "/login" : undefined}
                className="m-4 my-2 rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold !text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
              />
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default AppBar;
