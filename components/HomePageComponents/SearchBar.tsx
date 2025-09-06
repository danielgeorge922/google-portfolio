"use client";
import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import SearchResults from "@/consts/SearchResults";
import { useRouter } from "next/navigation";
import { SearchResult } from "@/types/SearchResultsTypes";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
    // Give the wrapper the width and positioning; dropdown anchors to this.
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

      {/* Floating dropdown (does NOT affect layout) */}
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
            return (
              <div
                key={result.id}
                onClick={() => handleResultClick(result)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center transition-colors"
              >
                <ItemIcon size={18} className="text-gray-500 mr-3" />
                <span className="text-gray-900">{result.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
