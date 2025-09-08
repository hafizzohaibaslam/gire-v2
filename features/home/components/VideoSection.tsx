import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[20px] sm:px-[40px] lg:px-[149px]">
      <div className="mt-[40px] rounded-[14px] overflow-hidden">
        <iframe
          src="/jsse-rev.4.m4v"
          title="YouTube video player"
          className="w-full aspect-video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;
