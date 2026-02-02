import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 border-t border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm text-gray-400 mb-4 sm:mb-0">
          © 2026 Utkarsh Pandey. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/up_precocive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarshpandey04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/___well_who_am_i/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;