import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProjectsTable from './ProjectsTable';
import FeaturedProjectCard from './FeaturedProjectCard';
import projectsData from '../data/projects.json';

const allProjects = projectsData.projects || [];
const featuredProjects = allProjects.filter((project) => project.featured);
const earlierProjects = allProjects.filter((project) => !project.featured);

function Projects() {
  const [projects] = useState(earlierProjects);
  const [filteredProjects, setFilteredProjects] = useState(earlierProjects);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!searchValue.trim()) {
      setFilteredProjects(projects);
      return;
    }

    const searchLower = searchValue.toLowerCase();
    const filtered = projects.filter((project) => {
      const matchesDescription = project.description.toLowerCase().includes(searchLower);
      const matchesTechStack = project.tech_stack.join(' ').toLowerCase().includes(searchLower);
      const matchesName = project.name.toLowerCase().includes(searchLower);
      return matchesDescription || matchesTechStack || matchesName;
    });

    setFilteredProjects(filtered);
  }, [searchValue, projects]);

  return (
    <section
      id="projects"
      className="px-8 lg:px-20 py-8 flex flex-col mx-auto gap-4 justify-center items-start min-h-40 mt-6 mb-6"
    >
      <h2 id="projects-heading" className="lumanosimo-regular text-2xl">
        Projects
      </h2>
      <div
        role="region"
        aria-label="Featured projects"
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4"
      >
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
      <details className="w-full mt-4">
        <summary className="cursor-pointer text-lg font-bold">
          Earlier work ({earlierProjects.length})
        </summary>
        <div className="w-full flex justify-center items-center gap-4 flex-col lg:flex-row lg:justify-end lg:gap-0 mt-4">
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </div>
        <div className="grow w-full flex flex-col justify-center items-center gap-6">
          <ProjectsTable projects={filteredProjects} />
        </div>
      </details>
    </section>
  );
}

export default Projects;
