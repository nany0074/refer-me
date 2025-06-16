import React from "react";
import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const response = await fetch("http://localhost:3000/server.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        reset();
      } else {
        alert("Failed to send message: " + result);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <img src={"/assets/banners/bann2.jpg"} alt="Banner" className="w-full" />
      </div>

      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're here to help! Fill out the form below, or contact us via the details provided.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form - COMPLETELY UNCHANGED FROM YOUR ORIGINAL */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                    className={`w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className={`w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 76785 73511"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^\+91[6-9][0-9]{9}$/,
                        message: "Use format: +91 76785 73511",
                      },
                    })}
                    className={`w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: { value: 5, message: "At least 5 characters" },
                    })}
                    className={`w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "At least 10 characters" },
                    })}
                    className={`w-full mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-600 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-8">
              {/* Your existing contact info block - UNCHANGED */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaEnvelope className="text-yellow-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium">
                        <a href="mailto:contact@refermegroup.com">contact@refermegroup.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaPhoneAlt className="text-yellow-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm font-medium">
                        <a href="tel:+917678573511">+91 76785 73511</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaMapMarkerAlt className="text-yellow-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-sm font-medium">
                        B-225, Aditya Park Town, Ghaziabad (UP) 201002
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW: Google Maps Component - ONLY THIS IS ADDED */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Location</h3>
                <div className="overflow-hidden rounded-lg">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.719415033119!2d77.48062777495811!3d28.668118882464704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf2170c95d41d%3A0x63766c47c72173a7!2sRefer%20Me%20Group!5e0!3m2!1sen!2sin!4v1750077987488!5m2!1sen!2sin"  width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location"
                    className="rounded-lg"></iframe>


                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.google.com/?q=B-225,Aditya+Park+Town,Ghaziabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;