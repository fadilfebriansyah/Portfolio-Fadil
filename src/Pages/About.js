import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Project | Certificate | Publication
        </h1>
        {React.Children.toArray(
          workDetails.map(
            ({ Position, Link, Company, Location, Type, Duration }) => (
              <Work
                position=<a
                  href={Link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {Position}
                </a>
                // company={Company}
                // location={Location}
                type={Type}
                // duration={Duration}
              />
            )
          )
        )}
      </section>
    </main>
  );
}

export default About;