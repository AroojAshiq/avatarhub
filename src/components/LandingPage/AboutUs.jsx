import React from "react";
import img1 from "../../assets/image 22.png";
import img2 from "../../assets/image 23.png";
import img3 from "../../assets/image 24.png";
import img4 from "../../assets/image 26.png";
const AboutUs = () => {
  return (
    <section className="md:px-14 px-7 py-10 text-black-600 body-font flex items-center relative z-0">
      <div className=" flex xl:flex-row w-full flex-col justify-between gap-12 choose container ">
        <div className="xl:order-first order-last justify-center w-full grid xl:grid-cols-3 md:grid-cols-3 sm:grid-col-1 2xl:gap-x-16 xl:gap-x-7 xl:gap-y-12 gap-y-5 lg:gap-x-16 lg:gap-y-20 md:gap-x-6 sm:gap-y-8">
          <div className=" flex justify-center items-center xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px] h-full rounded-2xl ">
            <div className="w-full text-[#E2F1FF] opacity-20 flex justify-center font-bold text-[180px] text-center leading-[210px] ">
              AI
            </div>
          </div>

          <div className=" xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px] h-full  rounded-2xl shadow-lg space-y-4">
            <div className="w-full h-full ">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={img1}
              />
            </div>
          </div>

          <div className="xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px]  rounded-2xl shadow-lg space-y-4">
            <div className="w-full h-full ">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={img2}
              />
            </div>
          </div>

          <div className="xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px] rounded-2xl shadow-lg space-y-4">
            <div className="w-full h-full ">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={img3}
              />
            </div>
          </div>

          <div className="xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px] rounded-2xl shadow-lg space-y-4">
            <div className="w-full h-full ">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={img4}
              />
            </div>
          </div>

          <div className="xl:w-[186px] xl:h-[186px] md:w-full md:h-full w-[186px]  rounded-2xl shadow-lg space-y-4">
            <div className="w-full h-full ">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={img4}
              />
            </div>
          </div>
        </div>

        <div className="w-full  flex  justify-center xl:items-start items-center  flex-col p-4 gap-6   ">
          <h3 className=" font-normal xl:text-lg text-xl leading-5 text-[#FFFFFF] opacity-50">
            About Us
          </h3>

          <h1 className="font-bold text-5xl leading-10 flex md:flex-row flex-col gap-2 text-white text-center">
            Digital
            <span className="text-5xl leading-10 font-bold text-[#007FFF]">
              AvatarHub
            </span>
          </h1>
          <p className="font-normal md:w-[600px] w-full xl:text-start text-center md:text-lg  text-sm leading-7 text-white">
            A brief description of your mission and vision, emphasizing
            connecting users to the best digital avatar providers
          </p>

          <div className="text-center md:p-5  p-3 w-40 md:h-16 h-12 rounded-full text-white transition-all duration-500 bg-gradient-to-br to-white via-[#007FFF] from-[#007FFF] bg-size-200 hover:bg-right-bottom">
            <p>Hover over me</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
