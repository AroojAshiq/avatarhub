import React from "react";
import { Formik } from "formik";
// import * as Yup from "yup";
import Name from "../../../assets/name.svg";
import Mail from "../../../assets/mail.svg";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-3xl h-full py-4  md:px-6 text-black-600 body-font flex justify-center items-center overflow-hidden">
      <div className="container flex justify-center items-center">
        <div className=" w-full flex justify-center items-center lg:flex-row flex-col space-y-8 3xl:space-x-32 2xl:space-x-2 gap-8 xl:ml-0 lg:ml-0 md:ml-0 ml-0">
          <div className="px-5 w-full rounded-lg flex justify-center items-center flex-col  relative overflow-hidden ">
            <Formik
              initialValues={{ name: "", email: "", text: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-full md:space-y-5 space-y-3"
                >
                  <div className="w-full md:space-y-2 space-y-1 h-[72px] p-2 flex flex-col">
                    <p className="font-normal md:text-lg text-base text-[#33333380]">
                      Your Name
                    </p>
                    <div className="flex justify-center items-center bg-white px-2 border border-[#866FA3] h-12 text-black dark:text-white w-full rounded-md">
                      <img src={Name} alt="" className="h-5 w-5" />
                      <input
                        id="name"
                        className="w-full h-11 border-none outline-none pl-2"
                        type="text"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="w-full md:space-y-2 space-y-1 h-[72px] p-2 flex flex-col">
                    <p className="font-normal md:text-lg text-base text-[#33333380]">
                      Mail
                    </p>
                    <div className="flex justify-center items-center bg-white px-2 border border-[#866FA3] h-12 text-black dark:text-white w-full rounded-md">
                      <img src={Mail} alt="" className="h-5 w-5" />
                      <input
                        id="email"
                        className="w-full h-11 border-none outline-none pl-2"
                        type="text"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="w-full space-y-2 h-36 p-2 ">
                    <p className="font-normal md:text-lg text-base text-[#33333380]">
                      Message
                    </p>
                    <div className="w-full h-full space-y-2 xl:mt-0 lg:mt-0 ">
                      <textarea
                        id="text"
                        placeholder="message"
                        className=" w-full h-full resize-none p-3 bg-white border border-[#866FA3] text-black rounded-md justify-start"
                        type="text"
                        {...formik.getFieldProps("text")}
                      />
                      {formik.touched.text && formik.errors.text ? (
                        <div className="text-red-500 ">
                          {formik.errors.text}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 flex lg:justify-start md:justify-start justify-center  ">
                    <button
                      type="submit"
                      className="h-14 mt-5 rounded-[38px] md:w-52 w-40 text-white transition-all duration-500 bg-gradient-to-br to-white via-[#007FFF] from-[#007FFF] bg-size-200 hover:bg-right-bottom"
                    >
                      <p className="font-normal md:text-lg text-base text-white">
                        Send Message
                      </p>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
