import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[20px] sm:px-[40px] lg:px-[149px]">
      <div className="space-y-[20px] flex flex-col items-center justify-center text-center">
        <h1 className="font-playfair-display font-semibold text-[25px] lg:text-[48px] leading-[24px] lg:leading-[46px]">
          Video Title
        </h1>
        <p className="font-inter text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-normal text-[#5A7184] max-w-5xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </p>
      </div>
      <div className="mt-[40px] rounded-[14px] overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/mNzenfB3OuY"
          title="YouTube video player"
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;
