export default function Page() {
  return(
    <div className="flex h-max flex-col bg-white p-10 text-sm">
      <div className="font-bold text-4xl">Matthew Wills</div>
      <div className="pb-7">mattwillscode@gmail.com - github.com/mawills - linkedin.com/in/mawills/</div>
      <div className="grid grid-cols-3 gap-10">
        <div id="left-col" className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
          <section id="experience">
            <div className="font-bold text-2xl pb-4">experience</div>
            <section className="mb-3">
              <div className="flex justify-between items-end pb-2">
                <div className="text-xl font-bold">Rocket Mortgage - Software Engineer</div>
                <div className="text-slate-500">September 2020 - August 2023</div>
              </div>
              <div className="pb-2">Lead front-end developer on a team that is responsible for services that automate portions of the mortgage application process.</div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>Tech lead for numerous projects with direct client impact, such as reducing page load time on high-traffic pages by as much as 2 seconds and high-priority production bugs.</li>
                <li>Built many new features, such as an email referral service, a credit payment experience, and services to more easily allow clients to contact their banker and access loan information.</li>
                <li>Made contributions to an effort to migrate a legacy PHP frontend to a Typescript application built on Angular.</li>
                <li>Discovered and shared process improvements across engineering teams to increase productivity and increase visibility into development work for project managers.</li>
                <li>Mentor for new developers, and set up meetings with them to assist with onboarding and troubleshooting and to listen to their feedback about our processes and their career goals.</li>
              </ul>
            </section>
            <section className="mb-3">
              <div className="flex justify-between items-end pb-2">
                <div className="text-xl font-bold">Ford Motor Company - Contract Software Engineer</div>
                <div className="text-slate-500">March 2020 - July 2020</div>
              </div>
              <div className="pb-2">Developed the Ford self-help portals at https://help.ford.com/ and https://help.lincoln.com on a short-term contract. Team utilizes a metrics-driven approach to prioritization and a test-driven approach to development.</div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>Lead developer for two React applications, using Typescript and the Gatsby framework.</li>
                <li>Built the team&apos;s CI in Jenkins, including separate hosted environments for each pull request.</li>
                <li>Led several large code refactors to improve code quality and to take better advantage of Typescript.</li>
                <li>Implemented language internationalization and drove initiatives for other accessibility-related improvements.</li>
                <li>Pushed for improvements for security practices by setting up CI to securely inject secrets and creating unique API keys for different teams.</li>
                <li>Improved communication by creating a process for announcing breaking changes, setting up meetings with other team members to gather feedback, and creating Slack channels for closely-integrated teams.</li>
              </ul>
            </section>
            <section className="mb-3">
              <div className="flex justify-between items-end pb-2">
                <div className="text-xl font-bold">Barracuda Networks - Full Stack Software Engineer</div>
                <div className="text-slate-500">March 2018 - March 2020</div>
              </div>
              <div className="pb-2">Responsible for the maintenance of APIs for a database serving an average of 55k requests per minute, in addition to handling user authentication, a web portal, and a navigation wrapper used by customers and numerous development teams within the company.</div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>Built a microservice application for Oauth2 authorization, OpenID authentication, and session management on top of the Laravel framework.</li>
                <li>Refactored legacy PHP project into a React application with object-oriented code and a focus on keeping 100% test coverage.</li>
                <li>Tech stack also provided experience with migrating on-prem services to AWS, as well as Jenkins, Docker, MySQL, GraphQL, Microsoft Azure, SumoLogic, NewRelic, and Salesforce.</li>
              </ul>
            </section>

            <section className="mb-3">
              <div className="flex justify-between items-end pb-2">
                <div className="text-xl font-bold">HDS Marketing, Inc. - Web Developer</div>
                <div className="text-slate-500">February 2017 - February 2018</div>
              </div>
              <div className="pb-2">Develop and maintain applications and web stores for clients to distribute branded merchandise.</div>
              <ul className="list-inside list-disc space-y-1 pl-6">
                <li>Managed content through a proprietary platform and WordPress.</li>
                <li>Excelled in a small team environment with an emphasis on self-reliance.</li>
              </ul>
            </section>
          </section>
        </div>
        <div id="right-col" className="print:col-span-1 col-span-3 md:col-span-1">
          <section id="skills">
            <div className="font-bold text-2xl pb-4">skills</div>
            <section className="mb-1.5">
              <h3 className="text-gray-700">programming & languages</h3>
              <div className="my-2 last:pb-1.5">
                  <ul className="flex flex-wrap">
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
                </div>
              </section>
              <section className="mb-1.5">
                <h3 className="text-gray-700">libraries & frameworks</h3>
                <div className="my-2 last:pb-1.5">
                  <ul className="flex flex-wrap">
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
                </div>
              </section>
              <section className="mb-1.5">
                <h3 className="text-gray-700">tools & databases</h3>
                <div className="my-2 last:pb-1.5">
                  <ul className="flex flex-wrap">
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
                </div>
              </section>
              <section className="mb-1.5">
                <h3 className="text-gray-700">related skills</h3>
                <div className="my-2 last:pb-1.5">
                  <ul className="flex flex-wrap">
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
                </div>
              </section>
            <section id="education">
              <div className="font-bold text-2xl pb-4">education</div>
            </section>
            <section id="projects">
              <div className="font-bold text-2xl pb-4">projects</div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}