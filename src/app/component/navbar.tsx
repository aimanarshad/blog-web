import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import CategoryDropdown from "./category";

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white py-4">
        {/* Top Social Links */}
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaPinterest size={20} />
            </Link>
          </div>

          {/* Search Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white shadow-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-sm focus:outline-none text-black"
              />
              <button className="ml-2 text-gray-900 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.35-1.35l4.35 4.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="mt-4">
          <div className="container mx-auto text-center">
            {/* Website Title */}
            <h1 className="text-4xl font-bold">Philosophy.</h1>

            {/* Navigation Links */}
            <nav className="mt-6">
              <ul className="flex justify-center space-x-8 text-lg uppercase">
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  {/* <Link href="/">
                    <select
                      name="options"
                      id="dropdown"
                      className=" bg-black text-white border-none"
                    >
                      <option  value="option1">LifeStyle</option>
                      <option value="option2">health</option>
                      <option value="option3">Work</option>
                      <option value="option4">Family</option>
                      <option value="option4">Mangement</option>
                      <option value="option4">Travel</option>
                    </select>
                  </Link> */}
                  <CategoryDropdown/>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-400">
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link href="/aboutus" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
