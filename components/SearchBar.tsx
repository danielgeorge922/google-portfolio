"use client";
import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import SearchResults from "@/consts/SearchResults";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSearchClicked(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div ref={containerRef}>
      <button
        onClick={handleSearch}
        className="bg-white w-[584px] flex shadow-md hover:shadow-lg transition-shadow duration-200 items-center rounded-full px-4 py-3 border border-gray-200"
      >
        <GoSearch size={20} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder=""
          className="flex-1 outline-none text-gray-900 text-base"
        />
      </button>
      {searchClicked && (
        <div className="absolute bg-white border border-gray-200 rounded-md shadow-md mt-2 ">
          {SearchResults.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                router.push(result.url);
                setSearchClicked(false); // Close dropdown after navigation
              }}
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;