import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const { websiteSettingsJson } = useStaticQuery(graphql`
    query SiteSettingsQuery {
      websiteSettingsJson {
        sitename
        title_separator
        language
        site_url
        show_full_title
        menu_links {
          name
          link
        }
      }
    }
  `);

  return websiteSettingsJson;
};
