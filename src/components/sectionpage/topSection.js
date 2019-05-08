import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Color from '../../const/color';
import Font from '../../const/font';


export default ({ title, subTitele }) => {
  return (
    <StaticQuery
      query={query}
      render={ data => {
        const imageData = data.headerImage.childImageSharp.fluid;
        return (
          <HeaderImg
            critical
            id='top'
            Tag='section'
            className='headerBackground'
            fluid={imageData}
            BackgroundColor={Color.MainWhite}
          >
            <h1>
              <Title>{title}</Title>
              <SubTitle>{subTitele}</SubTitle>
            </h1>
          </HeaderImg>
        );
      }}
    />
  );
};


const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "top-page-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid,
        }
      }
    }
  }
`;

const HeaderImg = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.span`
  font-size: 7rem;
  color: white;
  font-weight: bolder;
  font-family: ${Font.yuMincho};
  text-shadow: 2px 2px 2px black;
`;

const SubTitle = styled.span`
  font-size: 2.5rem;
  color: white;
  font-weight: 300;
  text-shadow: 1px 1px 1px black;
  display: block;
  margin-top: 20px;
`;