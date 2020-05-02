import React from 'react';
import PropTypes from 'prop-types';

import { MenuStyled, Content } from './styles';

const Menu = ({ isOpen, children }) => {
  return (
    <MenuStyled isOpen={isOpen}>
      <Content>{children}</Content>
    </MenuStyled>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

Menu.defaultProps = {
  isOpen: false,
};

export default Menu;
