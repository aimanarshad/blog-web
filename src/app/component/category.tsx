"use client"
import { useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js, if not, import your router

const CategoryDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Category Dropdown Trigger */}
      <button
        className="bg-black text-white px-4 py-2 rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Categories
      </button>

      {/* Dropdown List */}
      {isHovered && (
        <div
          className="absolute bg-black text-white mt-2 w-48 rounded-lg shadow-lg"
          onMouseEnter={() => setIsHovered(true)} // Keep dropdown open when hovering over it
          onMouseLeave={() => setIsHovered(false)} // Close dropdown when mouse leaves
        >
          <ul className="space-y-2 py-2">
            <li>
              <Link href="#blog" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                 LifeStyle
              </Link>
            </li>
            <li>
              <Link href="#blog"  className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                Health
              </Link>
            </li>
            <li>
              <Link href="#blog"  className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                 Work
              </Link>
            </li>
            <li>
              <Link href="#blog" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                  Family
              </Link>
            </li>
            <li>
              <Link href="#blog" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                 Management
              </Link>
            </li>
            <li>
              <Link href="#blog"  className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                 Travel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
