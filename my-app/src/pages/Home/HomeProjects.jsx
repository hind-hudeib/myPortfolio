import React from "react";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

const HomeProjects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="">
      <div className="mx-auto container bg-[#ffffff9f] flex flex-col justify-center items-center px-24 py-10 mt-24 z-10">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-center">SOME RECENT PROJECTS</h2>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row mt-4">
          {/* *************** */}
          <div className="block relative rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-8">
            <a href="#!">
              <div className="relative lg:transition-transform lg:duration-500 lg:transform lg:scale-300 lg:hover:scale-105 ">
                <img className="rounded-t-lg h-60 w-80" src={p1} alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#78719783] text-white rounded-t-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              </div>
              {isSmallScreen && (
                <div className="text-center p-2 bg-[#787197ad] text-white">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              )}
            </a>
          </div>
          {/* *************** */}
          <div className="block relative rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-8">
            <a href="#!">
              <div className="relative lg:transition-transform lg:duration-500 lg:transform lg:scale-300 lg:hover:scale-105 ">
                <img className="rounded-t-lg h-60 w-80" src={p2} alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#78719783] text-white rounded-t-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              </div>
              {isSmallScreen && (
                <div className="text-center p-2 bg-[#787197ad] text-white">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              )}
            </a>
          </div>
          {/* *************** */}
          <div className="block relative rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-8">
            <a href="#!">
              <div className="relative lg:transition-transform lg:duration-500 lg:transform lg:scale-300 lg:hover:scale-105 ">
                <img className="rounded-t-lg h-60 w-80" src={p3} alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#78719783] text-white rounded-t-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              </div>
              {isSmallScreen && (
                <div className="text-center p-2 bg-[#787197ad] text-white">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6" />
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
