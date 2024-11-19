import React from 'react';

const AcademyForm = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 xl:p-15 border border-gray-200 mx-auto"> {/* Added mx-auto */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 text-left">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 text-left">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 text-left">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Type of Request */}
          <div>
            <label htmlFor="requestType" className="block text-sm font-semibold text-gray-700 text-left">Type of Request</label>
            <select
              id="requestType"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
              required
            >
              <option value="">Select a Request Type</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* What Can I Help You With */}
          <div>
            <label htmlFor="help" className="block text-sm font-semibold text-gray-700 text-left">What Can I Help You With?</label>
            <textarea
              id="help"
              rows="4"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Describe your request here..."
              required
            ></textarea>
          </div>

          {/* Accept Privacy Policy */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              required
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 text-left">
              I accept the privacy policy
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AcademyForm;
