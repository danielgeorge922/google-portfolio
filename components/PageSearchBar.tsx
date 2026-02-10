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
      <div className="flex w-full justify-between items-center pt-4 px-4 sm:px-8 lg:px-12 pb-4 gap-4">
        {/* left */}
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition-opacity shrink-0 hidden sm:block"
          >
            <DanielGoogle size="text-4xl" />
          </Link>
          <SearchBar pathname={pathname} />
        </div>

        {/* right */}
        <div className="flex gap-2 sm:gap-4 items-center shrink-0">
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
