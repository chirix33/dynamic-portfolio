function ExperienceCard({ experience }) {
  return (
    <div className="experience-card cursor-pointer hover:shadow-md p-8 rounded-lg w-full text-slate-800 bg-gradient-to-r from-cream-cheese-100 to-cream-cheese-200 dark:from-gray-500 dark:to-gray-700 dark:text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{experience.company}</h3>
        <span className="date text-gray-800 dark:text-white text-sm">
          {experience.start_date} - {experience.end_date}
        </span>
      </div>
      <p className="font-bold">{experience.position}</p>
    </div>
  );
}

export default ExperienceCard;

