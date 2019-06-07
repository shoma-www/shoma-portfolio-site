import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Color from '../../const/color';

export default function () {
  return (
    <StaticQuery
      query={query}
      render={data =>
        <CircleImage
          critical
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      }
    />
  );
}

const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "SleepingChibi.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 180) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

const CircleImage = styled(Img)`
  border: solid 5px ${Color.Thema};
  border-radius: 50%;
  margin: 0 2rem;
  position: static;
  width: 180px;
`;
