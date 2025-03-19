"use client";
import Logo from "/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import Wrapper from "../shaired/Wrapper";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const dropdownRef = useRef<HTMLUListElement | null>(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <Wrapper>
        <div className="flex justify-between py-4 items-center">
          <div>
          <Image src={Logo} alt="Panver DAO" width={150} height={50} />
          </div>

          {/* Hamburger Icon - Positioned to the right */}
          <div className="md:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24}  />}
          </div>

          {/* Navigation Links */}
          <nav className="relative">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="relative group">
                <Link 
                  href="/courses" 
                  onMouseEnter={toggleDropdown} 
                  onMouseLeave={toggleDropdown}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    toggleDropdown(); // Toggle dropdown on click
                  }}
                >
                  Courses
                </Link>
                {/* Dropdown for Courses */}
                <ul
                  ref={dropdownRef}
                  className={`absolute left-0 w-48 mt-2 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out ${
                    isDropdownOpen ? 'block' : 'hidden'
                  } group-hover:block`}
                >
                  <li>
                    <Link href="/courses/course1" className="block px-4 py-2 hover:bg-gray-100">
                      Course 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/course2" className="block px-4 py-2 hover:bg-gray-100">
                      Course 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/course3" className="block px-4 py-2 hover:bg-gray-100">
                      Course 3
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="block hover:bg-gray-100">Home</Link>
            </li>
            <li className="relative">
              <Link 
                href="/courses" 
                className="block hover:bg-gray-100" 
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  toggleDropdown(); // Toggle dropdown on click
                }}
              >
                Courses
              </Link>
              {/* Dropdown for Courses on Mobile */}
              {isDropdownOpen && (
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/courses/course1" className="block px-4 py-2 hover:bg-gray-100">
                      Course 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/course2" className="block px-4 py-2 hover:bg-gray-100">
                      Course 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/course3" className="block px-4 py-2 hover:bg-gray-100">
                      Course 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
