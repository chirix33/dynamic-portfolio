function ResearchCard({ paper }) {
  return (
    <article className="flex min-h-64 w-[85vw] max-w-sm shrink-0 snap-start flex-col rounded-lg border border-royal-palm-500/25 bg-white/30 p-8 shadow-sm backdrop-blur-sm transition hover:border-royal-palm-500/50 hover:shadow-md dark:border-cream-cheese-50/20 dark:bg-gray-800/30 dark:hover:border-cream-cheese-50/40 sm:w-80">
      <h3 className="text-lg font-bold text-slate-800 dark:text-cream-cheese-50">
        {paper.title}
      </h3>
      <p className="mt-4 grow text-sm leading-6 text-slate-700 dark:text-cream-cheese-100">
        {paper.description}
      </p>
      <a
        href={paper.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${paper.title}`}
        className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-royal-palm-700 transition hover:text-royal-palm-500 dark:text-cream-cheese-50 dark:hover:text-royal-palm-300"
      >
        Read paper
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="none"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </article>
  );
}

export default ResearchCard;
