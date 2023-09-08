import React from "react";
import Navbar from "../navbar/Navbar";
import Picture from "../../../assets/groupwave.svg";
import BackColor from "../../../assets/background.svg";
import Person1 from "../../../assets/person1.png";
import Person2 from "../../../assets/person2.png";
import Person3 from "../../../assets/person3.png";
import Person4 from "../../../assets/person4.png";
import Person5 from "../../../assets/person5.png";
import Person6 from "../../../assets/person6.png";
import Person7 from "../../../assets/person7.png";

export default function HeroSection() {
  return (
    <section className="bg-[#14003B] ">
      <div className=" xl:h-[900px] lg:h-[1100px] md:h-[1050px] h-[1800px] relative">
        <div className="absolute z-10 w-full">
          <Navbar />
        </div>

        <div className="w-full hidden absolute h-full xl:flex justify-end">
          <img src={Picture} alt="draw" className="h-full" />
        </div>

        <div className="w-full absolute h-full flex justify-start">
          <img src={BackColor} alt="draw" className="h-full" />
        </div>

        <div className="absolute flex xl:flex-row justify-between flex-col md:h-[590px] h-auto items-center space-y-10 xl:space-x-3 xl:top-28 top-32  w-full md:px-14 px-7">
          <div className=" flex xl:justify-center xl:items-start items-center flex-col space-y-2 md:h-96 xl:w-1/2">
            <h1 className="md:text-6xl text-3xl font-bold text-white lg:leading-[86px]">
              Welcome To
            </h1>
            <h1 className="md:text-6xl text-3xl whitespace-nowrap font-bold text-[#007FFF] lg:leading-[86px]">
              Digital AvatarHub
            </h1>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              Discover top companies offering cutting-edge digital avatar
              solutions
            </p>
            <button className="h-14 mt-2 rounded-[38px] md:w-52 w-40 text-white transition-all duration-500 bg-gradient-to-br to-white via-[#007FFF] from-[#007FFF] bg-size-200 hover:bg-right-bottom">
              <p className="font-normal text-lg text-white">Explore Now</p>
            </button>
          </div>

          <div className="h-full items-center md:flex-row flex-col md:space-y-0 space-y-3 md:space-x-3 flex ">
            <div className="flex flex-col justify-center  space-y-3 h-auto">
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person1}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person2}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
            </div>

            <div className="flex flex-col  space-y-3 h-auto">
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person3}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person4}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person5}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center  space-y-3 h-auto">
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person6}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="h-[186px] w-[186px]">
                <img
                  src={Person7}
                  alt="person1"
                  className="w-full h-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
