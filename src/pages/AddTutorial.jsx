import React, { useState } from 'react';

// NewTutorialForm component for adding a new tutorial
const AddTutorial = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    tutorialImageUrl: '',
    language: '',
    pricePerHour: '',
    description: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend or handle it here
    console.log('Tutorial Data Submitted:', formData);
    // You could also add logic to display a success message or clear the form
    alert('Tutorial added successfully! Check the console for data.'); // Using alert for demo, replace with custom modal
    setFormData({
      yourName: '',
      yourEmail: '',
      tutorialImageUrl: '',
      language: '',
      pricePerHour: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Add New Tutorial</h2>
        <p className="text-center text-gray-600 mb-8">Share your language expertise with students worldwide</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                placeholder="naim"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="yourEmail"
                name="yourEmail"
                value={formData.yourEmail}
                onChange={handleChange}
                placeholder="naim@gmail.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                required
              />
            </div>
          </div>

          {/* Tutorial Image URL */}
          <div>
            <label htmlFor="tutorialImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Tutorial Image URL
            </label>
            <input
              type="url"
              id="tutorialImageUrl"
              name="tutorialImageUrl"
              value={formData.tutorialImageUrl}
              onChange={handleChange}
              placeholder="Enter image URL for your tutorial"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          {/* Language */}
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="e.g., English, Spanish, French"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              required
            />
          </div>

          {/* Price per Hour */}
          <div>
            <label htmlFor="pricePerHour" className="block text-sm font-medium text-gray-700 mb-1">
              Price per Hour ($)
            </label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              placeholder="25.00"
              step="0.01"
              min="0"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your teaching experience, methodology, and what students can expect from your lessons..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out resize-y"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
