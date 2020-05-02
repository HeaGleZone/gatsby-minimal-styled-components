// * Libs
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Footer, Navbar } from './../';

import GlobalStyled from './../../theme/global-styles';

import useColorsPaletteQuery from './../../queries/useColorsPaletteQuery';

const Layout = ({ children }) => (
  <ThemeProvider theme={useColorsPaletteQuery()}>
    <GlobalStyled />
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
