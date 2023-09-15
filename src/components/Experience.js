import userData from "@/constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-black pb-24">
      <div className="max-w-6xl mx-auto h-24 md:h-40 bg-white dark:bg-black">
        <h1 className="text-3xl md:text-6xl font-bold md:py-20 text-center text-[#C88A57] pt-8">
          Experience
        </h1>
      </div>
      <div className="grid grid-cols-1 dark:bg-black max-w-xl mx-auto md:py-20">
        {userData.experience.map((exp, idx) => (
          <>
            <ExperienceCard
              key={idx}
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === userData.experience.length - 1 ? null : (
              <div className="flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-[#C88A57] rounded-full relative z-10">
                  <div className="w-4 h-4 bg-[#C88A57] rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="border p-4 rounded-md shadow-xl bg-white  mx-4">
      <h1 className="text-center text-3xl dark:text-black font-bold pb-6">
        {year}
      </h1>
      <h1 className="font-semibold text-xl dark:text-black">{title}</h1>
      <p className="text-gray-500">{company}</p>
      <p className="text-gray-600 my-2">{desc}</p>
    </div>
  );
};
