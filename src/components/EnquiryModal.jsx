import React from 'react';
import { useForm } from 'react-hook-form';

function EnquiryModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Enhanced Image Section (Left) */}
        <div className="md:w-2/5 bg-blue-600 relative hidden md:block">
          <img
            src="/assets/creatives/close-up-girl-girl-learning-online.jpg"
            alt="Education consultation"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/30 to-blue-600/70 flex items-end p-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-white/90">We're here to help with your educational journey</p>
            </div>
          </div>
        </div>

        {/* Form Section (Right) */}
        <div className="md:w-3/5 p-6 md:p-8 bg-indigo-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Enquiry Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl w-8 h-8 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9+-\s]{10,15}$/i, message: 'Invalid phone number' }
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message </label>
              <textarea
                placeholder="Write Your Message Here..."
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' }
                })}
                rows="4"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
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