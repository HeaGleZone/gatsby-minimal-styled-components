import React from 'react';
import { Link } from 'gatsby';

import { FooterStyled } from './styles';

import useSiteSettingsQuery from './../../queries/useSiteSettingsQuery';

const Footer = () => {
  const { sitename } = useSiteSettingsQuery();

  return (
    <FooterStyled>
      <p>Copyright © {new Date().getFullYear()}</p>
      <p>
        <Link to="/">{sitename}</Link>
      </p>
      <p>
        Maintained by: {` `}
        <a
          href="https://www.armanimichael.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Michael Armani
        </a>
      </p>
    </FooterStyled>
  );
};

export default Footer;
