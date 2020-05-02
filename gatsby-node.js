const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Data
  const { createPage } = actions;
  const result = await graphql(`
    query PagesSlugsQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  // ! ERRORS
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // * Create Pages.
  const pages = result.data.allMdx.nodes;

  // * Generate Pages
  pages.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: { id: node.id },
    });
  });
};
