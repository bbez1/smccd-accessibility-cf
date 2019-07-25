import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-200">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 max-w-5xl mx-auto px-4 py-8 md:p-8 w-full bg-white shadow-lg">
            {children}
          </main>

          <footer className="bg-blue-900">
            <div className="flex justify-between max-w-5xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                San Mateo County Community College District
              </p>
              <p className="text-white">
                <a href="https://smccd.edu">Back to SMCCCD Home</a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
