import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import CommonSection from '../parts/commonSection';
import WorkCard from './workCard';

const WorkValues = [
  {
    title: 'ポートフォリオサイト',
    icon: 'Work_Portfolio.jpg',
    details: [
      'WorkDetail_Portfolio.jpg',
    ]
  },
  {
    title: 'ポートフォリオサイト2',
    icon: 'WorkDetail_NoImage.png',
    details: [
      'WorkDetail_NoImage.png',
    ]
  },
];

export default () => {
  return (
    <CommonSection id='works' title='Works'>
      <WorksContainer>
        <StaticQuery
          query={query}
          render={ data =>
            WorkValues.map(work => {
              const images = data.allImageSharp.edges;
              const iconFluid = images
                .filter(image => work.icon==image.node.fluid.originalName)[0]
                .node.fluid;
              const detailFluds = images
                .filter(image => work.details.includes(image.node.fluid.originalName))
                .map(image => image.node.fluid);
              return (
                <WorkCard
                  key={work.icon}
                  title={work.title}
                  details={detailFluds}
                  image={iconFluid}
                />
              );
            })
          }
        />
      </WorksContainer>
    </CommonSection>
  );
};

const query = graphql`
  query {
    allImageSharp(
      filter: {
        fluid: {
          originalName: {
            regex: "/Work/"
          }
        }
      },
      sort: {
        fields: [fluid___originalName],
        order: ASC
      }
    ) {
      edges {
        node {
          fluid(maxWidth: 600, quality: 100){
            originalName,
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }`;

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;