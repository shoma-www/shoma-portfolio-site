import React from "react";
import Layout from "../components/layout";
import Content from '../components/content';
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Content>
  </Layout>
);

export default NotFoundPage;
