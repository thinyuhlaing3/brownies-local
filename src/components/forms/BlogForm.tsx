export default function BlogFrom() {
  return (
    <form className="grid gap-6 mb-6 md:grid-cols-2 ">
      {/* Institution Name */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Title
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Title"
          required
        />
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

      {/* IMG */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Image
        </label>
        <input
          type="url"
          id="website"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
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
}
