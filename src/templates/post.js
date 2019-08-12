import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Post({ data }) {
  return (
    <Layout>
      <SEO title={data.contentfulCanvasDocs.title} />
      <div className="p-5">
        <h2>{data.contentfulCanvasDocs.title}</h2>
      </div>
    </Layout>
  );
}

export default Post;

export const pageQuery = graphql`
  query canvasQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCanvasDocs(slug: { eq: $slug }) {
      title
    }
  }
`;
