import React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Template({data}){
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <Helmet title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: post.html}}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;