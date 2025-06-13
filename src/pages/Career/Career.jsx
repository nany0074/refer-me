import React from 'react';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';
// import banner from "../../assets/banners/bann.jpg";

const Careers = () => {
  const jobListings = [
    {
      title: 'Business Analyst (BA)',
      description: 'Bridge the gap between business needs and technical solutions, driving efficiency and innovation.',
      responsibilities: [
        'Gather and analyze business requirements.',
        'Collaborate with stakeholders to define project goals.',
        'Create detailed documentation and process flows.',
        'Support data-driven decision-making with insights.',
      ],
      qualifications: [
        'Bachelor’s degree in Business, IT, or related field.',
        '2+ years of experience in business analysis.',
        'Proficiency in tools like JIRA, Confluence, or Visio.',
        'Strong communication and problem-solving skills.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Business%20Analyst',
    },
    {
      title: 'Developer (DEV)',
      description: 'Build cutting-edge applications and platforms to empower our clients and users.',
      responsibilities: [
        'Design and develop scalable web applications.',
        'Write clean, maintainable, and efficient code.',
        'Collaborate with designers and product managers.',
        'Perform code reviews and ensure best practices.',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or equivalent.',
        '3+ years of experience with JavaScript, React, or Node.js.',
        'Familiarity with databases (SQL/NoSQL).',
        'Experience with Git and CI/CD pipelines.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Developer',
    },
    {
      title: 'Human Resources (HR)',
      description: 'Foster a positive workplace culture and support our team’s growth and development.',
      responsibilities: [
        'Manage recruitment and onboarding processes.',
        'Develop and implement HR policies.',
        'Handle employee relations and conflict resolution.',
        'Oversee training and performance management.',
      ],
      qualifications: [
        'Bachelor’s degree in HR, Psychology, or related field.',
        '2+ years of HR experience.',
        'Knowledge of labor laws and compliance.',
        'Excellent interpersonal and organizational skills.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Human%20Resources',
    },
    {
      title: 'Manager',
      description: 'Lead teams to deliver projects on time and exceed client expectations.',
      responsibilities: [
        'Oversee project planning and execution.',
        'Mentor and guide team members.',
        'Manage budgets and resource allocation.',
        'Ensure client satisfaction and quality deliverables.',
      ],
      qualifications: [
        'Bachelor’s degree in Management, Business, or related field.',
        '5+ years of project or team management experience.',
        'Strong leadership and decision-making skills.',
        'PMP or Agile certification is a plus.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Manager',
    },
    {
      title: 'Quality Assurance (QA)',
      description: 'Ensure our products meet the highest standards of quality and reliability.',
      responsibilities: [
        'Develop and execute test plans and cases.',
        'Identify and report bugs and issues.',
        'Collaborate with developers to resolve defects.',
        'Perform manual and automated testing.',
      ],
      qualifications: [
        'Bachelor’s degree in IT, Computer Science, or equivalent.',
        '2+ years of QA experience.',
        'Familiarity with tools like Selenium, JUnit, or TestRail.',
        'Attention to detail and analytical skills.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Quality%20Assurance',
    },
    {
      title: 'Social Media (SM)',
      description: 'Amplify our brand and engage our audience through creative social media strategies.',
      responsibilities: [
        'Create and manage social media content.',
        'Monitor and analyze campaign performance.',
        'Engage with followers and respond to inquiries.',
        'Collaborate with marketing to align strategies.',
      ],
      qualifications: [
        'Bachelor’s degree in Marketing, Communications, or related field.',
        '1+ years of social media management experience.',
        'Proficiency with platforms like Instagram, LinkedIn, Twitter.',
        'Creative thinking and strong writing skills.',
      ],
      applyLink: 'mailto:careers@refermegroup.com?subject=Application%20for%20Social%20Media',
    },
  ];

  return (
    <>
<div>
  <img src={'/assets/banners/bann.jpg'} alt="" className='w-full' />
</div>

      <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            At ReferMeGroup, we’re passionate about innovation and growth. Explore exciting career opportunities and become part of our dynamic team.
          </p>
          <a
            href="#jobs"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-full hover:bg-yellow-700 transition-colors"
            aria-label="Explore job openings"
          >
            Explore Jobs <FaArrowRight className="ml-2" />
          </a>
        </section>

        {/* Job Listings */}
        <section id="jobs" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <div
                key={job.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-yellow-600 text-xl mr-3" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Qualifications:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {job.qualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={job.applyLink}
                  className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white font-medium rounded-full hover:bg-yellow-700 transition-colors"
                  aria-label={`Apply for ${job.title} position`}
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
            How to Apply
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
            Interested in joining us? Click the "Apply Now" button for the role you’re interested in and send your resume and cover letter to{' '}
            <a
              href="mailto:careers@refermegroup.com"
              className="text-yellow-600 hover:underline"
            >
              careers@refermegroup.com
            </a>
            . Please include the job title in the subject line. We’ll review your application and get back to you soon!
          </p>
          <div className="text-center">
            <a
              href="mailto:careers@refermegroup.com?subject=General%20Career%20Inquiry"
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-full hover:bg-yellow-700 transition-colors"
              aria-label="Contact HR for career inquiries"
            >
              Contact HR
            </a>
          </div>
        </section>

        {/* Company Culture */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            At ReferMeGroup, we foster a culture of innovation, collaboration, and continuous learning. Our team enjoys flexible work arrangements, professional development opportunities, and a supportive environment where your ideas matter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Work on cutting-edge projects that push the boundaries of technology and education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Growth</h3>
              <p className="text-gray-600 text-sm">
                Access training and mentorship to advance your career and skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Teamwork</h3>
              <p className="text-gray-600 text-sm">
                Collaborate with a diverse, passionate team to achieve shared goals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  
  );
};

export default Careers;