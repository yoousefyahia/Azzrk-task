import { useState } from "react";
import "./nav.css";
import Countdown from "react-countdown";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRunning, FaThLarge, FaTimes } from "react-icons/fa"; 

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Completionist = () => <span>Ended!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      const totalHours = days * 24 + hours;
      return (
        <span className="countdown-timer">
          <span className="time-box">{totalHours < 10 ? `0${totalHours}` : totalHours}</span>:
          <span className="time-box">{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span className="time-box">{seconds < 10 ? `0${seconds}` : seconds}</span>
        </span>
      );
    }
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <p>خصم 20% على جميع المنتجات</p>
        <Countdown date={Date.now() + 86400000} renderer={renderer} />
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        {/* Left Side - Icons */}
        <div className="nav-left">
          {/* Mobile Menu Icon */}
          <button className="icon-btn mobile-menu-btn" onClick={toggleMenu}>
             {isMenuOpen ? <FaTimes size={24} /> : <FaThLarge size={24} />}
          </button>

          <div className="cart-container">
            <button className="icon-btn cart-btn">
              <IoCartOutline width={41} height={40} color="white" />
            </button>
            <span className="cart-badge">0</span>
          </div>
          <button className="icon-btn heart-btn">
            <CiHeart width={41} height={40} />
          </button>
          <button className="icon-btn user-btn">
            <CiUser width={41} height={40} />
          </button>
          <button className="icon-btn search-btn">
            <CiSearch width={41} height={40} />
          </button>
        </div>

        {/* Right Side - Menu & Logo */}
        <div className="nav-right">
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><a href="#" >التخفيضات</a></li>
            <li><a href="#">جميع المنتجات</a></li>
            <li><a href="#">الأقسام</a></li>
            <li><a href="#">الرئيسية</a></li>
          </ul>
          <div className="logo">
             <FaRunning size={71} color="black" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
           <ul className="mobile-nav-links">
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#">الأقسام</a></li>
            <li><a href="#">جميع المنتجات</a></li>
            <li><a href="#" >التخفيضات</a></li>
          </ul>
          <div className="mobile-menu-icons">
             <button className="icon-btn search-btn-mobile"><CiSearch size={24}/></button>
             <button className="icon-btn user-btn-mobile"><CiUser size={24}/></button>
             <button className="icon-btn heart-btn-mobile"><CiHeart size={24}/></button>
             <button className="icon-btn cart-btn-mobile"><IoCartOutline size={24}/></button>
          </div>
        </div>
      )}
    </header>
  );
}