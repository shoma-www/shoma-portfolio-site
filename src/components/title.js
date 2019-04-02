import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Color from '../const/color';
import Font from '../const/font';

const Title = () => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <TitleArea>{data.site.siteMetadata.title}</TitleArea>
    )}
  />
);

export default Title;

const TitleArea = styled.h1`
  color: ${Color.MainRed};
  font-size: 6rem;
  font-weight: bolder;
  font-family: ${Font.yuMincho};
  font-weight: 500;
  text-shadow: 2px 2px 1px #661b28;
  margin-left: 20px;
  width: 100%;
  vertical-align: middle;
`;