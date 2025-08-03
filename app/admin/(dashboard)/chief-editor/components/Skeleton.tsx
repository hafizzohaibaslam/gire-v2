import React from "react";

const ChiefEditorSkeleton = () => {
  return (
    <div className="bg-white px-[37px] py-[30px] rounded-[25px] h-full">
      <div className="space-y-[30px] h-full overflow-y-auto">
        {/* Tabs Skeleton */}
        <div className="flex gap-[50px] border-b-[1px] border-[#E0E0E0]">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-[30px] w-full mt-[30px]">
            {/* Image Upload Skeleton */}
            <div className="relative w-full max-w-[100px]">
              <div className="w-[100px] h-[100px] bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            <div className="w-full flex flex-col gap-[30px]">
              <div className="w-full space-y-[25px]">
                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
                  {/* Name Field */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* Title Field */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* Affiliation Field */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Bio Field */}
                <div className="flex flex-col gap-[11px] w-full">
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Letter Field */}
                <div className="flex flex-col gap-[11px] w-full">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="self-end max-w-[200px]">
                <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefEditorSkeleton;
