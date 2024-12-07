import React from "react";
import { Search, XIcon } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="relative boxShadow w-full mx-auto max-w-5xl px-2 md:px-4 sm:px-3 mt-2 lg:mt-1">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search blog by title, category..."
        className="w-full bg-black-100 text-gray-300 placeholder:text-gray-400 rounded-full py-4 sm:py-6 pl-4 sm:pl-6 pr-12 focus-visible:ring-0 focus-visible:ring-offset-0 border-none text-sm sm:text-base"
      />
      {searchQuery && (
        <XIcon
          onClick={() => setSearchQuery("")}
          className="absolute right-6 md:right-7 lg:right-10 sm:right-6 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 cursor-pointer"
        />
      )}
      <Search className="absolute right-12 md:right-14 lg:right-16 sm:right-12 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
    </div>
  );
};

export default SearchBar;
