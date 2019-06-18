import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';

export default function(props) {
  return (
    <CommonSection id={props.id}>
      <h2 className='header'>{props.title}</h2>
      {props.children}
    </CommonSection>
  );
}

const CommonSection = styled.section`
  color: ${Color.Thema};
  font-family: ${Font.yuGothic};
  font-size: 1.4rem;
  width: 980px;
  padding: 50px 0px 20px;
  margin: 0 auto;

  @media screen and (max-width: 767px){
    width: 100vw;
  }
  .header {
    font-family: ${Font.yuGothic};
    font-size: 3rem;
    font-weight: 100;
    border-bottom: solid 2px ${Color.Thema};
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;