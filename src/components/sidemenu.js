import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {Menu} from 'semantic-ui-react';
import Color from '../const/color';
import Font from '../const/font';

const SideMenu = ({ siteTitle }) => (
  <MenuPosition>
    <MainMenu
      borderless
      vertical
      style={{height: '30', border: 'none'}}
    >
      <Menu.Item
        name='home'
        className='title'
        content={siteTitle}
        as={Link}
        to='/'
        position='left'
      />
      <Menu.Menu position='left'>
        <Menu.Item
          name='about'
          as={Link}
          to='/about'
        />
        <Menu.Item
          name='skill'
          as={Link}
          to='/skill'
        />
        <Menu.Item
          name='works'
          as={Link}
          to='/works'
        />
        <Menu.Item
          name='blog'
          as={Link}
          to='/blog'
        />
        <Menu.Item
          name='contact'
          as={Link}
          to='/contact'
        />
      </Menu.Menu>
    </MainMenu>
    <Copyright>© 2019 Shumai.</Copyright>
    <BorderMenu />
  </MenuPosition>
);
export default SideMenu;

const MenuPosition = styled.div`
  bottom: 0;
  width: 100%;
`;

const MainMenu = styled(Menu)`
  &&& {
    width: 150px;
    font-size: 1.7em;
    background: ${Color.MainRed};
    border-radius: 0;
    margin-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 20px;
    
    .menu a.item{
      width: 150px;
      color: ${Color.MainWhite};
      font-family: ${Font.yuGothic};
      font-weight: 500;
      text-align:center;
      padding: 1em 0.8em;
      :hover {
        background: rgba(0,0,0,.1);
        border-right: solid 4px ${Color.ManuSelect};
      }
    }
    .title{
      font-size: 1.1em;
      font-family: ${Font.yuMincho};
      font-weight: 400;
      color: ${Color.MainWhite};
      text-align:center;
      padding: 1em 0;
      :hover {
        background: rgba(0,0,0,.08);
        color: ${Color.MainWhite};
      }
    }
  }
`;

const Copyright = styled.div`
  width: 150px;
  height:35px;
  font-size: 10px;
  color: ${Color.Copyright};
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const BorderMenu = styled.div`
  width: 150px;
  height:20px;
  background: repeating-linear-gradient(0,${Color.MainRed} 0px, ${Color.MainRed} 2px, ${Color.MainWhite} 2px, ${Color.MainWhite} 3px);
  border: none;
  position: absolute;
  left: 0;
  bottom: 0;
`;