'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Chani-schminkt
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/galerie">Galerie</NavLink>
            <NavLink href="/ueber-mich">Über mich</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink href="/galerie" onClick={toggleMenu}>Galerie</NavLink>
            <NavLink href="/ueber-mich" onClick={toggleMenu}>Über mich</NavLink>
            <NavLink href="/kontakt" onClick={toggleMenu}>Kontakt</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-800 hover:text-pink-600 font-medium transition"
    >
      {children}
    </Link>
  );
}
