import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section Heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/user.jpg"}
              alt="Profile"
              width={700}
              height={700}
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
