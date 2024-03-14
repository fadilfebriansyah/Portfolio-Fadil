import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
    </article>
  );
}

export default Work;
