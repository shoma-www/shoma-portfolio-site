import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Color from '../../const/color';

const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "SleepingChibi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <CircleImage critical fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
);
export default ProfileImage;

const CircleImage = styled(Img)`
  position: static;
  width: 180px;
  border: solid 5px ${Color.Thema};
  border-radius: 50%;
  margin: 0 2rem;
`;
