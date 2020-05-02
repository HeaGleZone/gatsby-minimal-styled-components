import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadataQuery from './../../queries/useSiteMetadataQuery';
import useSiteSettingsQuery from './../../queries/useSiteSettingsQuery';

const SEO = ({
  title,
  description,
  socialDescription,
  image,
  keywords,
  extraMeta,
}) => {
  const metadata = useSiteMetadataQuery();
  const {
    sitename,
    language: lang,
    title_separator,
    show_full_title,
  } = useSiteSettingsQuery();

  const getTitle = () => {
    if (title) {
      if (show_full_title) {
        return `${title} ${title_separator} ${sitename}`;
      } else {
        return title;
      }
    }

    return sitename;
  };

  const getMetadata = () => {
    const metadataNodes = [];

    metadata.forEach(meta => {
      if (meta.content) {
        // Remove NULL properties
        if (meta.name == null) delete meta.name;
        if (meta.property == null) delete meta.property;

        // Replace with custom properties
        if (
          description &&
          (meta.name === 'description' ||
            meta.property === 'og:description' ||
            meta.name === 'twitter:description')
        )
          meta.content = description;

        if (
          socialDescription &&
          (meta.property === 'og:description' ||
            meta.name === 'twitter:description')
        )
          meta.content = socialDescription;

        if (
          image &&
          (meta.property === 'og:image' || meta.name === 'twitter:image')
        )
          meta.content = image;

        if (keywords && meta.name === 'keywords') meta.content = keywords;

        // Push Parsed data
        metadataNodes.push(meta);
      }
    });

    return metadataNodes;
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={getTitle()}
      meta={getMetadata().concat(extraMeta)}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  socialDescription: PropTypes.string,
  extraMeta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  extraMeta: [],
};

export default SEO;
