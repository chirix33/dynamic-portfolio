import ResearchCard from './ResearchCard';
import researchData from '../data/research.json';

function handleWheel(event) {
  const scroller = event.currentTarget;
  const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
  const canScrollInDirection =
    (event.deltaY > 0 && scroller.scrollLeft < maxScrollLeft) ||
    (event.deltaY < 0 && scroller.scrollLeft > 0);

  if (!canScrollInDirection) return;

  event.preventDefault();
  scroller.scrollBy({ left: event.deltaY, behavior: 'smooth' });
}

function Research() {
  const papers = researchData.papers || [];
  const howIBuild = researchData.how_i_build || [];

  return (
    <section
      id="research"
      className="px-8 lg:px-20 py-8 flex flex-col mx-auto gap-4 justify-center items-start min-h-40 mt-6 mb-6"
    >
      <h2 id="research-heading" className="lumanosimo-regular text-2xl">
        Research
      </h2>
      <div
        role="region"
        aria-labelledby="research-heading"
        tabIndex={0}
        onWheel={handleWheel}
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal-palm-500"
      >
        {papers.map((paper) => (
          <ResearchCard key={paper.link} paper={paper} />
        ))}
      </div>
      {howIBuild.length > 0 && (
        <div className="w-full mt-4">
          <h3 className="text-lg font-bold">How I build</h3>
          <ul className="mt-4 pl-6 list-disc text-sm leading-6">
            {howIBuild.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Research;
