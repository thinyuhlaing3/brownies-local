"use client";

import { useState } from "react";
import InstitutionForm from "./forms/InstitutionForm";
import BlogFrom from "./forms/BlogForm";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Institution", content: <InstitutionForm /> },
    { title: "Edu Boarding", content: "Your Contacts appear here" },
    { title: "Edu Opportunity", content: "Your Contacts appear here." },
    { title: "News", content: "Your Contacts appear here." },
    { title: "Article", content: <BlogFrom /> },
  ];

  return (
    <div>
      {/* Tabs Navigation */}
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <li className="me-2" key={index}>
            <button
              className={`inline-block p-4 rounded-t-lg transition-all ${
                activeTab === index
                  ? "text-primary font-medium bg-white"
                  : "hover:text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
        {/* Disabled Tab */}
      </ul>

      {/* Tab Content */}
      <div className="p-4 pb-8 border border-gray-200 rounded-b-lg bg-white relative">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

/* Profile Form Component */
const ProfileForm = () => {
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="•••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default Tabs;
