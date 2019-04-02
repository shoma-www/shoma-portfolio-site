import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile_icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
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
  width: 15rem;
  border-radius: 50%;
  margin: 0.5rem;
  display: inline-block;
  vertical-align: middle;
`;
