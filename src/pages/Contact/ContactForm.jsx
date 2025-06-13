import { useFormik } from "formik";
import { useCallback, useMemo, useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Enter a valid email")
          .required("Email is required"),
        contact: yup
          .string()
          .min(10, "Contact number should be at least 10 digits")
          .required("Contact number is required"),
        address: yup.string(),
        message: yup.string().required("Message is required"),
      }),
    []
  );

  const sendData = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data?.name);
      formData.append('email', data?.email);
      formData.append('contact', data?.contact);
      formData.append('address', data?.address);
      formData.append('message', data?.message);
      
      const response = await axios.postForm('http://localhost:3000/server.php', formData);
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      console.log("send data error: ----- ", error);
    } finally {
      setIsLoad(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      message: "",
    },
    validationSchema,
    onSubmit: useCallback((values, { resetForm }) => {
      setIsLoad(true);
      setStatus("Sending...");
      sendData(values);
      setStatus("Message sent successfully!");
      resetForm();
    }, []),
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col h-full max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center uppercase">
        <span className="text-indigo-600">Feel Free</span> To Contact Us
      </h2>
      <h3 className="text-lg sm:text-xl text-gray-600 text-center mt-2">
        Let’s Get in Touch
      </h3>

      <form onSubmit={formik.handleSubmit} className="flex-1 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "name",
              label: "Name",
              type: "text",
              placeholder: "Name",
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Email",
            },
            {
              name: "contact",
              label: "Mobile",
              type: "tel",
              placeholder: "Mobile",
            },
            {
              name: "address",
              label: "Address (optional)",
              type: "text",
              placeholder: "Address (optional)",
            },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-col">
              <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...formik.getFieldProps(name)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  formik.touched[name] && formik.errors[name]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched[name] && formik.errors[name] && (
                <span className="text-red-500 text-xs mt-1">
                  {formik.errors[name]}
                </span>
              )}
            </div>
          ))}

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter Your Message..."
              {...formik.getFieldProps("message")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-y ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <span className="text-red-500 text-xs mt-1">
                {formik.errors.message}
              </span>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={isLoad}
              className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-800 disabled:bg-indigo-400 flex items-center justify-center gap-2 transition-colors"
            >
              {isLoad && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              <span>Send</span>
            </button>
          </div>

          {status && (
            <div className="col-span-1 md:col-span-2">
              <p className="text-indigo-600 text-sm">{status}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;