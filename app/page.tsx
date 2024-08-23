"use client";
import React, { useState } from "react";

const TruncateText: React.FC = () => {
  // State to toggle between truncated and full text
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg w-custom border-purple-500 border-2">
          <div
            className="px-4 py-5 sm:p-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Conditionally apply truncation based on isExpanded state */}
            <p className={isExpanded ? "" : "line-clamp-3"}>
              Stepping where Groupon, GrubHub, and Uber have walked before,
              Blended Sense shoots a shot at the Startup of the Year Summit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruncateText;
