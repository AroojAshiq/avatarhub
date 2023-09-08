import React, { useState } from "react";
import Logo from "../../../assets/LOGO_trans.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:px-14 px-7">
      <nav className="bg-transparent text-white">
        <div className="container flex justify-between items-center">
          <div className="">
            <img src={Logo} alt="logo" className="h-24 w-24" />
          </div>
          <div className="lg:hidden ">
            <ion-icon
              onClick={() => setIsOpen(!isOpen)}
              name={"menu"}
              className="text-3xl cursor-pointer md:hidden"
            ></ion-icon>
          </div>
          <div className={`lg:flex hidden space-x-10`}>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              Home
            </p>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              About Us
            </p>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              Companies
            </p>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              Contact
            </p>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0  left-0 h-full w-64 bg-[rgba(20,0,59,0.8)] backdrop-blur-blur shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-3 flex justify-between">
          <div className="">
            <img src={Logo} alt="logo" className="h-20 w-20" />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white pr-4">
            x
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-8 mt-4">
          <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
            Home
          </p>
          <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
            About Us
          </p>
          <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
            Companies
          </p>
          <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
