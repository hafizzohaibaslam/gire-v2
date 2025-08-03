import React from "react";

const Skeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        {/* Author and Date */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        {/* Title */}
        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-6 bg-gray-200 rounded-full animate-pulse ${
                i === 1 ? "w-32" : i === 4 ? "w-6" : "w-20"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* URL and Download Section */}
      <div className="space-y-4">
        {/* URL */}
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>

        {/* Download Button */}
        <div className="flex justify-center">
          <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
        </div>
      </div>

      {/* Periodic Table Skeleton */}
      <div className="space-y-4">
        {/* Legend Section */}
        <div className="flex gap-8 items-start">
          {/* Legend Block */}
          <div className="w-24 h-24 bg-yellow-200 rounded animate-pulse"></div>

          {/* Legend Labels */}
          <div className="space-y-2 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-4 bg-gray-200 rounded animate-pulse ${
                  i === 1
                    ? "w-16"
                    : i === 2
                    ? "w-20"
                    : i === 3
                    ? "w-24"
                    : "w-12"
                }`}
              ></div>
            ))}
          </div>

          {/* DNA Structure */}
          <div className="w-16 h-16 bg-orange-200 rounded animate-pulse"></div>
        </div>

        {/* Main Periodic Table Grid */}
        <div className="space-y-1">
          {/* First Row (H, He) */}
          <div className="flex gap-1">
            <div className="w-12 h-12 bg-red-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-transparent"></div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-1">
            <div className="w-12 h-12 bg-red-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-yellow-200 rounded animate-pulse"></div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-blue-200 rounded animate-pulse"
              ></div>
            ))}
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-transparent"></div>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex gap-1">
            <div className="w-12 h-12 bg-red-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-yellow-200 rounded animate-pulse"></div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-blue-200 rounded animate-pulse"
              ></div>
            ))}
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-transparent"></div>
            ))}
          </div>

          {/* Transition Metals Rows (simplified) */}
          {Array.from({ length: 4 }).map((_, row) => (
            <div key={row} className="flex gap-1">
              <div className="w-12 h-12 bg-red-200 rounded animate-pulse"></div>
              <div className="w-12 h-12 bg-yellow-200 rounded animate-pulse"></div>
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-yellow-200 rounded animate-pulse"
                ></div>
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-blue-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
          ))}

          {/* Bottom Rows */}
          <div className="flex gap-1">
            <div className="w-12 h-12 bg-red-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-yellow-200 rounded animate-pulse"></div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-blue-200 rounded animate-pulse"
              ></div>
            ))}
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            <div className="w-12 h-12 bg-pink-200 rounded animate-pulse"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-transparent"></div>
            ))}
          </div>

          {/* Lanthanides and Actinides */}
          <div className="flex gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-blue-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-purple-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom Right Image */}
        <div className="flex justify-end">
          <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
