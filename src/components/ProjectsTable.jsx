import ProjectRow from './ProjectRow';

function ProjectsTable({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="p-6 overflow-auto w-full px-0">
        <p className="text-center text-xl text-gray-800 dark:text-cream-cheese-50">Not there... Yet!</p>
      </div>
    );
  }

  return (
    <div className="p-6 overflow-auto w-full px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              scope="col"
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800/50 p-4 transition-colors hover:bg-blue-gray-50 dark:hover:bg-gray-700"
            >
              <p className="antialiased text-sm text-blue-gray-900 dark:text-cream-cheese-50 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Project
              </p>
            </th>
            <th
              scope="col"
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800/50 p-4 transition-colors hover:bg-blue-gray-50 dark:hover:bg-gray-700"
            >
              <p className="antialiased text-sm text-blue-gray-900 dark:text-cream-cheese-50 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Description
              </p>
            </th>
            <th
              scope="col"
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800/50 p-4 transition-colors hover:bg-blue-gray-50 dark:hover:bg-gray-700"
            >
              <p className="antialiased text-sm text-blue-gray-900 dark:text-cream-cheese-50 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Tech Stack/Tools
              </p>
            </th>
            <th
              scope="col"
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800/50 p-4 transition-colors hover:bg-blue-gray-50 dark:hover:bg-gray-700"
            >
              <p className="antialiased text-sm text-blue-gray-900 dark:text-cream-cheese-50 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Status
              </p>
            </th>
            <th
              scope="col"
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800/50 p-4 transition-colors hover:bg-blue-gray-50 dark:hover:bg-gray-700"
            >
              <p className="antialiased text-sm text-blue-gray-900 dark:text-cream-cheese-50 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                View
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;

