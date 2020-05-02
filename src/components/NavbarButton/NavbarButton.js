import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Menu } from './../';

import { MenuButtonStyled, Top, Bottom, Center } from './styles';

const DisableScroll = createGlobalStyle`
  body {
    overflow-y: ${props =>
      props.isScrollEnabled ? 'auto !important' : 'hidden !important'};
  }
`;

const NavbarButton = ({ children }) => {
  const [isClicked, setClicked] = useState(0);

  return (
    <>
      <Menu isOpen={Boolean(isClicked)}>{children}</Menu>
      <MenuButtonStyled
        onClick={() => {
          setClicked(Number(!isClicked));
        }}
      >
        <DisableScroll isScrollEnabled={!isClicked} />
        <Top isClicked={isClicked} />
        <Center isClicked={isClicked} />
        <Bottom isClicked={isClicked} />
      </MenuButtonStyled>
    </>
  );
};

export default NavbarButton;
