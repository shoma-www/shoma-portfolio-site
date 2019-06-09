import React from 'react';
import styled, {css} from 'styled-components';
import posed from 'react-pose';
import { navigate } from 'gatsby';
import Font from '../../const/font';
import Color from '../../const/color';

export default function({ isFixed=true, isVisible='open', navItems=[] })
{
  return (
    <Header
      pose={isVisible}
      isFixed={isFixed}
    >
      <MenuList>
        {navItems.map(({ url, name }, index) => (
          <MenuItem
            key={index}
            onClick={() => navigate(url)}
            className={isFixed?'FixedMenu':'NormalMenu'}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Header>
  );
}


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
  color: ${Color.Thema};
  background-color: rgba(255,255,255,.8);
  height: 50px;
  width: 100vw;
  z-index: 10;
  ${props =>
    props.isFixed ?
      css`
        box-shadow: 0 5px 5px rgba(0,0,0,0.2);
        position: fixed;
        top: 0;
      `:
      css`
        position: absolute;
        top: 0;
      `};
`;

const MenuList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-around;
  margin-left:auto;
  margin-right:auto;
  max-width: 960px;
  padding-left: 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-family: ${Font.yuMincho};
  font-weight: 500;
  list-style: none;
  margin: 0;
  position: relative;
  :hover::after {
    background-color: ${Color.Thema};
    content: " ";
    display: block;
    height: 1px;
    position: absolute;
    left: 0;
    bottom:0;
    width: 100%;
  }
`;
