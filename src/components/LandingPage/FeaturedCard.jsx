import React from 'react'

const FeaturedCard = ({ imageSrc }) => {
  return (
    <div className="w-full  flex justify-center items-center ">
    <div className=" bg-[#AA53C6] bg-opacity-40 xl:w-[380px] lg:w-[410px] lg:h-[348px] w-[300px] h-[360px] p-4 md:mt-8 rounded-lg   hover:bg-[#007FFF] text-white flex flex-col justify-center items-center shadow-lg  ease-out hover:translate-y-[-5px] transition-all">
    
            
            <div className=" rounded-lg flex   justify-center p-2 items-center   ">
              <div className="w-24 h-24  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover rounded-xl  h-full object-center block"
                  src={imageSrc}
                />
              </div>
            </div>
      
            
            <div className="w-full  ">
            
              <p className=" text-white dark:text-[#959CB1] text-lg font-normal leading-7 p-7 text-center ">
              I'd be happy to help you create content for Canva! However, please provide more specific details.
              </p>

              <a
                href="#!"
                className="text-primary flex text-lg justify-center text-white font-normal leading-5  transition  duration-150 ease-in-out hover:text-primary-600  "
              >
                Read More
              </a>
            </div>
          </div>
          
          </div>
  )
}

export default FeaturedCard


