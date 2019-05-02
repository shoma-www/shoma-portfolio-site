import React, { useState } from 'react';
import SideBar from './sidebar';
import styled, {css} from 'styled-components';
import posed from 'react-pose';
import Font from '../../const/font';
import Color from '../../const/color';
import { SidebarIcon } from './icon';

export default ({ isFixed=true, isVisible='open', title='', navItems=[] }) => {
  const [isOpen, toggle] = useState(false);

  return (
    <>
      <Header
        pose={isVisible}
        isFixed={isFixed}
      >
        <SidebarIcon color={Color.FontColor} onClick={() => toggle(!isOpen)} />
        <HeaderTitle>{title}</HeaderTitle>
        <div />
      </Header>
      <SideBar
        onClick={() => toggle(!isOpen)}
        isOpen={isOpen}
        navItems={navItems}
      />
    </>
  );
};


const TopFadeIn = posed.div({
  open: {
    y: '0%',
    transition: {
      ease: 'easeOut',
      duration: 300
    }
  },
  closed: {
    y: '-110%',
    transition: {
      ease: 'easeOut',
      duration: 300
    }
  }
});

const Header = styled(TopFadeIn)`
  width: 100vw;
  height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${props =>
    props.isFixed ?
      css`
        position: fixed;
        top: 0;
        box-shadow: 0 5px 5px rgba(0,0,0,0.2);
        background-color: white;
        z-index: 10;
      `:
      css`
        position: absolute;
        top: 0;
        background-color: rgba(255, 255, 255, 0.0);
      `};
`;

const HeaderTitle = styled.h1`
  color: ${Color.FontColor};
  font-family: ${Font.yuMincho};
  font-weight: 500;
  margin: 0;
`;