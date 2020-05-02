import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const {
    allMetadataJson: { nodes },
  } = useStaticQuery(graphql`
    query MetadataQuery {
      allMetadataJson {
        nodes {
          name
          content
          property
        }
      }
    }
  `);

  return nodes;
};
