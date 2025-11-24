function Bio() {
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
          I'm <span className="text-tuscan-clay pb-px border-b-4 border-tuscan-clay">Ashraf</span>,
        </h1>
        <h1 className="text-2xl lg:text-4xl lumanosimo-regular mb-4">
          a Full Stack Software Engineer.
        </h1>
        <p>I build web applications using modern technologies and tools.</p>
        <p>
          My Tech Stack experience includes:{' '}
          <span className="font-bold">
            React, NextJS, Node.js, Express, .NET, PHP, MySQL, and PostgreSQL.
          </span>{' '}
          I love photography and anime!
        </p>
      </div>
    </section>
  );
}

export default Bio;

