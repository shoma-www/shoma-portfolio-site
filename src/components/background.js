import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Color from '../const/color';

const Background = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "top-page-background.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.placeholderImage.childImageSharp.fluid;
      return (
        <PositionBackgroud
          critical
          Tag='section'
          className='background'
          fluid={imageData}
          BackgroundColor={Color.MainWhite}
        >
          {children}
        </PositionBackgroud>
      );
    }}
  />
);
export default Background;


const PositionBackgroud = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;  
`;