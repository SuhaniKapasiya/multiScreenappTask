import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-pink-100 shadow-lg h-20 flex items-center justify-between px-4">
      <ul className="flex justify-evenly w-full">
        <li className="mr-6">
          <Link to="/carousal" className="text-gray-700 hover:text-gray-900">
            Carousal
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/chart" className="text-gray-700 hover:text-gray-900">
            Chart
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/map" className="text-gray-700 hover:text-gray-900">
            Map
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/calendar" className="text-gray-700 hover:text-gray-900">
            Calendar
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/tabs" className="text-gray-700 hover:text-gray-900">
            Tabs
          </Link>
        </li>

        <li>
          <Link to="/button" className="text-gray-700 hover:text-gray-900">
            Button
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
