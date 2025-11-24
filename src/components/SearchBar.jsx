function SearchBar({ value, onChange }) {
  return (
    <input
      id="search"
      type="text"
      placeholder="Search by Name/Tech Stack"
      aria-label="Search my Projects"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="basis-full w-full lg:basis-1/4 outline-none block border-2 border-royal-palm-500 rounded-md pl-6 py-2 text-sm dark:text-slate-900"
    />
  );
}

export default SearchBar;

