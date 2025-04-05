// Header.jsx
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full shadow-md px-4 py-2 flex items-center justify-between bg-white fixed top-0 z-50">
      {/* Mobile View: Left Menu Icon */}
      <div className="md:hidden">
      <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop View: Left Logo */}
      <div className="hidden md:flex items-center">
        <Link to="/">  
        <span className="text-3xl font-bold text-red-400">Shiv Chidambar</span>
        </Link>
      </div>

      {/* Center Title (Mobile) */}
      <div className="md:hidden text-lg font-semibold text-red-400">
        Shiv Chidambar
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex justify-center gap-8 text-base font-medium text-red-700">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/counter" className="hover:text-blue-600">Counter</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
      </nav>

      {/* Profile Icon (Both Views) */}
      <div className="text-right text-red-400">
        <FaUserCircle size={28} />
      </div>

      {/* Mobile View Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-14 left-2 w-full bg-white shadow-md flex flex-col gap-2 p-4 md:hidden text-red-700">
          <Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/counter" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Counter</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
