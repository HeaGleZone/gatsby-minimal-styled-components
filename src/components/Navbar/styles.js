import styled from 'styled-components';

import { Link } from 'gatsby';

import logoImg from './../../images/icon.png';

const NavbarStyled = styled.nav`
  position: relative;
  height: 50px;
  padding: 10px;
  background: ${props => props.theme.background_secondary};
  display: flex;
  align-items: center;
`;

const SiteLogo = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  width: 80%;
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;

  &:after {
    display: none;
  }
`;

const LinksContainer = styled.div`
  width: 80%;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: flex-end;

  & a {
    margin: 0 5px 0 5px;
  }
`;

export { NavbarStyled, SiteLogo, LinksContainer };
