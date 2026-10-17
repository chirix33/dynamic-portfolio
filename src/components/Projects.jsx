import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProjectsTable from './ProjectsTable';
import projectsData from '../data/projects.json';

function Projects() {
  const [projects] = useState(projectsData.projects || []);
  const [filteredProjects, setFilteredProjects] = useState(projectsData.projects || []);
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
      <div className="w-full flex justify-center items-center gap-4 flex-col lg:flex-row lg:justify-between lg:gap-0">
        <h2 className="lumanosimo-regular text-2xl">Projects</h2>
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </div>
      <div className="grow w-full flex flex-col justify-center items-center gap-6">
        <ProjectsTable projects={filteredProjects} />
      </div>
    </section>
  );
}

export default Projects;

