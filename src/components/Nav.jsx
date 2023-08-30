import { FaX, FaBars } from "react-icons/fa6";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full  ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]" // Por qué m-0? parece innecesario, w y h tambien, pero supondré que es buena practica.
          />
        </a>

        {/* ***** DESKTOP ***** */}

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ***** DESKTOP YET ***** */}

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        {/* ***** MOBILE ***** */}

        <div className="hidden max-lg:flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? <FaX size={25} /> : <FaBars size={25} />}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={` font-palanquin font-medium cursor-pointer text-[16px] text-white
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <a href={nav.href} onClick={() => setToggle(!toggle)}>
                    {nav.label}
                  </a>
                </li>
              ))}
              <li
                className={` font-palanquin font-medium cursor-pointer text-[16px] text-white mt-4 border-t border-coral-red w-full `}
              >
                <a href="/" onClick={() => setToggle(!toggle)}>
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
