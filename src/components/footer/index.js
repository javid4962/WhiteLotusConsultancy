"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function Footer({ user, profileInfo }) {
  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Feed", path: "/feed", show: profileInfo },
    { label: "Login", path: "/sign-in", show: !user },
    { label: "Register", path: "/sign-up", show: !user },
    { label: "Activity", path: "/activity", show: profileInfo?.role === "candidate" },
    { label: "Companies", path: "/companies", show: profileInfo?.role === "candidate" },
    { label: "Jobs", path: "/jobs", show: profileInfo },
    { label: "Membership", path: "/membership", show: profileInfo },
    { label: "Account", path: "/account", show: profileInfo },
  ];

  return (
    <footer className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white w-full">
      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {/* Navigation Links */}
          <div>
            <h2 className="font-bold text-lg mb-4">White Lotus Consultancy</h2>
            {menuItems.map(
              (menuItem) =>
                menuItem.show && (
                  <Link
                    key={menuItem.label}
                    href={menuItem.path}
                    className="block text-md hover:text-[#f65d46] mb-2"
                  >
                    {menuItem.label}
                  </Link>
                )
            )}
          </div>

          {/* Social Links */}
          <div className="mb-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-2 mb-4 lg:mb-0">
            <h3 className="font-bold text-lg">Subscribe to our Newsletter</h3>
            <form className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-3/4 p-2 rounded-l-lg border border-gray-300 focus:outline-none "
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Policies */}
          <div className="mb-4">
            <h3 className="font-bold text-lg">Policies</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#" className="hover:text-[#f65d46]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f65d46]">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 mb-4">
        ©{new Date().getFullYear()} <b>White Lotus Consultancy</b> – Your Gateway to a Successful Career!
      </p>
    </footer>
  );
}

export default Footer;
