import React from 'react';
import styled from 'styled-components';
import Color from '../const/color';

const Content = (props) => (
  <ContentBox home={props.home}>
    <HolderSide>
      {Array.from(new Array(7).keys()).map(key => <Circle key={key} />)}
    </HolderSide>
    <Contents>
      {!props.home&&
        <>
          <ContentsTitle>
            {props.title}
          </ContentsTitle>
          <Divider />
        </>
      }
      <Main>
        {props.children}
      </Main>
    </Contents>
  </ContentBox>
);
export default Content;

const ContentBox = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 150px;
  right: 0;
  z-index: 10;
  min-height: 500px;
  min-width: 500px;
  margin: 2% 2rem 2% 1rem;
  padding: 3rem 2rem;
  background-color: ${props => props.home?Color.TitleBack:Color.ContentBack};
  border: solid 1px ${Color.ContentBorder};
  border-radius: 60px;
  display: flex;
`;

const Contents = styled.div`
  width: 100%;
`;

const ContentsTitle = styled.h1`
  font-size: 3.5rem;
  display: block;
`;

const Divider = styled.div`
  display: block;
  border-bottom:3px solid ${Color.ContentBack};
  box-shadow: 0px 1px 0px #999;
`;

const Main = styled.div`
  margin-top: 1rem;
`;

const HolderSide = styled.div`
  height: 100%;
  margin: 0 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: solid 1px ${Color.ContentBorder};
  background-color: ${Color.ContentCircle};
  display: inline-flex;
`;
