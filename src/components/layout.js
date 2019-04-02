import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled,{createGlobalStyle} from 'styled-components';
import SideMenu from './sidemenu';
import Background from './background';
import Color from '../const/color';
import Font from '../const/font';

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Background>
        <GlobalStyle />
        <SideMenu siteTitle={data.site.siteMetadata.title} />
        <MainContent>
          {props.children}
        </MainContent>
      </Background>
    )}
  />
);

export default Layout;

const MainContent = styled.main`
  width: 100%;
  height: 100%;
  background-image: inherit;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${Color.MainWhite};
    font-family: ${Font.yuGothic};
    font-weight: 500;
  }
`;