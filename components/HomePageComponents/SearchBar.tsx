"use client";
import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import SearchResults from "@/consts/SearchResults";
import { useRouter } from "next/navigation";
import { SearchResult } from "@/types/SearchResultsTypes";

interface SearchBarProps {
  pathname: string;
}

const SearchBar = ({ pathname }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Update search value based on current route
  useEffect(() => {
    const currentResult = SearchResults.find(
      (result) => result.url === pathname
    );
    if (currentResult) {
      setSearchValue(currentResult.title);
    } else if (pathname === "/") {
      setSearchValue("");
    }
  }, [pathname]);

  // Close on outside click / Esc
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      )
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleResultClick = (result: SearchResult) => {
    setSearchValue(result.title);
    setOpen(false);
    router.push(result.url);
  };

  return (
    <div ref={containerRef} className="relative w-[584px] max-w-[90vw]">
      {/* Input pill */}
      <div
        className={`bg-white w-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200
        rounded-3xl ${open ? "rounded-b-none" : ""}`}
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        <div className="flex items-center px-4 py-3 cursor-text">
          <GoSearch size={20} className="text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setOpen(true)}
            className="flex-1 outline-none text-gray-900 text-base bg-transparent"
            placeholder=""
          />
        </div>
      </div>

      {/* Floating dropdown */}
      <div
        className={`absolute left-0 right-0 top-full z-50 mt-0.5 bg-white border border-gray-200 border-t-0 
        rounded-b-3xl shadow-lg overflow-hidden transition-all duration-150
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="listbox"
        aria-hidden={!open}
      >
        <div className="max-h-[420px] overflow-y-auto">
          {SearchResults.map((result) => {
            const ItemIcon = result.icon;
            const isActive = result.url === pathname;

            return (
              <div
                key={result.id}
                onClick={() => handleResultClick(result)}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors
                ${isActive ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
              >
                <ItemIcon
                  size={18}
                  className={`mr-3 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span
                  className={`${
                    isActive ? "text-blue-600 font-medium" : "text-gray-900"
                  }`}
                >
                  {result.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
