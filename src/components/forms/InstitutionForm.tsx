const InstitutionForm = () => {
  return (
    <form className="grid gap-6 mb-6 md:grid-cols-2 ">
      {/* Institution Name */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Institution Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Institution Name"
          required
        />
      </div>

      {/* Categories Dropdown */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Category
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          required
        >
          <option value="">Select Category</option>
          <option value="university">University</option>
          <option value="school">School</option>
          <option value="college">College</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Write about the institution..."
          //   rows="4"
          required
        ></textarea>
      </div>

      {/* Cover Image */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Cover Image
        </label>
        <input
          type="file"
          id="cover_image"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          accept="image/*"
          required
        />
      </div>

      {/* Gallery Images */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Gallery Images
        </label>
        <input
          type="file"
          id="gallery_images"
          multiple
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          accept="image/*"
        />
      </div>

      {/* Website */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Website
        </label>
        <input
          type="url"
          id="website"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="https://example.com"
        />
      </div>

      {/* Contact Email */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Contact Email
        </label>
        <input
          type="email"
          id="contact_email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="contact@example.com"
          required
        />
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone_number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="+123 456 7890"
          required
        />
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="City, Country"
          required
        />
      </div>

      {/* Logo Upload */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Logo
        </label>
        <input
          type="file"
          id="logo"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          accept="image/*"
        />
      </div>

      {/* Open Hours */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Open Hours
        </label>
        <input
          type="text"
          id="open_hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Mon-Fri: 9 AM - 6 PM"
        />
      </div>

      {/* Social Media Links */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Social Media Link
        </label>
        <input
          type="url"
          id="social_media"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="https://facebook.com/institution"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bottom-3 absolute right-4 w-fit text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default InstitutionForm;
