import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import posed from 'react-pose';
import { navigate } from 'gatsby';
import Color from '../../const/color';
import Font from '../../const/font';

const SideBar = ({ isOpen, navItems, onClick }) => (
  <Contents>
    <Nav pose={isOpen ? 'open' : 'closed'} onClick={onClick} >
      <NavList>
        {navItems.map(({ url, name }) => (
          <NavItem key={name} onClick={() => navigate(url)}>{name}</NavItem>
        ))}
      </NavList>
    </Nav>
    {isOpen&&
      <CoverPage onClick={onClick}>
        <ModalScroll />
      </CoverPage>
    }
  </Contents>
);

export default SideBar;

const ModalScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Contents = styled.div`
  display: flex;
`;

const NavBase = posed.nav({
  open: {
    x: '0%',
    transition: {
      ease: 'easeOut',
      duration: 300
    }
  },
  closed: { 
    x: '-100%',
    transition: {
      ease: 'easeOut',
      duration: 300
    }
  },
});

const Nav = styled(NavBase)`
  font-family:  ${Font.yuMincho};
  font-weight: 500;
  background: ${Color.SideMenuBack};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
`;

const NavListBase = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 60,
  }
});

const NavList = styled(NavListBase)`
  flex-grow: 1;
  margin: 0;
  list-style: none;
  text-align: center;
  padding-top: 20px;
  padding-left: 0;
  overflow-y: auto;
`;

const NavItemBase = posed.li({
  open: {
    x: '0%',
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 200
    }
  },
  closed: {
    x: '-100%',
    opacity: 0
  }
});

const NavItem = styled(NavItemBase)`
  font-size: 1.5rem;
  color: ${Color.SideMenuFont};
  text-decoration: none;
  padding: 20px 80px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CoverPage = styled.div`
  width: 100vw;
  height: calc(100vh * 1.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  background-color: ${Color.SideMenuModal};
`;
