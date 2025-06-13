import {
  FiFacebook, FiTwitter, FiLinkedin, FiInstagram,
  FiMapPin, FiMail, FiPhone
} from 'react-icons/fi';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Define all paths in a central configuration
  const paths = {
    home: '/',
    story: '/about/history',
    whatWeDo: '/whatwedo',
    team: '/meet-our-team',
    paymentPolicy: '/payment-policy',
    jobs: '/jobs',
    career: '/career',
    contact: '/contact-us',
    dataScience: '/courses/data-science',
    cybersecurity: '/courses/cybersecurity',
    dataAnalytics: '/courses/data-analytics',
    aiMl: '/courses/ai-ml',
    cloudComputing: '/courses/cloud-computing',
    blockchain: '/courses/blockchain',
    courseInfo: '/resources/course-info',
    tutorials: '/resources/tutorials',
    interviewQuestions: '/resources/interview-questions',
    practiceTests: '/resources/practice-tests',
    masterClasses: '/resources/master-classes',
    blogs: '/resources/blogs',
    liveVirtual: '/offerings/live-virtual',
    classroom: '/offerings/classroom',
    agileServices: '/offerings/agile-services',
    referEarn: '/offerings/refer-earn',
    corporateTraining: '/offerings/corporate-training',
    schoolTraining: '/offerings/school-training',
    industrialTraining: '/offerings/industrial-training',
    itTraining: '/offerings/it-training',
    technology: '/categories/technology',
    business: '/categories/business',
    marketing: '/categories/marketing',
    design: '/categories/design',
    becomeInstructor: '/partners/become-instructor',
    hireFromUs: '/partners/hire-from-us',
    trainingPartner: '/partners/training-partner',
    affiliates: '/partners/affiliates',
    privacyPolicy: '/legal/privacy-policy',
    termsConditions: '/legal/terms-conditions',
    refundPolicy: '/legal/refund-policy',
    cookiesPolicy: '/legal/cookies-policy',
    faqs: '/support/faqs',
    sitemap: '/sitemap',
    prince2: '/certifications/prince2',
    devops: '/certifications/devops',
    pythonDs: '/certifications/python-data-science',
    fullstack: '/certifications/fullstack',
    frontend: '/certifications/frontend',
    python: '/certifications/python'
  };

  // Define link groups with their corresponding paths
  const quickLinks = [
    { text: "Home", path: "" },
    { text: "Our Story", path: paths.story },
    { text: "What we do", path: paths.whatWeDo },
    { text: "Meet Our Team", path: paths.team },
    { text: "Payment Policy", path: paths.paymentPolicy },
    { text: "Jobs", path: paths.jobs },
    { text: "Career", path: paths.career },
    { text: "Contact Us", path: paths.contact }
  ];

const courses = [
  { text: "Data Science Course", path: "courses/data-science" },
  { text: "AI for Leaders", path: "courses/ai-for-leaders" },
  { text: "Advanced Data Science Course", path: "courses/advanced-data-science" },
  { text: "Tosca Automation", path: "courses/tosca-automation" },
  { text: "Business Analyst Course", path: "courses/business-analyst" },
  { text: "Business Analyst With Tools Course", path: "courses/business-analyst-tools" },
  { text: "Program Manager Course", path: "courses/program-manager" },
  { text: "Digital Marketing Course", path: "courses/digital-marketing" },
  { text: "AI Automation Course", path: "courses/ai-automation" },
  { text: "Product Management Course", path: "courses/product-management" },
  { text: "Advanced Automation Course", path: "courses/advance-automation" },
  { text: "Power Automate Course", path: "courses/power-automate" },
  { text: "UiPath Course", path: "courses/uipath" },
  { text: "Agile Project Manager Course", path: "courses/agile-project-manager" },
  { text: "Capital Market Course", path: "courses/capital-market" },
  { text: "Cloud Engg. Azure DevOps", path: "courses/cloud-engineering-azure-devops" },
  { text: "Selenium Using AI Course", path: "courses/selenium-ai" },
  { text: "Core Java Course", path: "courses/core-java" },
  { text: "API Automation with AI Integration Course", path: "courses/api-automation-ai" },
  { text: "Cypress with TypeScript and AI-Driven Framework", path: "courses/cypress-typescript-ai" },
  { text: "Cloud Engineering with AWS DevOps", path: "courses/cloud-engineering-aws-devops" }
];

  const resources = [
    { text: "Course Info", path: paths.courseInfo },
    { text: "Tutorials", path: paths.tutorials },
    { text: "Interview Questions", path: paths.interviewQuestions },
    { text: "Practice Tests", path: paths.practiceTests },
    { text: "Master Classes", path: paths.masterClasses },
    { text: "Blogs", path: paths.blogs }
  ];

  const offerings = [
    { text: "Live virtual (online)", path: paths.liveVirtual },
    { text: "Classroom", path: paths.classroom },
    { text: "Agile Services", path: paths.agileServices },
    { text: "Refer & Earn", path: paths.referEarn },
    { text: "Corporate Training", path: paths.corporateTraining },
    { text: "School Training", path: paths.schoolTraining },
    { text: "Industrial Training", path: paths.industrialTraining },
    { text: "IT Training", path: paths.itTraining }
  ];

  const topCategories = [
    { text: "Technology", path: paths.technology },
    { text: "Business", path: paths.business },
    { text: "Marketing", path: paths.marketing },
    { text: "Design", path: paths.design },
    { text: "Data Science", path: paths.dataScience },
    { text: "Cybersecurity", path: paths.cybersecurity },
    { text: "AI & Machine Learning", path: paths.aiMl },
    { text: "Cloud", path: paths.cloudComputing }
  ];

  const partners = [
    { text: "Become an instructor", path: paths.becomeInstructor },
    { text: "Hire from Us", path: paths.hireFromUs },
    { text: "Become a Training Partner", path: paths.trainingPartner },
    { text: "Affiliates", path: paths.affiliates }
  ];

  const certifications = [
    { text: "PRINCE2 Certification", path: paths.prince2 },
    { text: "DevOps Foundation Certification", path: paths.devops },
    { text: "Data Science with Python Certification", path: paths.pythonDs },
    { text: "Full-Stack Development Bootcamp", path: paths.fullstack },
    { text: "Front-End Development Bootcamp", path: paths.frontend },
    { text: "Python Certification Training", path: paths.python }
  ];

  const supportLegal = [
    { text: "Privacy Policy", path: paths.privacyPolicy },
    { text: "Terms & Conditions", path: paths.termsConditions },
    { text: "Refund Policy", path: paths.refundPolicy },
    { text: "Cookies Policy", path: paths.cookiesPolicy },
    { text: "FAQs", path: paths.faqs },
    { text: "Sitemap", path: paths.sitemap }
  ];

  // Updated renderList function to use Link component
  const renderList = (items) =>
    items.map((item, idx) => (
      <li key={idx}>
        <Link
          to={item.path}
          className="group flex items-center gap-2 text-gray-200 hover:text-white transition duration-300 transform hover:translate-x-2"
        >
          <HiOutlineChevronDoubleRight className="text-indigo-400 group-hover:text-white" />
          {item.text}
        </Link>
      </li>
    ));

  return (
    <>
      {/* Decorative Footer Image */}
      <img 
        src="/assets/banners/footer.png" 
        alt="Footer Banner" 
        className="w-full"
        style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0% 100%)' }} 
      />

      <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-200">

        {/* ===== First Footer Section ===== */}
        <div className="max-w-full mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <Link to={paths.home}>
                <img src={'/assets/logo/rmg-logo.png'} className="w-36" alt="Logo" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              We are dedicated to facilitating career advancement and fostering professional development. With a wealth of resources and initiatives, we strive to empower individuals at every stage of their journey.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Quick Links</h3>
            <ul className="space-y-2 text-sm">{renderList(quickLinks)}</ul>
          </div>

      {/* Top Courses */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-xl">Top Courses</h3>
            <div className="flex space-x-6">
             <ul className="space-y-2 text-sm">
  {renderList(courses.slice(0, 7))}
</ul>
<ul className="space-y-2 text-sm">
  {renderList(courses.slice(7, 14))}
</ul>
<ul className="space-y-2 text-sm">
  {renderList(courses.slice(14, 21))}
</ul>
            </div>
          </div>



          {/* Courses / Offerings */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Offerings</h3>
            <ul className="space-y-2 text-sm">{renderList(offerings)}</ul>
          </div> */}

              {/* Support & Legal */}
          {/* <div className="md:col-span-0">
            <h3 className="text-white font-semibold mb-4 text-xl">Support</h3>
            <ul className="space-y-2 text-sm">{renderList(supportLegal)}</ul>
          </div> */}
          

          {/* Resources */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Resources</h3>
            <ul className="space-y-2 text-sm">{renderList(resources)}</ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-indigo-400 mt-1" />
                <span>
                  Refer Me Group<br />
                  B-225, Aditya Park Town,<br />
                  Ghaziabad (UP) 201002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-indigo-400" />
                <a href="mailto:contact@refermegroup.com" className="hover:text-white">contact@refermegroup.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" />
                <a href="tel:+917678573511" className="hover:text-white">+91 76785 73511</a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Partner with Us</h3>
            <ul className="space-y-2 text-sm">{renderList(partners)}</ul>
          </div> */}
        </div>

        {/* ===== Second Footer Section ===== */}
        <div className="max-w-full mx-auto px-12  grid grid-cols-1 md:grid-cols-6 gap-4">
      

          {/* Top Categories */}
          {/* <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-xl">Top Categories</h3>
            <div className="flex space-x-16">
              <ul className="space-y-2 text-sm">
                {renderList(topCategories.slice(0, 4))}
              </ul>
              <ul className="space-y-2 text-sm">
                {renderList(topCategories.slice(4))}
              </ul>
            </div>
          </div> */}

    

          {/* Certifications */}
          {/* <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-xl">Certifications</h3>
            <ul className="space-y-2 text-sm">{renderList(certifications)}</ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-700 py-4 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2 px-4">
          <div>
            <p>© {new Date().getFullYear()} All Copyrights Reserved by Refer Me Group</p>
          </div>
          <div>
            <p>
              Designed & Developed By{' '}
              <a
                href="https://www.jaikviktechnology.com"
                className="text-indigo-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jaikvik Technology India Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;