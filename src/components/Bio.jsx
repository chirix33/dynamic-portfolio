import emailData from '../data/email.json';
import CopyableEmail from './CopyableEmail';
import skillsData from '../data/skills.json';

function Bio() {
  const email = emailData.email || '';
  const skillGroups = skillsData.groups || [];
  const alsoSkills = skillsData.also || [];

  return (
    <section id="bio" className="px-8 lg:px-20 py-8 flex flex-col mx-auto lg:flex-row gap-4 justify-start items-center min-h-40 mt-6 mb-6">
      <div className="grow-0 basis-1/3 flex justify-center items-center mb-4 lg:mb-0">
        <img
          src="/images/my_photo.jpg"
          alt="A portrait of Ashraf"
          className="w-36 h-36 lg:h-60 lg:w-auto border border-2 lg:border-4 border-royal-palm-500 object-cover lg:object-contain rounded-full lg:rounded-md"
        />
      </div>
      <div className="grow text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl lumanosimo-regular mb-4">
          I'm <span className="text-tuscan-clay pb-px border-b-4 border-tuscan-clay">
            Ashraf <span className="whitespace-nowrap">Abdul-Muumin</span>
          </span>,
        </h1>
        <h1 className="text-2xl lg:text-4xl lumanosimo-regular mb-4">
          an AI Researcher & Software Engineer.
        </h1>
        <p>
          CS PhD student at the University of Alabama. My research is in Neurosymbolic AI and robotics. I also engineer the pipelines, APIs and deployments.
        </p>
        {/* <div className="mt-4">
          {skillGroups.map((group) => (
            <p key={group.name}>
              <span className="font-bold">{group.name}:</span> {group.items.join(', ')}
            </p>
          ))}
          {alsoSkills.length > 0 && <p>Also: {alsoSkills.join(', ')}</p>}
        </div> */}
        <p className="mt-4 text-sm">
          <span className="font-bold">Beyond research:</span> photography and anime.
        </p>
      </div>
    </section>
  );
}

export default Bio;

