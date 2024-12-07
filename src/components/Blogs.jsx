import React, { useState, useEffect } from "react";
import { blogs } from "../constants/data";
import BlogCard from "./BlogCard";
import FilterBlog from "./FilterBlog";
import SearchBar from "./SearchBar";

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    let updatedBlogs = blogs;

    if (debouncedQuery.trim() !== "") {
      updatedBlogs = updatedBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          blog.category.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    }

    if (activeFilter !== "All") {
      updatedBlogs = updatedBlogs.filter(
        (blog) => blog.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    setFilteredBlogs(updatedBlogs);
  }, [debouncedQuery, activeFilter]);

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="mt-20 flex flex-col gap-7">
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={onSearchChange} />
      <FilterBlog
        activeFilter={activeFilter}
        handleFilterChange={handleFilterChange}
      />
      <div className="flex flex-wrap gap-7">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No blogs found matching your search or filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
