export default function Page() {
  return(
    <div className="
          p-6
          mx-auto
          page
          max-w-6xl
          print:max-w-letter
          md:max-w-letter md:h-letter
          xsm:p-8
          sm:p-9
          md:p-16
          bg-white
          text-sm
        "
      >
      <div className="font-bold text-4xl">Matthew Wills</div>
      <div className="pb-7">
        <a
          href="mailto:contact@mwills.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sky-600 print:text-black"
        >
          contact@mwills.dev
        </a><span> - </span>
        <a
          href="https://github.com/mawills"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sky-600 print:text-black"
        >
          github.com/mawills
        </a><span> - </span>
        <a
          href="https://www.linkedin.com/in/mawills/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sky-600 print:text-black"
        >
          linkedin.com/in/mawills/
        </a>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div id="left-col" className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
          <section id="experience" className="mb-4">
            <div className="font-bold text-2xl pb-4">experience</div>
            <section className="mb-3">
              <div className="text-lg font-bold">Software Engineer @ Rocket Mortgage</div>
              <div className="text-slate-500 pb-2 text-xs">September 2020 - August 2023</div>
              <div className="pb-2">
                Lead front-end developer on a team that is responsible for services that automate portions of the
                mortgage application process.
              </div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>
                  Tech lead for numerous projects with direct client impact e.g. reducing page load time on
                  high-traffic pages ~2 seconds and trusted to resolve high-priority production bugs.
                </li>
                <li>
                  Built features using PHP, Angular, AWS, and CircleCI, such as a credit payment experience, an
                  email referral service, and services to automate work for bankers and for clients to more easily
                  access loan information.
                </li>
                <li>
                  Mentored new developers, assisted with onboarding and troubleshooting, and had regular meetings
                  to listen to their feedback and questions about our processes, code, and their career goals.
                </li>
              </ul>
            </section>
            <section className="mb-3">
              <div className="text-lg font-bold">Contract Software Engineer @ Ford Motor Company</div>
              <div className="text-slate-500 pb-2 text-xs">March 2020 - July 2020</div>
              <div className="pb-2">
                Lead developer for the Ford self-help portals at https://help.ford.com/ and
                https://help.lincoln.com on a short-term contract.
              </div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>
                  Refactored and built new features for two React applications, using Typescript, React, and the
                  Gatsby framework.
                </li>
                <li>
                  Built the CI / CD pipeline from scratch in Jenkins, including separate hosted environments for
                  each pull request. Improved security practices by setting up CI to securely inject secrets.
                </li>
                <li>
                  Implemented language internationalization (i18n) and drove initiatives for other
                  accessibility-related improvements.
                </li>
              </ul>
            </section>
            <section className="mb-3">
              <div className="text-lg font-bold">Full Stack Software Engineer @ Barracuda Networks</div>
              <div className="text-slate-500 pb-2 text-xs">March 2018 - March 2020</div>
              <div className="pb-2">
                Member of a team responsible for microservices including user authentication, a web portal for
                administration of Barracuda products, and a client-facing UI navigation wrapper used by development
                teams.
              </div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>
                  Responsible for REST & GraphQL APIs serving an average of 55k requests per minute, using AWS
                  (api gateway, load balancer), PHP, and MySQL.
                </li>
                <li>
                  Built a microservice application for Oauth2 authorization, OpenID authentication, and session
                  management on top of the Laravel framework.
                </li>
                <li>
                  Refactored legacy PHP frontend project into a React application with object-oriented code and a
                  focus on keeping 100% test coverage.
                </li>
                <li>
                  Tech stack also provided experience with migrating on-prem services to AWS, as well as Jenkins,
                  Docker, Microsoft Azure, SumoLogic, NewRelic, and Salesforce.
                </li>
              </ul>
            </section>
            <section className="mb-3">
              <div className="text-lg font-bold">Web Developer @ HDS Marketing, Inc.</div>
              <div className="text-slate-500 pb-2 text-xs">February 2017 - February 2018</div>
              <div className="pb-2">
                Developed and maintained applications and web stores for clients to distribute branded merchandise.
              </div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>Managed content through a proprietary platform and WordPress.</li>
                <li>Excelled in a small team environment with an emphasis on self-reliance.</li>
              </ul>
            </section>
          </section>
        </div>
        <div id="right-col" className="print:col-span-1 col-span-3 md:col-span-1">
          <section id="skills" className="mb-4">
            <header className="font-bold text-2xl pb-4">skills</header>
            <section className="mb-1.5">
              <div className="text-gray-700">programming & languages</div>
                <ul className="flex flex-wrap my-2 last:pb-1.5">
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Python
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    PHP
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    TypeScript
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    JavaScript (ES6+)
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Node
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    SQL
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    HTML
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    CSS/Sass/Tailwind
                  </li>
                </ul>
            </section>
            <section className="mb-1.5">
              <div className="text-gray-700">libraries & frameworks</div>
              <ul className="flex flex-wrap my-2 last:pb-1.5">
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  React
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Next.js
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Express
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Laravel
                </li>
              </ul>
            </section>
            <section className="mb-1.5">
              <div className="text-gray-700">tools & databases</div>
              <ul className="flex flex-wrap my-2 last:pb-1.5">
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Git
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Bash / Shell
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  CI / CD
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  AWS
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Docker
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  PostgresSQL
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  MySQL
                </li>
              </ul>
            </section>
            <section className="mb-1.5">
              <div className="text-gray-700">related skills</div>
                <ul className="flex flex-wrap my-2 last:pb-1.5">
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Agile (Scrum)
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Accessibility (WCAG)
                  </li>
                  <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Tech Lead
                  </li>
                </ul>
            </section>
          </section>
          <section id="projects" className="mb-4">
            <div className="font-bold text-2xl pb-4">projects</div>
            <section>
              <div className="font-bold">miniatures-site</div>
              <a
                href="https://github.com/mawills/miniatures-site"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-sky-600 print:text-black"
              >
                https://github.com/mawills/miniatures-site
              </a>
              <div>
                An API and SQL database for handling user authentication, password hashing, and session
                persistence with JWT tokens. Fully containerized in Docker with a CI/CD pipeline built in Github
                Actions.
              </div>
              <ul className="flex flex-wrap my-2 last:pb-1.5">
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Python
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  PostgresSQL
                </li>
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Docker
                </li>
              </ul>
            </section>
            <section>
              <div className="font-bold">40k-sim</div>
              <a
                href="https://github.com/mawills/40k-sim"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-sky-600 print:text-black"
              >
                https://github.com/mawills/40k-sim
              </a>
              <div>
                A damage simulator for the Warhammer 40k tabletop miniatures game. Utilizes Matplotlib for
                plotting data.
              </div>
              <ul className="flex flex-wrap my-2 last:pb-1.5">
                <li className="px-2.5 mr-1.5 mb-1.5 text-xs text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Python
                </li>
              </ul>
            </section>
          </section>
          <section id="education" className="mb-4">
            <div className="font-bold text-2xl pb-4">education</div>
            <ul>
              <li className="pb-2">
                <div>University of Michigan - Dearborn, Software Engineering</div>
                <div className="text-slate-500 text-xs">2015-2016</div>
              </li>
              <li>
                <div>Washtenaw Community College, Computer Science</div>
                <div className="text-slate-500 text-xs">2012-2015</div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
