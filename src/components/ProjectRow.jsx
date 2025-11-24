function ProjectRow({ project }) {
  return (
    <tr className="hover cursor-pointer hover:bg-royal-palm-100 dark:hover:bg-gray-600">
      <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-3 items-center justify-center">
            <img
              src={project.icon}
              alt={project.name}
              className="inline-block relative object-cover object-center rounded-full w-9 h-9"
            />
            <p className="block antialiased text-sm leading-normal text-blue-gray-900 dark:text-cream-cheese-50 font-normal">
              {project.name}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
        <div className="max-w-24 lg:max-w-full whitespace-wrap">
          <p className="antialiased text-sm leading-normal text-blue-gray-900 dark:text-cream-cheese-50 font-normal">
            {project.description}
          </p>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
        <div className="flex flex-col">
          <p className="block antialiased text-sm leading-normal text-blue-gray-900 dark:text-cream-cheese-50 font-normal">
            {project.tech_stack.join(', ')}
          </p>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
        <div className="w-max">
          <div
            className={`relative grid items-center font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md ${
              project.status.toLowerCase() === 'active'
                ? 'bg-purple-500/20 text-purple-600'
                : 'bg-green-500/20 text-green-600'
            }`}
            style={{ opacity: 1 }}
          >
            <span>{project.status}</span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          data-project={project.name}
          className="flex view-project relative align-middle select-none text-royal-palm-600 dark:text-white font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </td>
    </tr>
  );
}

export default ProjectRow;

