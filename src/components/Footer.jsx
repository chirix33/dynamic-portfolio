import emailData from '../data/email.json';

function Footer() {
  const email = emailData.email || '';

  return (
    <section>
      <footer className="min-h-40">
        <section className="px-8 lg:px-20 py-8" aria-labelledby="contact_email">
          <div className="flex justify-between items-center w-full my-8">
            <div id="contact_email">
              <h4 className="text-2xl dark:text-cream-cheese-50">Get In Touch</h4>
              {email && <p className="text-sm cursor-pointer dark:text-cream-cheese-50">{email}</p>}
            </div>
            <ul aria-label="Contact Links" className="list-style-none pl-0 flex flex-col gap-2">
              <a
                className="flex items-center"
                href="/src/data/ashraf_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  style={{ width: '16px', marginLeft: '4px', transform: 'translateY(1px)' }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/chirix33"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  style={{ width: '16px', marginLeft: '4px', transform: 'translateY(1px)' }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="flex items-center"
                href="https://www.github.com/chirix33"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  style={{ width: '16px', marginLeft: '4px', transform: 'translateY(1px)' }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
          <br />
          <div className="flex justify-between items-center w-full mt-8">
            <p className="dark:text-cream-cheese-50">Copyright &copy; 2024</p>
            <p className="dark:text-cream-cheese-50">
              <a href="https://www.iit.edu" className="dark:text-cream-cheese-50">Made at Illinois Tech</a> 🖤
            </p>
          </div>
        </section>
      </footer>
    </section>
  );
}

export default Footer;

