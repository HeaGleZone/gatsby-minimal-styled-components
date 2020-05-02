import React from 'react';
import { Link } from 'gatsby';

import useSiteSettingsQuery from './../../queries/useSiteSettingsQuery';

import { NavbarButton } from './../';

import { NavbarStyled, SiteLogo, LinksContainer } from './styles';

const Navbar = () => {
  const { menu_links } = useSiteSettingsQuery();

  const generateNavLinks = () =>
    React.Children.toArray(
      menu_links.map(link => <Link to={link.link}>{link.name}</Link>)
    );

  return (
    <NavbarStyled>
      <SiteLogo to="/" />
      <LinksContainer>
        <NavbarButton>{generateNavLinks()}</NavbarButton>
      </LinksContainer>
    </NavbarStyled>
  );
};

export default Navbar;
