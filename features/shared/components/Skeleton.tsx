import React from "react";

export default function Skeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col rounded-2xl bg-gray-100 h-[320px] w-full max-w-[370px] animate-pulse"
        >
          {/* Logo skeleton */}
          <div className="flex-1 flex items-center justify-center bg-gray-200 rounded-t-2xl h-[150px]">
            <div className="w-32 h-8 bg-gray-300 rounded" />
          </div>
          {/* Text skeleton */}
          <div className="bg-white rounded-b-2xl p-6 flex flex-col gap-3">
            <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
            <div className="h-4 w-20 bg-gray-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
