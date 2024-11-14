import React, { useState } from 'react';
import Link from 'next/link'; 
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50"> {/* Added z-50 */}
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img
            src="/assets/ftlogo.png"
            alt="Logo"
            className="h-10 w-auto" 
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FiX />  // Use the close icon when open
          ) : (
            <FiMenu />  // Use the menu icon when closed
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/service" className="text-gray-800 hover:text-blue-600">
              Services
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/resource" className="text-gray-800 hover:text-blue-600">
              Resources
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact Us
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/academy" className="text-gray-800 hover:text-blue-600">
              Our Academy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
