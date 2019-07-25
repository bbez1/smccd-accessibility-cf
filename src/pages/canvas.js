import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const CanvasPage = ({ data }) => {
  const canvasPages = data.allContentfulCanvasDocs.edges;
  return (
    <Layout>
      <SEO
        title="Canvas"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section>
        <div
          className="bg-cover bg-center bg-local w-full h-64"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')`
          }}
        ></div>
        <div className="flex w-full">
          <aside className="mt-5 w-1/5">
            <nav className="bg-gray-100">
              {canvasPages.map(({ node }) => (
                <ul className="side-navigation ml-auto">
                  <li
                    className="w-28 block border-blue-100 border-2 leading-loose"
                    key={node.id}
                  >
                    <a className="ml-2 text-blue-500 block" href={node.slug}>
                      {node.title}
                    </a>
                  </li>
                </ul>
              ))}
            </nav>
          </aside>
          <article className="w-4/5 p-5">
            <h2>Canvas Accessibility Guide</h2>
            <p>
              A brief walkthrough of best practices when creating accessible
              pages in Canvas Learning Management System (LMS).
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulCanvasDocs {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default CanvasPage;
