import Logo from "../assets/images/Logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-[100%] h-auto p-7 flex flex-col md:flex-row md:justify-between items-center z-50 bg-blue-100 font-semibold text-blue-600 mb-4`}
      >
        <div className="relative right-30 md:right-0">
          <img src={Logo} alt="" />
        </div>

        {/* button desktop */}

        <nav
          className={`hidden md:flex justify-between items-center bg-blue-100 space-y-2`}
        >
          <ul className="flex cursor-pointer ">
            <li className=" mr-0">
              <a href="#urls">My URLs</a>
            </li>
            <li className=" mx-2">
              <a href="#features">Features</a>
            </li>
            <li className="mx-2">
              <a href="#pricing">Pricing</a>
            </li>
            <li className=" mx-2">
              <a href="#analytics">Analytics</a>
            </li>
            <li className=" mx-2">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex justify-between items-center ">
          <button className="mx-2">Log in</button>
          <button className="mx-2">Try for free</button>
        </div>

        {/* button mobile */}

        <div
          className={` ${
            toggle ? "flex" : "hidden"
          } flex flex-col items-center justify-center m-4 md:hidden bg-blue-100 transition-[0.5s height ease-in-out] font-semibold text-blue-600 text-lg h-auto absolute w-[100%] top-0 `}
        >
          <nav className={`flex justify-between items-center flex-col `}>
            <ul className="">
              <li className="my-4">
                <a href="#urls">My URLs</a>
              </li>
              <li className="my-4">
                <a href="#features">Features</a>
              </li>
              <li className="my-4">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="my-4">
                <a href="#analytics">Analytics</a>
              </li>
              <li className="my-4">
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </nav>

          <div className="buttons flex flex-col items-center justify-center ">
            <button className="my-4 ">Log in</button>
            <button className="my-4">Try for free</button>
          </div>
        </div>

        <div
          className="icons block absolute top-8 right-7 md:hidden"
          onClick={toggleMenu}
        >
          {toggle ? <X className="cursor-pointer text-blue-600" strokeWidth={3} /> : <Menu className="cursor-pointer text-blue-600" strokeWidth={3} />}
        </div>
      </header>
    </>
  );
};

export default Header;
