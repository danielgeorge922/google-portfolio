"use client";
import React from "react";
import DanielGoogle from "./DanielGoogle";
import PfpWithModal from "./PfpWithModal";
import LinksModal from "./LinksModal";
import SearchBar from "./HomePageComponents/SearchBar";
import SearchTabs from "./SearchTabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageSearchBar = () => {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200">

      {/* Header */}
      <div className="flex w-full justify-between items-center pt-4 px-12 lg:px-8 xl:px-12 pb-4">
        {/* left */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <DanielGoogle size="text-4xl" />
          </Link>
          <SearchBar pathname={pathname} />
        </div>

        {/* right */}
        <div className="flex gap-4 items-center">
          <LinksModal />
          <PfpWithModal size="w-8 h-8" />
        </div>

        
      </div>

      {/* Tabs */}
      <SearchTabs pathname={pathname} />
    </div>
  );
};

export default PageSearchBar;
