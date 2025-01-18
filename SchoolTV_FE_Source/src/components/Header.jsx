import React, { useEffect } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Header = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ duration: 800, once: true });

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Toggle theme
    themeToggle.addEventListener('click', () => {
      const newTheme =
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    return () => {
      themeToggle.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-tv"></i> SchoolTV
      </a>
      <nav className="nav-links">
        <a href="#">Trang Chủ</a>
        <a href="#">Khám Phá</a>
        <a href="#">Trường Học</a>
        <button id="theme-toggle" className="theme-toggle">
          <i className="fas fa-moon"></i>
        </button>
        <Link to="/login" className="cta-button primary-button">
          Đăng Nhập
        </Link>
      </nav>
    </header>
  );
};

export default Header;
