import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Canvas({ data }) {
  return (
    <Layout>
      <SEO title={data.contentfulCanvasDocs.title} />
      <div className="p-5">
        <h2>{data.contentfulCanvasDocs.title}</h2>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query canvasQuery($slug: String!) {
    contentfulCanvasDocs(slug: { eq: $slug }) {
      title
    }
  }
`;

export default Canvas;
