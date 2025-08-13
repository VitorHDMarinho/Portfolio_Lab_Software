import React from "react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 mt-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="text-lg font-bold text-white">Jonathan Sena</div>
        </Link>
        <div className="flex items-center">
          <Link to="/about">
            <div className="text-lg font-bold text-white mr-6">About</div>
          </Link>
          <Link to="/projects">
            <div className="text-lg font-bold text-white mr-6">Projects</div>
          </Link>
          <Link to="/contact">
            <div className="text-lg font-bold text-white">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}