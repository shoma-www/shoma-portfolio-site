import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';

export default () => {
  return (
    <NewFooter>
      <FotterName>© 2019 Shoma</FotterName>
    </NewFooter>
  );
};

const NewFooter = styled.footer`
  height: 50px;
  background-color: ${Color.FontColor};
`;

const FotterName = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: ${Font.yuMincho};
  text-align: center;
  margin: 0;
  padding: 10.5px 0;
`;