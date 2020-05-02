import React from 'react';
import { Link } from 'gatsby';

import { SEO, Layout } from '../components/';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Hey what are you doing here?</h1>
    <p>This page doesn't exist, you should probably go back.</p>
    <Link to="/">Go back to the Homepage.</Link>
  </Layout>
);

export default NotFoundPage;
