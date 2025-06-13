import { Repeat } from 'lucide-react';
import React, { useState } from 'react';
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

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const categoriesMenuItems = [
    { 
      key: '1', //done
      label: "Data Science Course", 
      path: "courses/data-science",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Master data analysis and visualization"
    },
    { 
      key: '2', //done
      label: "AI for Leaders", 
      path: "courses/ai-for-leaders",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Master AI leadership skills"
    },
    { 
      key: '3', //done
      label: "Advanced Data Science Course", 
      path: "courses/advanced-data-science",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Advanced techniques in data science"
    },
  
    { 
      key: '4', //done
      label: "Tosca Automation", 
      path: "courses/tosca-automation",
      icon: <FaRobot className="text-purple-500" />,
      description: "Automation testing with Tosca"
    },
    { 
      key: '5', //done
      label: "Business Analyst Course", 
      path: "courses/business-analyst",
      icon: <FaChartLine className="text-green-500" />,
      description: "Become a certified business analyst"
    },
     { 
      key: '21', //done
      label: "Business Analyst With Tools Course", 
      path: "courses/business-analyst-tools",
      icon: <FaChartLine className="text-green-500" />,
      description: "Become a certified business analyst"
    },
    { 
      key: '6', //done
      label: "Program Manager Course", 
      path: "courses/program-manager",
      icon: <FaTasks className="text-indigo-500" />,
      description: "Advanced program management"
    },
    { 
      key: '7',  //done
      label: "Digital Marketing Course", 
      path: "courses/digital-marketing",
      icon: <FaHashtag className="text-red-500" />,
      description: "Master digital marketing strategies"
    },
    { 
      key: '8', //done
      label: "AI Automation Course", 
      path: "courses/ai-automation",
      icon: <FaBrain className="text-teal-500" />,
      description: "AI-powered automation solutions"
    },
    { 
      key: '9', //done
      label: "Product Management Course", 
      path: "courses/product-management",
      icon: <FaBoxOpen className="text-yellow-500" />,
      description: "From ideation to launch"
    },
    { 
      key: '10', //done
      label: "Advanced Automation Course", 
      path: "courses/advance-automation",
      icon: <FaCogs className="text-blue-500" />,
      description: "Next-level automation techniques"
    },
 
    { 
      key: '12', //DONE
      label: "Power Automate Course", 
      path: "courses/power-automate",
      icon: <FaBolt className="text-purple-500" />,
      description: "Microsoft Power Automate training"
    },
    { 
      key: '13', 
      label: "UiPath Course", 
      path: "courses/uipath", //done
      icon: <FaRobot className="text-blue-600" />,
      description: "RPA development with UiPath"
    },
    { 
      key: '14', //DONE
      label: "Agile Project Manager Course", 
      path: "courses/agile-project-manager",
      icon: <FaProjectDiagram className="text-green-600" />,
      description: "Agile methodologies and practices"
    },
    { 
      key: '15', //done
      label: "Capital Market Course", 
      path: "courses/capital-market",
      icon: <FaMoneyBillWave className="text-green-500" />,
      description: "Financial markets and instruments"
    },
    { 
      key: '16', //done
      label: "Cloud Engg. Azure DevOps", 
      path: "courses/cloud-engineering-azure-devops",
      icon: <FaMicrosoft className="text-blue-500" />,
      description: "Azure cloud and DevOps integration"
    },
    { 
      key: '17', //done
      label: "Selenium Using AI Course", 
      path: "courses/selenium-ai",
      icon: <FaCode className="text-red-500" />,
      description: "AI-enhanced test automation"
    },
    { 
      key: '18', //done
      label: "Core Java Course", 
      path: "courses/core-java",
      icon: <FaJava className="text-red-400" />,
      description: "Fundamentals of Java programming"
    },
    { 
      key: '19', //done
      label: "API Automation with AI Integration Course", 
      path: "courses/api-automation-ai",
      icon: <FaNetworkWired className="text-purple-500" />,
      description: "Automated API testing"
    },
    { 
      key: '20', //done
      label: "Cypress with TypeScript and AI-Driven Framework", 
      path: "courses/cypress-typescript-ai",
      icon: <FaBug className="text-green-500" />,
      description: "Modern testing framework"
    },
    // { 
    //   key: '21', 
    //   label: "Cybersecurity Course", 
    //   path: "courses/cybersecurity",
    //   icon: <FaLock className="text-gray-600" />,
    //   description: "Security principles and practices"
    // },
    { 
      key: '22', 
      label: "Cloud Engineering with AWS DevOps", 
      path: "courses/cloud-engineering-aws-devops",
      icon: <FaChartBar className="text-orange-500" />,
      description: "Master AWS cloud infrastructure and DevOps tools"
    },
    // { 
    //   key: '23', 
    //   label: "AI and Machine Learning Course", 
    //   path: "courses/ai-machine-learning",
    //   icon: <FaBrain className="text-purple-500" />,
    //   description: "Fundamentals of AI/ML"
    // },
    // { 
    //   key: '24', 
    //   label: "Cloud Engineering Course", 
    //   path: "courses/cloud-engineering",
    //   icon: <FaServer className="text-blue-500" />,
    //   description: "Cloud services and architecture"
    // },
    // { 
    //   key: '25', 
    //   label: "Blockchain Course", 
    //   path: "courses/blockchain",
    //   icon: <FaLink className="text-blue-600" />,
    //   description: "Blockchain technology fundamentals"
    // }
  ];

  const aboutMenuItems = [
    { key: '1', label: 'Our Story', path: '/about/history' },
    { key: '2', label: 'Core Comitee', path: '/about/team' },
    { key: '4', label: 'Our Payment Policy', path: '/about/paymentpolicy' },
    { key: '5', label: 'What we do', path: '/about/whatwedo' },
    // { key: '6', label: 'Core Committee', path: '/about/corecomitee' },
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
            <div className="flex items-center gap-8">
              <img src="/assets/logo/rmg-logo.png" className="h-10" alt="RMG Logo" />
              <div className="relative hidden lg:block w-[400px]">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full px-5 py-2 rounded-full border border-gray-300 focus:border-yellow-400 outline-none transition-all duration-300"
                  aria-label="Search courses"
                />
                <FaSearch className="absolute right-4 top-3 text-gray-400" aria-hidden="true" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaPhoneAlt className="text-yellow-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                  <p className="text-sm font-medium">+91 76785 73511</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaEnvelope className="text-yellow-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="text-sm font-medium">contact@refermegroup.com</p>
                </div>
              </div>
            </div>

            <button
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 border-y hidden md:block sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-1">
              {/* Enhanced Megamenu for All Courses */}
              <div className="dropdown relative">
                <button
                  className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full font-medium hover:shadow-md transition-all duration-300 focus:outline-none border border-blue-100"
                  aria-haspopup="true"
                  aria-expanded={isCoursesOpen}
                  aria-controls="courses-megamenu"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                >
                  <FaBars className="text-lg" />
                  <span>All Courses</span>
                  <FaChevronDown className={`text-xs mt-0.5 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  id="courses-megamenu"
                  className={`absolute left-0 mt-1 w-[1420px] bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ease-in-out transform ${
                    isCoursesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <div className="p-5">
                    <div className="grid grid-cols-4 gap-4">
                      {categoriesMenuItems.map((item) => (
                        item.path ? (
                          <Link
                            key={item.key}
                            to={item.path} // Fixed: Removed redundant `/courses/`
                            className="dropdown-item flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 border border-transparent hover:border-blue-100"
                          >
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                              {item.icon || <FaBook className="text-sm" />}
                            </div>
                            <div>
                              <div className="font-medium">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                              )}
                            </div>
                          </Link>
                        ) : null
                      ))}
                    </div>
                    {/* <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        to="/all-courses" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium px-3 py-2"
                      >
                        View all courses <FaArrowRight className="ml-2 text-xs" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>

              <nav className="flex ml-6 gap-1" role="navigation">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  aria-label="Home"
                >
                  Home
                </Link>
                <div className="dropdown">
                  <Link
                    to="/about"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                    aria-haspopup="true"
                  >
                    About Us
                    <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-3 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown">
                  <Link
                    to="/services"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                    aria-haspopup="true"
                  >
                    Our Services
                    <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-3 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <Link
                  to="/jobs"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  aria-label="Jobs"
                >
                  Jobs
                </Link> */}
                <Link
                  to="/blogs"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  aria-label="Our Blogs"
                >
                  Our Blogs
                </Link>
                <Link
                  to="/career"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  aria-label="Careers"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Facebook">
                <FaFacebook />
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Instagram">
                <FaInstagram />
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity" aria-label="LinkedIn">
                <FaLinkedin />
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Twitter">
                <FaTwitter />
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity" aria-label="YouTube">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
          <img src="/assets/logo/rmg-logo.png" className="h-8" alt="RMG Logo" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-yellow-600 transition-colors"
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
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:border-yellow-400 outline-none"
              aria-label="Search courses"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
          </div>
        </div>

        <div className="overflow-y-scroll h-[calc(100%-100px)]">
          <nav className="flex flex-col py-2" role="navigation">
            <Link
              to="/"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              aria-label="Home"
            >
              Home
            </Link>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
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
                        className="block px-1 py-1 text-sm rounded hover:bg-yellow-50 flex items-center gap-2 transition-colors"
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
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
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
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
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
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/jobs"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              aria-label="Jobs"
            >
              Jobs
            </Link>
            <Link
              to="/blogs"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              aria-label="Our Blogs"
            >
              Our Blogs
            </Link>
            <Link
              to="/career"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              aria-label="Careers"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              aria-label="Contact Us"
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
            <div className="bg-blue-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Facebook">
              <FaFacebook />
            </div>
            <div className="bg-gradient-to-tr from-pink-600 to-amber-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Instagram">
              <FaInstagram />
            </div>
            <div className="bg-blue-700 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="LinkedIn">
              <FaLinkedin />
            </div>
            <div className="bg-sky-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="Twitter">
              <FaTwitter />
            </div>
            <div className="bg-red-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="YouTube">
              <FaYoutube />
            </div>
            <div className="bg-green-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity" aria-label="WhatsApp">
              <FaWhatsapp />
            </div>
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