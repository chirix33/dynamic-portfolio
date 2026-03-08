import ExperienceCard from './ExperienceCard';
import experienceData from '../data/experience.json';

function Experience() {
  const experiences = experienceData.experiences || [];

  return (
    <section
      id="experience"
      className="px-8 lg:px-20 py-8 flex flex-col mx-auto gap-4 justify-center items-start min-h-40 mt-6 mb-6"
    >
      <h2 className="lumanosimo-regular text-2xl">Experience</h2>
      <div
        role="region"
        aria-labelledby="experience"
        className="grow w-full lg:w-2/4 mt-4 mx-auto flex flex-col justify-center items-center gap-6"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
      <a
        aria-label="Download my resume"
        href="/src/data/ashraf_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition flex justify-center items-center gap-2 w-auto mx-auto mt-4 p-4 text-evil-forces-900 hover:text-white rounded-full border border-evil-forces-900 font-bold bg-white hover:bg-evil-forces-900 text-center text-sm dark:text-white dark:border-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path
            fillRule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
            clipRule="evenodd"
          />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
        My Resume
      </a>
    </section>
  );
}

export default Experience;

