'use client';
import React from 'react';
import userData from '@/constants/data';

export default function Projects() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-black px-4">
      <div className="max-w-6xl mx-auto md:h-40 h-24">
        <h1 className="text-3xl md:text-6xl font-bold md:py-20 pt-8 text-center text-[#C88A57]">
          Projects
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:py-20 pb-20 md:pb-40">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            key={`${idx + 1}`}
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl dark:text-gray-50 text-black font-semibold">
        {title}
      </h1>
      <a href={link} className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="md:h-72 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
        </div>
      </a>
    </div>
  );
};
