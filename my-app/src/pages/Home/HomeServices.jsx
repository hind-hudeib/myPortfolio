import React from "react";
import s1 from "../../assets/images/ser3.png";
import s2 from "../../assets/images/ser.png";
import s3 from "../../assets/images/ser2.png";

const HomeServices = () => {
  return (
    <>
      <section className="bg-[#fcbaad7c] mt-20">
        <div className="container flex flex-col items-center py-10 px-auto mx-auto">
          <div className="flex flex-row justify-center items-center mx-auto text-center">
            <h3 className="text-center">SERVICES</h3>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-row mt-12">
            <div className="flex flex-col justify-center items-center rounded-2xl bg-[#e0b8c763] mx-4 mt-4  sm:mt-4 md:mt-4 lg:mt-0 shadow-inner">
              <img src={s1} alt="" className="rounded-full h-20 w-20 my-4" />
              <h4 className="mx-10 my-8">Responsive Website Design</h4>
            </div>
            <div className="flex flex-col  justify-center items-center rounded-2xl bg-[#e0b8c763] mx-4  mt-4  sm:mt-4 md:mt-4 lg:mt-0 shadow-inner">
              <img src={s2} alt="" className="rounded-full h-20 w-20 my-4" />
              <h4 className="mx-10 my-8">Responsive Website Design</h4>
            </div>
            <div className="flex flex-col  justify-center items-center rounded-2xl bg-[#e0b8c763] mx-4  mt-4  sm:mt-4 md:mt-4 lg:mt-0 shadow-inner">
              <img src={s3} alt="" className="rounded-full h-20 w-20 my-4" />
              <h4 className="mx-10 my-8">Responsive Website Design</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center text-center items-center my-20 ">
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
        <div className="rounded-full h-3 w-3 bg-[#75697a50] mx-2"></div>
      </div>
    </>
  );
};

export default HomeServices;
