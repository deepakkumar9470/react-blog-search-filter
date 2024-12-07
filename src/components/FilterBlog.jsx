import { categories } from "../constants/data";

const FilterBlog = ({ activeFilter, handleFilterChange }) => {

  return (
    <section className="w-full py-6 px-4">
      <h2 className="text-white text-center text-2xl sm:text-3xl font-bold mb-6">
        Filter Blogs by Category
      </h2>
      <div className="max-w-4xl boxShadow mx-auto flex flex-wrap justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-full border-2 text-sm sm:text-base ${
            activeFilter === "All"
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full boxShadow border-2 text-sm capitalize sm:text-base ${
              activeFilter === category.name
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => handleFilterChange(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          {activeFilter === "All"
            ? "Showing all blogs"
            : `Filtered by: ${activeFilter}`}
        </p>
      </div>
    </section>
  );
};

export default FilterBlog;
