import React, { useState } from 'react';
import Header from '../components/parts/header';
import {createGlobalStyle} from 'styled-components';
import Observer from 'react-intersection-observer';
import Color from '../const/color';
import TopSection from '../components/topsection';
import AboutSection from '../components/aboutsection';
import ContactSection from '../components/contactsection';
import SkillSection from '../components/skillsection';
import WorkSection from '../components/worksection';
import FooterSection from '../components/footersection';

const NavItems = [
  {name: 'Home', url: '#top'},
  {name: 'About', url: '#about'},
  {name: 'Skill', url: '#skill'},
  {name: 'Works', url: '#works'},
  {name: 'Blog', url: '/blog'},
  {name: 'Contact', url: '#contact'},
];

export default function() {
  const [visibility, setVisibility] = useState(false);

  const handleView = e => {
    setVisibility(!e);
  };

  const title = 'Shoma\'s Portfolio';
  const subTitele = 'やる気はいつも遅刻気味';

  return (
    <>
      <GlobalStyles/>
      <Header
        navItems={NavItems}
        isFixed={false}
      />
      <Header
        navItems={NavItems}
        isVisible={visibility ? 'open' : 'closed'}
      />

      <Observer onChange={handleView}>
        <TopSection title={title} subTitele={subTitele} />
      </Observer>

      <div style={{margin: '1px'}} />

      <div style={{width: '100vw'}}>
        <AboutSection />
        <SkillSection />
        <WorkSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${Color.BackThemae};
  }
`;