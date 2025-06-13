import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { FaTags } from 'react-icons/fa';

import Blog1 from '../Blogs/Blog1';


const BlogPage = () => {
  // Blog categories
  const categories = [
    { name: "All", slug: "all" },
    { name: "Data Science", slug: "data-science" },
    { name: "Agile & Project Management", slug: "agile-project-management" },
    { name: "Business Analysis", slug: "business-analysis" },
    { name: "Cloud Engineering", slug: "cloud-engineering" },
    { name: "Automation", slug: "automation"},
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Programming", slug: "programming" }
  ];

  // Blog posts with iStock image URLs
  const blogs = [
    {
      id: 1,
      title: "The Future of Data Science: Trends to Watch in 2024",
      excerpt: "Explore the emerging trends in data science that are shaping industries and creating new career opportunities.",
      category: "Data Science",
      date: "2024-03-15",
      readTime: "8 min read",
      author: "Dr. Ananya Sharma",
      image: "/assets/blogs/Data Science Slide.jpg",
      tags: ["AI", "Machine Learning", "Big Data"],
      path:"The-Future-of-Data-Science"
    },
    {
      id: 2,
      title: "Mastering Agile: Best Practices for Project Managers",
      excerpt: "Learn the essential agile methodologies that can transform your project management approach and team productivity.",
      category: "Agile & Project Management",
      date: "2024-03-10",
      readTime: "6 min read",
      author: "Rahul Mehta",
      image: "/assets/blogs/scrum-agile-minimal-infographic-banner-vector.jpg",
      tags: ["Scrum", "Kanban", "SAFe"],
      path:"Mastering-Agile",
    },
    {
      id: 3,
      title: "Azure DevOps vs AWS: Choosing the Right Cloud Platform",
      excerpt: "A comprehensive comparison of the two leading cloud platforms to help you make informed decisions for your projects.",
      category: "Cloud Engineering",
      date: "2024-03-05",
      readTime: "10 min read",
      author: "Priya Patel",
      image: "/assets/blogs/azure-devops-banner.webp",
      tags: ["Azure", "AWS", "DevOps"],
      path:"Azure-DevOps-vs-AWS"
    },
    {
      id: 4,
      title: "Automation Testing with Selenium and AI: The Next Frontier",
      excerpt: "Discover how AI is revolutionizing test automation and how you can leverage these advancements in your projects.",
      category: "Automation",
      date: "2024-02-28",
      readTime: "7 min read",
      author: "Vikram Singh",
      image: "/assets/blogs/sel.jpg",
      tags: ["Selenium", "Test Automation", "AI Testing"],
      path:"Automation-Testing-with-Selenium-and-AI"
    },
    {
      id: 5,
      title: "Business Analysis in the Digital Age: Essential Skills",
      excerpt: "The must-have skills for business analysts to thrive in today's rapidly evolving digital landscape.",
      category: "Business Analysis",
      date: "2024-02-20",
      readTime: "5 min read",
      author: "Neha Gupta",
      image: "/assets/blogs/buss.jpg",
      tags: ["Requirements", "Stakeholder Management", "Digital Transformation"],
      path:"Business-Analysis-in-the-Digital-Age"
    },
    {
      id: 6,
      title: "Power Automate for Beginners: Streamline Your Workflows",
      excerpt: "A step-by-step guide to getting started with Microsoft Power Automate to automate repetitive tasks.",
      category: "Automation",
      date: "2024-02-15",
      readTime: "4 min read",
      author: "Arjun Kapoor",
      image: "/assets/blogs/AUTO.jpg",
      tags: ["RPA", "Microsoft", "Workflow Automation"],
      path:"Power-Automate-for-Beginners"
    },
    {
      id: 7,
      title: "Core Java Concepts Every Developer Should Master",
      excerpt: "The fundamental Java concepts that form the foundation of robust application development.",
      category: "Programming",
      date: "2024-02-10",
      readTime: "9 min read",
      author: "Sanjay Verma",
      image: "/assets/blogs/jav21.webp",
      tags: ["Java", "OOP", "Programming"],
      path: "Core-Java-Concepts-Every-Developer-Should-Master"
    },
    {
      id: 8,
      title: "Digital Marketing Strategies for 2024: What's Working Now",
      excerpt: "Proven digital marketing tactics that are delivering results in the current competitive landscape.",
      category: "Digital Marketing",
      date: "2024-02-05",
      readTime: "6 min read",
      author: "Anjali Desai",
      image: "/assets/blogs/DM.jpg",
      tags: ["SEO", "Social Media", "Content Marketing"],
      path:"Digital-Marketing-Strategies-for-2024"
    },
    // {
    //   id: 9,
    //   title: "Deep Learning for Predictive Analytics",
    //   excerpt: "How deep learning models are enhancing predictive analytics in industries like finance and healthcare.",
    //   category: "Data Science",
    //   date: "2024-02-01",
    //   readTime: "7 min read",
    //   author: "Meera Iyer",
    //   image: "https://media.istockphoto.com/id/1312345678/photo/ai-programmer-coding.jpg",
    //   tags: ["Deep Learning", "AI", "Data Analysis"]
    // },
    // {
    //   id: 10,
    //   title: "Scaling Agile in Large Enterprises",
    //   excerpt: "Strategies to implement agile methodologies effectively in large, complex organizations.",
    //   category: "Agile & Project Management",
    //   date: "2024-01-25",
    //   readTime: "8 min read",
    //   author: "Karan Oberoi",
    //   image: "https://media.istockphoto.com/id/1289012345/photo/agile-teamwork-sprint.jpg",
    //   tags: ["Agile", "Enterprise", "SAFe"]
    // },
    // {
    //   id: 11,
    //   title: "Building Resilient Cloud Architectures",
    //   excerpt: "Key principles for designing cloud systems that are scalable, secure, and fault-tolerant.",
    //   category: "Cloud Engineering",
    //   date: "2024-01-20",
    //   readTime: "9 min read",
    //   author: "Aditi Rao",
    //   image: "https://media.istockphoto.com/id/1278901234/photo/cloud-security-admin.jpg",
    //   tags: ["Cloud", "AWS", "Resilience"]
    // },
    // {
    //   id: 12,
    //   title: "Automating Business Processes with UiPath",
    //   excerpt: "Learn how UiPath’s RPA tools can streamline operations and boost efficiency in your business.",
    //   category: "Automation",
    //   date: "2024-01-15",
    //   readTime: "6 min read",
    //   author: "Rohan Malhotra",
    //   image: "https://media.istockphoto.com/id/1334567890/photo/uipath-rpa-process.jpg",
    //   tags: ["RPA", "UiPath", "Automation"]
    // },
    // {
    //   id: 13,
    //   title: "Effective Stakeholder Analysis for Business Analysts",
    //   excerpt: "Techniques to identify and manage stakeholders to ensure project success in dynamic environments.",
    //   category: "Business Analysis",
    //   date: "2024-01-10",
    //   readTime: "5 min read",
    //   author: "Shalini Nair",
    //   image: "https://media.istockphoto.com/id/1245678901/photo/stakeholder-communication.jpg",
    //   tags: ["Business Analysis", "Stakeholder Management", "Requirements"]
    // },
    // {
    //   id: 14,
    //   title: "SEO Mastery: Advanced Techniques for 2024",
    //   excerpt: "Cutting-edge SEO strategies to boost your website’s ranking and drive organic traffic.",
    //   category: "Digital Marketing",
    //   date: "2024-01-05",
    //   readTime: "7 min read",
    //   author: "Vivek Shah",
    //   image: "https://media.istockphoto.com/id/1234567890/photo/seo-content-marketing.jpg",
    //   tags: ["SEO", "Digital Marketing", "Content Marketing"]
    // },
    // {
    //   id: 15,
    //   title: "Python for Web Development: Getting Started",
    //   excerpt: "A beginner’s guide to using Python frameworks like Django and Flask for web development.",
    //   category: "Programming",
    //   date: "2024-01-01",
    //   readTime: "8 min read",
    //   author: "Nikhil Joshi",
    //   image: "https://media.istockphoto.com/id/1290123456/photo/web-developer-freelancer.jpg",
    //   tags: ["Python", "Programming", "Web Development"]
    // }
  ];

  // Popular tags
  const popularTags = [
    "AI", "Machine Learning", "Automation", "Cloud", "DevOps",
    "Agile", "Scrum", "Data Analysis", "Programming", "Java",
    "Selenium", "Power Automate", "Digital Marketing", "Business Analysis",
    "SEO", "RPA", "AWS", "Stakeholder Management", "Python"
  ];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState(null);

  // Filter blogs based on category or tag
  const filteredBlogs = blogs.filter((blog) => {
    if (activeCategory !== "all" && activeTag) {
      return blog.category === categories.find(c => c.slug === activeCategory)?.name && blog.tags.includes(activeTag);
    }
    if (activeCategory !== "all") {
      return blog.category === categories.find(c => c.slug === activeCategory)?.name;
    }
    if (activeTag) {
      return blog.tags.includes(activeTag);
    }
    return true;
  });

  // Handle category click
  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    setActiveTag(null); // Clear tag filter
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    setActiveTag(tag);
    setActiveCategory("all"); // Clear category filter
  };

  return (

    <>

 <div>
        <img src={"/assets/banners/bann2.jpg"} alt="Banner" className="w-full" />
      </div>

        <div className="bg-violet-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refer Me Group Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and expert advice on career development, technology, and professional growth
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryClick(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.slug
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {filteredBlogs.map((blog) => (
                  <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                          {blog.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <FiCalendar className="mr-1" /> {blog.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <FiClock className="mr-1" /> {blog.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/blog/${blog.id}`} className="hover:text-indigo-600">
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FiUser className="text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">{blog.author}</span>
                        </div>
                        <Link 
                          to={`/blogs/${blog.path}`} 
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          Read more
                        </Link>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No blogs found</h3>
                <p className="text-gray-500">No articles match the selected filters. Try another category or tag!</p>
              </div>
            )}

            {/* Pagination */}
            {/* <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">
                  2
                </button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">
                  3
                </button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">
                  Next →
                </button>
              </nav>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-indigo-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.filter(c => c.slug !== "all").map((category) => (
                  <li key={category.slug}>
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      className={`flex items-center justify-between py-2 w-full text-left ${
                        activeCategory === category.slug 
                          ? 'text-indigo-600 font-medium' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {blogs.filter(b => b.category === category.name).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`text-sm px-3 py-1 rounded-full ${
                      activeTag === tag
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-indigo-100 hover:text-indigo-800'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogs.slice(0, 3).map((blog) => (
                  <div key={blog.id} className="flex items-start">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-3">
                      <Link 
                        to={`/blog/${blog.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-indigo-600"
                      >
                        {blog.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">
                        <FiCalendar className="inline mr-1" /> {blog.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default BlogPage;