import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import posed from 'react-pose';
import Color from '../../const/color';
import Font from '../../const/font';
import CommonSection from '../parts/commonSection';
import WorkBox from '../parts/workBox';

const WorkConfig = {
  'Works_Portfolio.jpeg': {
    title: 'ポートフォリオサイト',
  },
  'Works_dummy.jpeg': {
    title: 'ポートフォリオサイト_ダミー',
  },
};

export default () => {
  return (
    <CommonSection id='works' title='Works'>
      <StaticQuery
        query={query}
        render={ data =>
          data.allImageSharp.edges.map(image =>{
            const fixed = image.node.fixed;
            const {title, subTitle} = WorkConfig[fixed.originalName];
            return (
              <WorkBox
                key={fixed.originalName}
                title={title}
                subTitle={subTitle}
                image={fixed}
              />
            );
          })
        }
      />

    </CommonSection>
  );
};

export const query = graphql`
  query {
    allImageSharp(
      filter: {
        fixed: {
          originalName: {
            regex: "/Works/"
          }
        }
      },
      sort: {
        fields: [fixed___originalName],
        order: ASC
      }
    ) {
      edges {
        node {
          fixed(width: 400){
            originalName,
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }`;