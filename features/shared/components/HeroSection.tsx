import React from "react";
import Header from "./Header";
import clsx from "clsx";

const HeroSectionComponent = ({
  children,
  className,
  backgroundImage,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundImage: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-cover bg-center bg-no-repeat bg-black/50 [background-blend-mode:darken] pb-[200px]",
        `bg-[url('/${backgroundImage}')]`,
        className
      )}
    >
      <Header />
      <div
        className={clsx(
          "flex flex-col items-start justify-start mt-[50px] pb-[50px] lg:mt-[94px] px-[20px] lg:px-[149px] text-white space-y-[25px] w-full max-w-[1440px] mx-auto"
        )}
      >
        {children}
      </div>
    </div>
  );
};

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={clsx(
        "font-playfair-display font-bold text-[30px] lg:text-[60px] capitalize leading-[100%]",
        className
      )}
    >
      {children}
    </h1>
  );
};

const Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={clsx(
        "font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[28px] max-w-5xl",
        className
      )}
    >
      {children}
    </p>
  );
};

const HeroSection = Object.assign(HeroSectionComponent, {
  Root: HeroSectionComponent,
  Title,
  Description,
});

export default HeroSection;
