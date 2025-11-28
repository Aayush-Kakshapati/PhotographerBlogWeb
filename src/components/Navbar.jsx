import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slideFadeIn {
            0% { opacity: 0; transform: translateY(-12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideFadeIn {
            animation: slideFadeIn 0.28s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-wide">
          SHUSANGRG
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-gray-500 transition">
            Gallery
          </Link>
          <Link to="/pricing" className="hover:text-gray-500 transition">
            Pricing
          </Link>
          <Link to="/about" className="hover:text-gray-500 transition">
            About
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Darkened background */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sliding Menu */}
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 animate-slideFadeIn">
            <nav className="flex flex-col text-center py-4 text-base">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-3 hover:bg-gray-50 transition"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                onClick={() => setOpen(false)}
                className="py-3 hover:bg-gray-50 transition"
              >
                Gallery
              </Link>
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="py-3 hover:bg-gray-50 transition"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="py-3 hover:bg-gray-50 transition"
              >
                About
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
