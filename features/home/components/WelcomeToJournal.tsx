import React from "react";

const WelcomeToJournal = () => {
  return (
    <div className="bg-[#1E1E1E] w-full">
      <div className="bg-[#3385FF] h-[20px]"></div>
      <div className="pt-[86px] pb-[100px]">
        <div className=" text-[#D9D9D9] space-y-[21px] max-w-[1440px] mx-auto px-[20px] lg:px-[149px]">
          <h2 className="font-playfair-display text-[25px] lg:text-[36px] leading-[100%] font-bold">
            Welcome to [Journal Name]
          </h2>
          <p className="text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px] font-normal">
            A premier platform dedicated to fostering academic excellence among
            high school students from all over the world. Our journal provides a
            space for young scholars to publish their research, share innovative
            ideas, and engage with the academic community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToJournal;
