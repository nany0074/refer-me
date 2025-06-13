import React from 'react';
import { useForm } from 'react-hook-form';

function EnquiryModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Handle file separately since it's a FileList
    const resumeFile = data.resume?.[0];
    console.log({
      ...data,
      resume: resumeFile ? { name: resumeFile.name, size: resumeFile.size } : null
    });
    alert('Enquiry submitted successfully!');
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 md:mx-0 flex flex-col md:flex-row transform transition-all duration-300 scale-95 animate-fadeIn">
        {/* Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/assets/creatives/close-up-girl-girl-learning-online.jpg"
            alt="Referral teamwork"
            className="object-cover h-full rounded-l-lg"
          />
        </div>
        {/* Form Section */}
        <div
          className="md:w-1/2 p-8"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url("/assets/creatives/laptop-notepads-yellow-background-flat-lay_169016-51084.avif")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-center flex justify-center font-bold text-gray-800">Enquiry Form</h2>
         <button
  onClick={onClose}
  className="text-black bg-white hover:text-gray-700 text-4xl w-10 h-10 pb-2 rounded-full flex items-center justify-center p-0"
>
  ×
</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter Your Phone Number (Optional)"
                {...register('phone', {
                  pattern: { value: /^[0-9+-\s]{10,15}$/i, message: 'Invalid phone number' }
                })}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
              <input
                type="url"
                placeholder="LinkedIn Profile (Optional)"
                {...register('linkedin', {
                  pattern: {
                    value: /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/(in|profile)\/.+$/i,
                    message: 'Invalid LinkedIn URL'
                  }
                })}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin.message}</p>}
            </div>
            {/* <div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register('resume', {
                  validate: (files) => {
                    if (files.length === 0) return true; // Optional
                    const file = files[0];
                    const maxSize = 5 * 1024 * 1024; // 5MB
                    if (file.size > maxSize) return 'File size must be less than 5MB';
                    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
                      return 'Only PDF or Word documents are allowed';
                    }
                    return true;
                  }
                })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
            </div> */}
            {/* <div>
              <textarea
                placeholder="Enter Your Address (Optional)"
                {...register('address')}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div> */}
            <div>
              <input
                type="text"
                placeholder="Qualification (Optional, e.g., B.Tech, MBA)"
                {...register('qualification')}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* <div>
              <input
                type="text"
                placeholder="Candidate Name"
                {...register('candidateName', {
                  required: 'Candidate name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.candidateName && <p className="text-red-500 text-sm">{errors.candidateName.message}</p>}
            </div> */}
            <div>
              <input
                type="text"
                placeholder="Job Title (Optional)"
                {...register('jobTitle')}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Write Your Message Here..."
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' }
                })}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnquiryModal;