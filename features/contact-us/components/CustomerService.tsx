import React from "react";
import Facebook from "@/public/contact-us-page/facebook.svg";
import Twitter from "@/public/contact-us-page/twitter.svg";
import LinkedIn from "@/public/contact-us-page/linkedin.svg";
import Instagram from "@/public/contact-us-page/instagram.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CustomerService = () => {
  return (
    <div className="bg-white -mt-[200px] px-[40px] py-[40px] lg:px-[100px] lg:py-[100px] max-w-[1440px] mx-auto">
      {/* Customer Service Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        {/* Left Section */}
        <div className="flex flex-col justify-between gap-[32px]">
          <div>
            <h1 className="text-black text-[28px] lg:text-[48px] leading-[32px] lg:leading-[60px] font-medium capitalize">
              reach out customer service team
            </h1>
            <p className="text-[#808080] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] font-normal mt-[20px] mb-[32px]">
              Our dedicated customer service team is here to assist you with any
              questions, concerns, or inquiries you may have. Whether you need
              help with an order, have product-related queries, or require
              assistance with any aspect of our services, we&apos;re here to
              help.
            </p>
            {/* Social Media Section */}
            <div className="flex items-center gap-[15px]">
              <Image
                src={Facebook}
                alt="Facebook"
                width={35}
                height={35}
                className="w-[35px] h-[35px]"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                width={35}
                height={35}
                className="w-[35px] h-[35px]"
              />
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                width={35}
                height={35}
                className="w-[35px] h-[35px]"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                width={35}
                height={35}
                className="w-[35px] h-[35px]"
              />
            </div>
          </div>

          <div>
            <p className="text-[24px] leading-[32px] font-medium">
              {" "}
              You can also contact us via email at [contact@email.com] if you
              prefer.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="p-[40px] bg-[#F9F9FB] space-y-[32px]">
          {/* Name */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="name"
              className="text-[#808080] text-[16px] leading-[24px] font-normal capitalize"
            >
              your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Trangely"
              className="border-b-[1px] pb-[5px] border-[#D6D6D6] text-black text-[20px] leading-[30px] font-medium capitalize focus:outline-none"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="email"
              className="text-[#808080] text-[16px] leading-[24px] font-normal capitalize"
            >
              your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@gmail.com"
              className="border-b-[1px] pb-[5px] border-[#D6D6D6] text-black text-[20px] leading-[30px] font-medium capitalize focus:outline-none"
            />
          </div>
          {/* Message */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="message"
              className="text-[#3385FF] text-[16px] leading-[24px] font-normal capitalize"
            >
              your message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here..."
              rows={5}
              className="border-b-[2px] pb-[5px] border-[#3385FF] text-black text-[20px] leading-[30px] font-medium capitalize focus:outline-none"
            />
          </div>
          <button className="w-full flex justify-center items-center capitalize cursor-pointer px-[19px] py-[14px] lg:px-[25px] lg:py-[19px] gap-2 text-[16px] lg:text-[20px] leading-[100%] font-semibold bg-[#3385FF] border-[2px] border-[#3385FF] rounded-[38px] hover:bg-white hover:border-transparent text-white hover:text-black transition-all duration-300">
            send message <ArrowRight className="w-[17px] h-[17px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
