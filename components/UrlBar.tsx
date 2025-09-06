import React from "react";

const UrlBar = () => {
  return (
    <div className="flex bg-gray-100 p-4">
      
      <div className="px-12 flex justify-between  w-full items-center ">
        {/* LEFT SIDE STUFF */}
        <div className="flex gap-4">
          <div>Back</div>
          <div>Forward</div>
          <div>Refresh</div>
        </div>
        {/* MIDDLE URL STUFF */}
        <div>Middle search bar</div>

        {/* RIGHT SIDE STUFF */}
        <div className="flex gap-4">
          <div>my face</div>
          <div>the little 3 dot icon thingy</div>
        </div>
      </div>
    </div>
  );
};

export default UrlBar;
