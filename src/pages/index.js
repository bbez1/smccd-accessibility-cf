import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `san mateo`,
          `accessibility`,
          `college of san mateo`,
          `skyline`,
          `canada`
        ]}
      />
      <section>
        <h2 className="text-4xl mb-2">Web Accessibility Statement</h2>
        <p>
          The San Mateo County Community College District, comprised of Cañada
          College, College of San Mateo and Skyline College is committed to
          supporting a diverse community that includes students with
          disabilities and making its websites accessible to the broadest
          possible audience. We strive to meet or exceed the Web Content
          Accessibility Guidelines (WCAG 2.0/2.1) established by the World Wide
          Web Consortium (W3C).
        </p>
        <p className="mt-5 p-3 bg-gray-100 border-gray-400 border-2 rounded">
          We believe a person with a disability must be able to acquire the same
          information, engage in the same interactions, and enjoy the same
          services as a person without a disability, and be able to do so in an
          equally effective manner, with substantially equivalent ease of use.
          Information and services must be made available at the same time to a
          person with a disability as to a person without a disability.
        </p>
      </section>
      <section>
        <h2>Report an Accessibility Issue</h2>
        <p>
          Use the following web forms to report an accessibility error on our
          sites.
        </p>
        <ul className="flex flex-col md:flex-row justify-between items-center">
          <li className="flex-grow bg-green-700 hover:bg-green-800 text-white p-3 m-2 rounded hover:shadow-outline text-center self-stretch">
            <a
              className="block"
              href="https://smccd-czqfp.formstack.com/forms/canada_accessibility_report"
            >
              <strong>Cañada College</strong>
              <br />
              Report Accessibility Issue
            </a>
          </li>
          <li className="flex-grow bg-blue-700 hover:bg-blue-800 text-white p-3 m-2 rounded hover:shadow-outline text-center self-stretch">
            <a
              className="block"
              href="https://smccd-czqfp.formstack.com/forms/csm_accessibility_report"
            >
              <strong>College of San Mateo</strong> <br />
              Report Accessibility Issue
            </a>
          </li>
          <li className="flex-grow bg-red-700 hover:bg-red-800 text-white p-3 m-2 rounded hover:shadow-outline text-center self-stretch">
            <a
              className="block"
              href="https://smccd-czqfp.formstack.com/forms/skyline_accessibility_report"
            >
              <strong>Skyline College</strong> <br />
              Report Accessibility Issue
            </a>
          </li>
          <li className="flex-grow bg-blue-800 hover:bg-blue-900 text-white p-3 m-2 rounded hover:shadow-outline text-center self-stretch">
            <a
              className="block"
              href="https://smccd-czqfp.formstack.com/forms/do_accessibility_report"
            >
              <strong>District Office</strong> <br />
              Report Accessibility Issue
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Accomodations</h2>
        <h3>Students</h3>
        <p>
          <strong>Students</strong> who need accommodations for coursework
          should contact our Disability Resource Centers
        </p>
        <ul className="flex flex-col md:flex-row justify-between">
          <li className="flex-grow bg-green-700 hover:bg-green-800 text-white p-3 m-2 rounded hover:shadow-outline text-center">
            <a
              className="block"
              href="https://canadacollege.edu/disabilityresourcecenter/index.php"
            >
              <strong>Cañada College</strong>
              <br />
              Disability Resource Center
            </a>
          </li>
          <li className="flex-grow bg-blue-700 hover:bg-blue-800 text-white p-3 m-2 rounded hover:shadow-outline text-center">
            <a className="block" href="https://collegeofsanmateo.edu/dsps/">
              <strong>College of San Mateo</strong> <br />
              Disability Resource Center
            </a>
          </li>
          <li className="flex-grow bg-red-700 hover:bg-red-800 text-white p-3 m-2 rounded hover:shadow-outline text-center">
            <a
              className="block"
              href="https://www.skylinecollege.edu/disabilityresources/index.php"
            >
              <strong>Skyline College</strong> <br />
              Disability Resource Center
            </a>
          </li>
        </ul>
        <h3>Faculty/Staff</h3>
        <p>
          <strong>Faculty</strong> or staff who need accommodations for their
          students should contact their College Instructional Technologist. Each
          college has a center that provides training and assistance to faculty
          members to ensure that their use of classroom technology and course
          materials are accessible to all learners.
        </p>
        <ul className="flex flex-col md:flex-row justify-between">
          <li className="flex-grow bg-green-700 text-white p-3 m-2 rounded hover:shadow-outline hover:bg-green-800 text-center">
            <a className="block" href="https://www.canadacollege.edu/cietl/">
              <strong>Cañada College</strong>
              <br />
              Center for Innovation and Excellence in Teaching and Learning
              (CIETL)
            </a>
          </li>
          <li className="flex-grow bg-blue-700 hover:bg-blue-800 text-white p-3 m-2 rounded hover:shadow-outline text-center">
            <a className="block" href="https://www.collegeofsanmateo.edu/cae/">
              <strong>College of San Mateo</strong> <br />
              Center for Academic Excellence (CAE)
            </a>
          </li>
          <li className="flex-grow bg-red-700  hover:bg-red-800 text-white p-3 m-2 rounded hover:shadow-outline text-center">
            <a className="block" href="https://www.skylinecollege.edu/cttl/">
              <strong>Skyline College</strong> <br />
              Center for Transformative Teaching and Learning (CTTL)
            </a>
          </li>
        </ul>
        <h3>Visitors</h3>
        <p>
          <strong>Visitors</strong> who need accommodations should contact the
          person, department or organization sponsoring the event.
        </p>
      </section>
      <section>
        <h2>Accessible Technology</h2>
        <p>
          To help ensure the accessibility of information and technology, the
          San Mateo County Community College District has launched an
          accessibility initiative. The{" "}
          <strong>Web Accessibility Task Force</strong> meets bi-monthly to
          discuss web accessibility issues.
        </p>
        <div className="mt-3 bg-gray-100 border-gray-400 border-2 p-3 rounded">
          <h3 className="text-center text-gray-700">
            Web Accessibility Task Force Members, 2019-20
          </h3>
          <div className="flex flex-col items-stretch">
            <div className="campus-theme-box border-blue-200 border-2 inline-block">
              <h4 className="district-staff">
                District Office Representatives
              </h4>
              <ul className="pl-5 list-disc">
                <li>
                  <span className="district-staff">Jasmine Robinson</span>,{" "}
                  <span className="position-name">
                    Director of Web Services (ITS)
                  </span>
                </li>
                <li>
                  <span className="district-staff">Chris Smith</span>,{" "}
                  <span className="position-name">
                    Web Support Analyst (ITS)
                  </span>
                </li>
                <li>
                  <span className="district-staff">Aung Linn</span>,{" "}
                  <span className="position-name">
                    Senior Programmer I (ITS)
                  </span>
                </li>
                <li>
                  <span className="district-staff">Bryan Besnyi</span>,{" "}
                  <span className="position-name">
                    Web Accessibility Programmer (ITS)
                  </span>
                </li>
              </ul>
            </div>
            <div className="campus-theme-box border-green-200 border-2 inline-block">
              <h4 className="canada-staff">Cañada College Representatives</h4>
              <ul className="pl-5 list-disc">
                <li>
                  <span className="canada-staff">Max Hartman</span>,{" "}
                  <span className="position-name">Dean, Counseling</span>
                </li>
                <li>
                  <span className="canada-staff">Megan Rodriguez Antone</span>,{" "}
                  <span className="position-name">
                    Director, Community Relations and Marketing
                  </span>
                </li>
                <li>
                  <span className="canada-staff">Michael Ryan</span>,{" "}
                  <span className="position-name">Web Programmer Analyst</span>
                </li>
                <li>
                  <span className="canada-staff">Jose Garcia</span>,{" "}
                  <span className="position-name">
                    Visual Communications Coordinator
                  </span>
                </li>
              </ul>
            </div>
            <div className="campus-theme-box border-blue-200 border-2 inline-block">
              <h4 className="csm-staff">
                College of San Mateo Representatives
              </h4>
              <ul className="pl-5 list-disc">
                <li>
                  <span className="csm-staff">Valerie Tyler</span>,{" "}
                  <span className="position-name">Web Programmer Analyst</span>
                </li>
                <li>
                  <span className="csm-staff">Erica Reynolds</span>,{" "}
                  <span className="position-name">
                    Instructional Technologist
                  </span>
                </li>
                <li>
                  <span className="csm-staff">Carol Newkirk-Sakaguchi</span>,{" "}
                  <span className="position-name">Director, DRC</span>
                </li>
                <li>
                  <span className="csm-staff">Judy Lariviere</span>,{" "}
                  <span className="position-name">
                    Assistive Technology Computer Specialist
                  </span>
                </li>
                <li>
                  <span className="csm-staff">Stephanie Roach</span>,{" "}
                  <span className="position-name">
                    Librarian, Cataloging (Online and Digital Resources)
                  </span>
                </li>
              </ul>
            </div>
            <div className="campus-theme-box border-red-200 border-2 inline-block">
              <h4 className="skyline-staff">Skyline College Representatives</h4>
              <ul className="pl-5 list-disc">
                <li>
                  <span className="skyline-staff">Soe Hlaing</span>,{" "}
                  <span className="position-name">Web Programmer Analyst</span>
                </li>
                <li>
                  <span className="skyline-staff">Christopher Weidman</span>,{" "}
                  <span className="position-name">
                    Instructional Aide II, ASLT
                  </span>
                </li>
                <li>
                  <span className="skyline-staff">Kim Saccio-Kent</span>,{" "}
                  <span className="position-name">
                    Professor/Counselor, DRC
                  </span>
                </li>
                <li>
                  <span className="skyline-staff">Cherie Colin</span>,{" "}
                  <span className="position-name">
                    Director, Marketing, Communications and Public Relations
                  </span>
                </li>
                <li>
                  <span className="skyline-staff">Connor Fitzpatrick</span>,{" "}
                  <span className="position-name">
                    Promotions and Website Content Coordinator
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Accessibility References</h2>
        <ul className="pl-5">
          <li>
            <a
              className="link"
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            >
              World Wide Web Consortium Accessibility Guidelines
            </a>
          </li>
          <li>
            <a className="link" href="http://www.section508.gov/">
              U.S. Federal Government Section 508 accessibility guidelines.
            </a>
          </li>
          <li>
            <a className="link" href="https://www.w3.org/">
              World Wide Web Consortium (W3C)
            </a>
          </li>
        </ul>
        <h2>Assistive Technology</h2>
        <h3>Screen Readers</h3>
        <ul className="pl-5">
          <li>
            <a
              className="link"
              href="http://www.freedomscientific.com/Downloads/JAWS"
            >
              JAWS
            </a>
          </li>
          <li>
            <a
              className="link"
              href="http://www.apple.com/accessibility/mac/vision/"
            >
              VoiceOver
            </a>
          </li>
          <li>
            <a className="link" href="https://www.nvaccess.org/download/">
              NVDA
            </a>
          </li>
        </ul>
        <h3>Dictation Software</h3>
        <ul className="pl-5">
          <li>
            <a className="link" href="https://www.nuance.com/dragon.html">
              Dragon
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default IndexPage;
