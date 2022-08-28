import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill, BsFillCartFill } from "react-icons/bs";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
  return (
    <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="" className="flex items-center">
          <span className="self-center text-red-600 text-3xl font-semibold whitespace-nowrap ">
            Diamond
            <span className="self-center text-3xl text-white ml-1  font-semibold whitespace-nowrap ">
              Fitness
            </span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div id="navbar-default">
          <ul className="flex flex-row space-x-6 text-[16px] font-semibold  text-white  ">
            <li className="hover:bg-red-600 p-4 cursor-pointer">
              <Link href="#">
                <span className="flex items-center">
                  <AiFillHome className="mr-1" /> Home
                </span>
              </Link>
            </li>
            <li className="hover:bg-red-600 p-4 cursor-pointer">
              <Link href="#">
                <span className="flex items-center">
                  <BsPersonFill className="mr-1" /> Sign In
                </span>
              </Link>
            </li>
            <li className="hover:bg-red-600 p-4 cursor-pointer">
              <Link href="#">
                <span className="flex items-center">
                  <BsFillCartFill className="mr-1" /> Cart
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
