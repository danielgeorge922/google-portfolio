"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";
import { downloadResume } from "@/utils/base-utils";

const UrlBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [url, setUrl] = useState("www.danielgeorge.com");
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const baseUrl = "www.danielgeorge.com";
    if (pathname === "/") {
      setUrl(baseUrl);
    } else {
      setUrl(`${baseUrl}${pathname}`);
    }
  }, [pathname]);

  const handleBack = () => {
    router.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  const handleRefresh = () => {
    router.refresh();
  };

  const handleDownloadResume = () => {
    downloadResume();
  };

  const handleProfileClick = () => {
    setShowProfileModal(true);
  };

  return (
    <>
      <div className="flex bg-gray-100 p-4">
        <div className="px-4 flex justify-between w-full items-center">
          {/* LEFT SIDE STUFF */}
          <div className="flex gap-4 items-center">
            <button
              onClick={handleBack}
              className="flex items-center justify-center hover:bg-gray-200 p-1 rounded"
            >
              <IoMdArrowRoundBack size={24} />
            </button>
            <button
              onClick={handleForward}
              className="flex items-center justify-center hover:bg-gray-200 p-1 rounded"
            >
              <IoMdArrowRoundForward size={24} />
            </button>
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center hover:bg-gray-200 p-1 rounded"
            >
              <GrPowerReset size={24} />
            </button>
          </div>

          {/* MIDDLE URL STUFF */}
          <div className="flex-1 px-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-white px-4 py-2 rounded-full focus:outline-blue-300"
              placeholder="Search Google or type a URL"
            />
          </div>

          {/* RIGHT SIDE STUFF */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center">
              <button
                onClick={handleProfileClick}
                className="hover:bg-gray-200 p-1 rounded-full"
              >
                <Image
                  src="/Daniel.png"
                  alt="profile picture"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <BiDotsVerticalRounded size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlBar;
