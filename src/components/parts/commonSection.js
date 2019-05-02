import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';

export default (props) => {
  return (
    <CommonSection id={props.id}>
      <h2 className='header'>{props.title}</h2>
      {props.children}
    </CommonSection>
  );
};

const CommonSection = styled.section`
  color: ${Color.FontColor};
  font-family: ${Font.yuGothic};
  font-size: 1.4rem;
  width: 100vw;
  padding: 50px 40px 0;
  margin: 0 auto;

  .header {
    font-family: ${Font.yuGothic};
    font-size: 3rem;
    font-weight: 100;
    border-bottom: solid 2px ${Color.FontColor};
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;