import React from 'react';
import Title from '../components/title';
import Layout from '../components/layout';
import Content from '../components/content';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <Content home>
      <Title />
    </Content>
  </Layout>
);

export default IndexPage;
