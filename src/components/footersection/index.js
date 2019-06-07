import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';

export default function() {
  return (
    <NewFooter>
      <FooterName>© 2019 Shumai</FooterName>
    </NewFooter>
  );
}

const NewFooter = styled.footer`
  background-color: ${Color.Thema};
  height: 50px;
  width: 100vw;
`;

const FooterName = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: ${Font.yuMincho};
  margin: 0;
  padding: 10.5px 0;
  text-align: center;
`;