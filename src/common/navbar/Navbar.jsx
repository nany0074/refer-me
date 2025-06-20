import { Repeat } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import {
  FaSearch,
  FaPhoneAlt,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
  FaCogs,
  FaLayerGroup,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaLink,
  FaUserTie,
  FaChartLine,
  FaTasks,
  FaHashtag,
  FaBoxOpen,
  FaCloud,
  FaBolt,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaMicrosoft,
  FaCode,
  FaJava,
  FaNetworkWired,
  FaBug,
  FaLock,
  FaServer,
  FaArrowRight,
  FaBook
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isTablet, setIsTablet] = useState(false);
  const menuRef = useRef(null);
  const coursesButtonRef = useRef(null);
  const megamenuRef = useRef(null);

  // Check for tablet size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 884); // Tablet range
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  // Handle keyboard navigation for megamenu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isCoursesOpen) return;

      const menuItems = megamenuRef.current?.querySelectorAll('a');
      if (!menuItems || menuItems.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => (prev < menuItems.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : menuItems.length - 1));
          break;
        case 'Escape':
          setIsCoursesOpen(false);
          coursesButtonRef.current?.focus();
          break;
        case 'Tab':
          if (!e.shiftKey && focusedIndex === menuItems.length - 1) {
            setIsCoursesOpen(false);
          }
          break;
        default:
          break;
      }
    };

    if (isCoursesOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isCoursesOpen, focusedIndex]);

  // Focus the first item when megamenu opens
  useEffect(() => {
    if (isCoursesOpen && megamenuRef.current) {
      const firstItem = megamenuRef.current.querySelector('a');
      if (firstItem) {
        firstItem.focus();
        setFocusedIndex(0);
      }
    }
  }, [isCoursesOpen]);

  const categoriesMenuItems = [
    { 
      key: '1',
      label: "Data Science Course", 
      path: "courses/data-science",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Master data analysis and visualization"
    },
    // ... (rest of your menu items remain the same)
  ];

  const aboutMenuItems = [
    { key: '1', label: 'Our Story', path: '/about/history' },
    { key: '2', label: 'Core Comitee', path: '/about/team' },
    { key: '4', label: 'Our Payment Policy', path: '/about/paymentpolicy' },
    { key: '5', label: 'What we do', path: '/about/whatwedo' },
  ];

  const servicesMenuItems = [
    { key: '1', label: 'Webinars', path: '/services/webinars' },
    { key: '2', label: 'Partnership Programs', path: '/services/partnership-programs' },
    { key: '3', label: 'Freelancing', path: '/services/freelancing' },
  ];

  return (
    <>
      {/* Top Bar - Desktop */}
      <div
        className="w-full bg-white shadow-sm"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255, 255, 0.9)),
          url('/assets/bg-img/books.jpg')
        `,
          backgroundRepeat: "repeat"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-4 md:gap-8">
              <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                <img src="/assets/logo/rmg-logo.png" className="h-8 md:h-10" alt="RMG Logo" />
              </Link>
              <div className={`relative ${isTablet ? 'hidden' : 'hidden lg:block'} w-[300px] md:w-[400px]`}>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full px-4 md:px-5 py-2 rounded-full border border-gray-300 focus:border-yellow-400 outline-none transition-all duration-300"
                  aria-label="Search courses"
                />
                <FaSearch className="absolute right-3 md:right-4 top-2.5 md:top-3 text-gray-400" aria-hidden="true" />
              </div>
            </div>

            <div className={`${isTablet ? 'hidden' : 'hidden md:flex'} items-center gap-4 md:gap-6`}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-yellow-100 p-1.5 md:p-2 rounded-full">
                  <FaPhoneAlt className="text-yellow-600 text-sm md:text-base" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                  <p className="text-xs md:text-sm font-medium">+91 76785 73511</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-yellow-100 p-1.5 md:p-2 rounded-full">
                  <FaEnvelope className="text-yellow-600 text-sm md:text-base" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="text-xs md:text-sm font-medium">contact@refermegroup.com</p>
                </div>
              </div>
            </div>

            <button
              className={`${isTablet ? 'flex' : 'md:hidden'} text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-1`}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              aria-expanded={sidebarOpen}
            >
              <FaBars size={isTablet ? 20 : 24} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className={`w-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 border-y ${isTablet ? 'hidden' : 'hidden md:block'} sticky top-0 z-50`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 md:py-3">
            <div className="flex items-center gap-1">
              {/* Enhanced Megamenu for All Courses */}
              <div className="dropdown relative">
                <button
                  ref={coursesButtonRef}
                  className="flex items-center gap-2 bg-white text-blue-600 px-4 md:px-5 py-1.5 md:py-2 rounded-full font-medium hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-blue-100"
                  aria-haspopup="true"
                  aria-expanded={isCoursesOpen}
                  aria-controls="courses-megamenu"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsCoursesOpen(!isCoursesOpen);
                    }
                  }}
                >
                  <FaBars className="text-lg" />
                  <span className="hidden sm:inline">All Courses</span>
                  <FaChevronDown className={`text-xs mt-0.5 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  ref={megamenuRef}
                  id="courses-megamenu"
                  className={`absolute left-0 mt-1 w-[90vw] md:w-[1200px] lg:w-[1420px] bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ease-in-out transform ${
                    isCoursesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <div className="p-4 md:p-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                      {categoriesMenuItems.map((item, index) => (
                        item.path ? (
                          <Link
                            key={item.key}
                            to={item.path}
                            className={`dropdown-item flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 border border-transparent hover:border-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                              focusedIndex === index ? 'bg-blue-50 border-blue-100 ring-2 ring-yellow-400' : ''
                            }`}
                            tabIndex={isCoursesOpen ? 0 : -1}
                          >
                            <div className="bg-blue-50 p-1.5 md:p-2 rounded-lg text-blue-600">
                              {item.icon || <FaBook className="text-sm" />}
                            </div>
                            <div>
                              <div className="text-sm md:text-base font-medium">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                              )}
                            </div>
                          </Link>
                        ) : null
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <nav className="flex ml-4 md:ml-6 gap-1" role="navigation" ref={menuRef}>
                <Link
                  to="/"
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Home"
                >
                  Home
                </Link>
                <div className="dropdown relative group">
                  <Link
                    to="/about"
                    className="flex items-center gap-1 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                    aria-haspopup="true"
                    aria-expanded={openMobileDropdown === 'about'}
                  >
                    About Us
                    <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
                  <div className="dropdown-menu absolute left-0 mt-1 w-40 md:w-48 rounded-lg shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-sm text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50 focus:text-indigo-600 focus:outline-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown relative group">
                  <Link
                    to="/services"
                    className="flex items-center gap-1 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                    aria-haspopup="true"
                    aria-expanded={openMobileDropdown === 'services'}
                  >
                    Our Services
                    <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
                  <div className="dropdown-menu absolute left-0 mt-1 w-40 md:w-48 rounded-lg shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-sm text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50 focus:text-indigo-600 focus:outline-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/blogs"
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Our Blogs"
                >
                  Our Blogs
                </Link>
                <Link
                  to="/career"
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Careers"
                >
                  Job Groups
                </Link>
                <Link
                  to="/contact"
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white hover:text-yellow-300 transition-colors focus:outline-none focus:text-yellow-300 focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-1 md:gap-2">
              <a href="#" className="bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Facebook">
                <FaFacebook className="text-sm md:text-base" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Instagram">
                <FaInstagram className="text-sm md:text-base" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="LinkedIn">
                <FaLinkedin className="text-sm md:text-base" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Twitter">
                <FaTwitter className="text-sm md:text-base" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="YouTube">
                <FaYoutube className="text-sm md:text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Tablet version will use this */}
      <div
        className={`fixed top-0 left-0 h-full ${isTablet ? 'w-96' : 'w-80'} bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center p-4 md:p-5 border-b sticky top-0 bg-white z-10">
          <img src="/assets/logo/rmg-logo.png" className="h-12 md:h-16" alt="RMG Logo" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-1"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none"
              aria-label="Search courses"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
          </div>
        </div>

        <div className="overflow-y-scroll h-[calc(100%-100px)]">
          <nav className="flex flex-col py-2" role="navigation">
            <Link
              to="/"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
              aria-label="Home"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
                onClick={() => toggleMobileDropdown('courses')}
                aria-expanded={openMobileDropdown === 'courses'}
                aria-controls="mobile-courses-menu"
              >
                <span className="font-medium">All Courses</span>
                {openMobileDropdown === 'courses' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'courses' && (
                <div id="mobile-courses-menu" className="ml-6 py-1 space-y-1">
                  {categoriesMenuItems.map((item) => (
                    item.path ? (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="block px-1 py-1 text-sm rounded hover:bg-yellow-50 flex items-center gap-2 transition-colors focus:bg-yellow-50 focus:outline-none"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : null
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
                onClick={() => toggleMobileDropdown('about')}
                aria-expanded={openMobileDropdown === 'about'}
                aria-controls="mobile-about-menu"
              >
                <span className="font-medium">About Us</span>
                {openMobileDropdown === 'about' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'about' && (
                <div id="mobile-about-menu" className="ml-6 py-1 space-y-1">
                  {aboutMenuItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
                onClick={() => toggleMobileDropdown('services')}
                aria-expanded={openMobileDropdown === 'services'}
                aria-controls="mobile-services-menu"
              >
                <span className="font-medium">Our Services</span>
                {openMobileDropdown === 'services' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'services' && (
                <div id="mobile-services-menu" className="ml-6 py-1 space-y-1">
                  {servicesMenuItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/blogs"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
              aria-label="Our Blogs"
              onClick={() => setSidebarOpen(false)}
            >
              Our Blogs
            </Link>
            <Link
              to="/career"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
              aria-label="Careers"
              onClick={() => setSidebarOpen(false)}
            >
              Job Groups
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors focus:bg-yellow-50 focus:outline-none"
              aria-label="Contact Us"
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="p-4 border-b space-y-1">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaPhoneAlt className="text-yellow-600 text-sm" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-500">24/7 Support</p>
              <p className="text-sm font-medium">+91-9870287980</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaEnvelope className="text-yellow-600 text-sm" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="text-sm font-medium">contact@refermegroup.com</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <div className="flex justify-center gap-3">
            <a href="#" className="bg-blue-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="bg-gradient-to-tr from-pink-600 to-amber-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-700 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-sky-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="bg-red-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className="bg-green-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}