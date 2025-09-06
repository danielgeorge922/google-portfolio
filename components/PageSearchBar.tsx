import React from "react";
import DanielGoogle from "./DanielGoogle";
import PfpWithModal from "./PfpWithModal";

const PageSearchBar = () => {
  return (
    <div className="flex w-full justify-between items-center pt-4 px-4 pb-4 border-b border-gray-200">
      {/* left */}
      <div className="flex">
        <DanielGoogle size="text-2xl" />
      </div>

      {/* right */}
      <div className="flex">
        <PfpWithModal size="w-8 h-8" />
      </div>
    </div>
  );
};

export default PageSearchBar;
