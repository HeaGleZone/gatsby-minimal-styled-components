import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const { colorSchemaJson } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      colorSchemaJson {
        primary
        secondary
        tertiary
        background_primary
        background_secondary
      }
    }
  `);

  return colorSchemaJson;
};
