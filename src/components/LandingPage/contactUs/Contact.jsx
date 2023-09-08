import React from "react";
import Call from "../../../assets/call.svg";
import Msg from "../../../assets/msg.svg";
import Location from "../../../assets/location.svg";
import FaceBook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";
import Insta from "../../../assets/insta.svg";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-[#14003B] xl:h-screen h-auto py-5 flex justify-center items-center md:px-14 px-7">
      <div className="md:px-10 px-7 pb-6 w-full lg:gap-x-5 flex lg:flex-row flex-col lg:h-[650px] bg-[#007FFF] rounded-3xl">
        <div className="lg:w-1/2 w-full lg:space-y-0 space-y-4 h-full md:py-12 pb-6 pt-10 flex flex-col justify-between">
          <div className="space-y-2 items-center md:flex flex-col lg:block">
            <p className="font-normal md:text-lg text-base lg:text-left text-center text-white">
              Contact Us
            </p>
            <h1 className="font-bold text-4xl lg:text-left text-center text-white">
              Get In Touch
            </h1>
            <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
              Fill up form and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="lg:-mt-14 items-center md:flex flex-col lg:block">
            <div className="flex px-2 h-14 lg:w-60 gap-x-5 lg:justify-start justify-center items-center rounded-lg hover:bg-[#2F96FF]">
              <img src={Call} alt="call" className="h-6 w-6" />
              <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
                +123 458 6215
              </p>
            </div>

            <div className="flex px-2 h-14 lg:w-60 gap-x-5 lg:justify-start justify-center items-center rounded-lg hover:bg-[#2F96FF]">
              <img src={Msg} alt="call" className="h-6 w-6" />
              <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
                abcd@email.com
              </p>
            </div>
            <div className="flex px-2 h-14 lg:w-64 gap-x-5 lg:justify-start justify-center items-center rounded-lg hover:bg-[#2F96FF]">
              <img src={Location} alt="call" className="h-6 w-6" />
              <p className="font-normal md:text-lg text-base md:text-left text-center text-white">
                1202 Street 27145 Town
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 justify-center lg:justify-start items-center">
            <div className="flex md:h-14 h-10 w-10 md:w-14 justify-center items-center rounded-full hover:bg-[#2F96FF]">
              <img
                src={FaceBook}
                alt="call"
                className="md:h-9 md:w-9 w-6 h-6"
              />
            </div>
            <div className="flex md:h-14 h-10 w-10 md:w-14 justify-center items-center rounded-full hover:bg-[#2F96FF]">
              <img src={Twitter} alt="call" className="md:h-9 md:w-9 w-6 h-6" />
            </div>
            <div className="flex md:h-14 h-10 w-10 md:w-14 justify-center items-center rounded-full hover:bg-[#2F96FF]">
              <img src={Insta} alt="call" className="md:h-9 md:w-9 w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full md:py-5 lg:py-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
