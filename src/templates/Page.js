import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import { SEO, Layout } from './../components';

export default ({ data: { mdx } }) => (
  <Layout>
    <MDXProvider>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        keywords={mdx.frontmatter.keywords}
        image={mdx.frontmatter.image}
        socialDescription={mdx.frontmatter.socialDescription}
      />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
);

export const pageQuery = graphql`
  query BlogPagesQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        keywords
        image
        socialDescription
      }
    }
  }
`;
