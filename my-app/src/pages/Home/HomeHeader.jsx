import React from "react";
import myImage from "../../assets/images/hind.jpg";
const HomeHeader = () => {
  return (
    <>
      <div className="container w-full flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center mx-auto">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-row items-center justify-center mt-4">
          <img src={myImage} alt="" className="h-[26rem] rounded-3xl w-full" />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 mx-32 my-10 sm:my-10 md:my-12 lg:my-20 w-3/4 sm:w-3/4 md:w-full lg:w-1/4">
          {" "}
          {/* Added lg:w-1/2 */}
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl relative sm:relative md:relative lg:absolute lg:top-[12rem] lg:left-[46rem] transform lg:-translate-x-1/2 lg:-translate-y-1/2 p-4 rounded-lg">
            Hi I'm Hind
          </h1>
          <div className="flex justify-start lg:justify-start">
            {/* Nested flex container */}
            <p className=" sm:mt-4 md:mt-12 lg:mt-24 text-left w-full ">
              {" "}
              {/* Added w-full and lg:w-1/2 */}A passionate software engineer
              and web developer with a keen interest in crafting visually
              stunning and user-friendly websites. With a strong foundation in
              programming and a creative eye for design, I thrive on the
              challenge of turning innovative ideas into interactive and
              attractive web experiences. Let's embark on a journey to build the
              web of tomorrow together!
            </p>
          </div>
          <button className="button aboutMeBtn mt-8"> More about me</button>
        </div>
      </div>
      <div className="flex flex-row justify-center text-center items-center ">
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
      </div>
    </>
  );
};

export default HomeHeader;
