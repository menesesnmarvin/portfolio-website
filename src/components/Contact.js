import React from "react";
import userData from "@/constants/data";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-black md:pb-24">
      <div className="max-w-6xl mx-auto h-24 md:h-40">
        <h1 className=" text-3xl md:text-6xl font-bold pt-8 md:py-20 text-center text-[#C88A57]">
          Contact
        </h1>
      </div>
      <div className="relative z-10 md:rounded-md md:shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center sm:text-left mb-24">
          <header>
            <h1 className="text-black dark:text-gray-50 font-semibold text-2xl">
              Get in touch.
            </h1>
            <p className="text-black text-base dark:text-gray-200 mt-2">
              I am available for freelance or full time positions. Contact me
              and {"let's"} talk. Feel free to send me an{" "}
              <a
                href={`mailto:${userData.email}`}
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-200 font-bold dark:text-gray-200"
              >
                email
              </a>{" "}
              or schedule a{" "}
              <a
                href="https://calendly.com/meneses-marvin-n"
                target="_blank"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                free consultation
              </a>{" "}
              with me.
            </p>
            <p className="mt-10">{userData.email}</p>
          </header>
        </div>
      </div>
    </section>
  );
}
