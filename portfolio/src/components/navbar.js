import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div>
        <div
          id="navbar-small-device"
          className={`w-full z-50 top-0 px-4 py-3 sm:py-5 absolute bg-[#4a389b]`}
        >
          <div className="container flex items-center justify-between">
            <div id="logo" className="text-white text-3xl">
              <Link to="/" className="uppercase">
                Kavit Desai
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/">Home</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/about">About</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/experience">Courses / Internships</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/projects">Projects</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/contact">Contact</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    <Link to="/users">Show Users</Link>
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white" />
              </button>
            </div>
          </div>
        </div>

        <div
          id="navbar-large-device"
          className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-[${props.bg}] bg-opacity-70 transition-opacity lg:hidden opacity-100 pointer-events-auto': mobileMenu`}
        >
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <img
                src="/assets/img/icon-close.svg"
                className="h-10 w-auto"
                alt=""
              />
            </button>
            <ul className="mt-8 flex flex-col">
              <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link to="/about">About</Link>
                </span>
              </li>
              <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link to="/wxperience">Courses / Internships</Link>
                </span>
              </li>
              <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link to="/projects">Projects</Link>
                </span>
              </li>
              <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link to="/contact">Contact</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
