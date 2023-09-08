import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCard from "./FeaturedCard";

import featured1 from "../../assets/Mask group.svg";
import featured2 from "../../assets/Vector.svg";
import featured3 from "../../assets/Mask PS.svg";


const Featured = () => {
  const [carousel, setCarousel] = useState(null);
  console.log(carousel)
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1280 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },

    laptop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };



  return (
    <section className="bg-[#14003B] h-full w-full  md:px-14 px-7  text-black-600 body-font flex justify-center items-center gap-4 relative z-0 ">
     

      <div className="choose flex flex-col container md:py-20 py-8 gap-8">
        <div className="flex flex-col items-center w-full  gap-[16px]  ">
          <h1 className=" px-6 xl:text-5xl md:text-3xl text-2xl  md:leading-[56px] font-bold title-font md:mb-2 text-white ">
          Featured Companies
          </h1>
          <p className="md:text-lg text-sm font-normal leadig-7 xl:px-0 px-12 text-center text-white"> Each with a summarization of the company, including a clickable link and an image that relates to the company</p>
        </div>

        <Carousel
          ref={(el) => setCarousel(el)}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1 relative pb-10  "
          removeArrowOnDeviceType={[]}
        >
          <FeaturedCard imageSrc={featured1}   />
          <FeaturedCard imageSrc={featured2} />
          <FeaturedCard imageSrc={featured3} />
        </Carousel>
      </div>
    
    </section>
  );
};

export default Featured;
