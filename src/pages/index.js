import React from 'react';
import { Link } from 'gatsby';

import { SEO, Layout } from '../components/';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blank Template</h1>
    <p>This is a blank template with styled-components.</p>
    <Link to="/second-page">Second page.</Link>
  </Layout>
);

export default IndexPage;
