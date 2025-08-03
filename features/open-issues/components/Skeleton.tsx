import React from "react";

const Skeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        {/* Author and Date */}
        <div className="space-y-2">
          <div className="h-5 bg-blue-200 rounded w-32 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        {/* Title */}
        <div className="h-10 bg-gray-800 rounded w-3/4 animate-pulse"></div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <div className="h-6 bg-blue-500 rounded-full w-40 animate-pulse"></div>
          <div className="h-6 bg-blue-500 rounded-full w-8 animate-pulse"></div>
          <div className="h-6 bg-blue-500 rounded-full w-12 animate-pulse"></div>
          <div className="h-6 bg-blue-500 rounded-full w-10 animate-pulse"></div>
          <div className="h-6 bg-blue-500 rounded-full w-8 animate-pulse"></div>
          <div className="h-6 bg-blue-500 rounded-full w-6 animate-pulse"></div>
        </div>
      </div>

      {/* URL and Download Section */}
      <div className="space-y-4">
        {/* URL */}
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>

        {/* Download Input and Button */}
        <div className="flex gap-4 items-center">
          <div className="flex-1 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-800 rounded w-24 animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-800 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Multiple paragraphs of content */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded animate-pulse ${
              i === 0
                ? "w-full"
                : i === 1
                ? "w-5/6"
                : i === 2
                ? "w-4/5"
                : i === 3
                ? "w-full"
                : i === 4
                ? "w-3/4"
                : "w-5/6"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
