import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import CommonSection from '../parts/commonSection';
import WorkCard from './workCard';

const WorkValues = [
  {
    title: 'ポートフォリオサイト',
    samnail: 'Work_Portfolio.jpg',
    details: [
      'WorkDetail_Portfolio.jpg',
    ],
    icons: [
      {
        name: 'github',
        href: 'https://github.com/shoma-www/shoma-portfolio-site',
      },
      {
        name: 'home',
        href: 'http://localhost:8000',
      }
    ],
    language: 'Gatsbyjs / Styled-Components',
    explain: () => (<>とりあえずなんかつくとこうということで、作った記念すべき１作目。<br />
    Gatsby自体初めてでしたが、それ以上にデザインとそのスタイルの当て方にかなり苦労しました。
    ブログ機能を実装しなければ。。。</>),
  },
  {
    title: 'hogefuga',
    samnail: 'WorkDetail_NoImage.png',
    details: [
      'WorkDetail_NoImage.png',
    ],
    icons: [
      {
      },
    ],
    language: 'fugafugafugafuga',
    explain: () => <>hogehogehohgeohogehogehogehogehoge</>,
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
              return (
                <WorkCard
                  key={work.title}
                  images={images}
                  work={work}
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