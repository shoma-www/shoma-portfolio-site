import React from 'react';
import Header from '../components/parts/header';
import {createGlobalStyle} from 'styled-components';
import Observer from 'react-intersection-observer';
import Color from '../const/color';
import TopSection from '../components/sectionpage/topSection';
import AboutSection from '../components/sectionpage/aboutSection';
import ContactSection from '../components/sectionpage/contactSection';
import SkillSection from '../components/sectionpage/skillSection';
import WorksSection from '../components/sectionpage/worksSection';
import FooterSection from '../components/sectionpage/footerSection';

const NavItems = [
  {name: 'Home', url: '#top'},
  {name: 'About', url: '#about'},
  {name: 'Skill', url: '#skill'},
  {name: 'Works', url: '#works'},
  {name: 'Blog', url: '/blog'},
  {name: 'Contact', url: '#contact'},
];

class TestPage extends React.Component {
  state = {
    visibility: false,
  };

  handleView = e => {
    this.setState({
      visibility: !e,
    });
  };

  render() {
    const { visibility } = this.state;
    const title = 'Shoma\'s Portfolio';

    return (
      <>
        <GlobalStyles/>
        <Header
          navItems={NavItems}
          isFixed={false}
        />
        <Header
          title={title}
          navItems={NavItems}
          isVisible={visibility ? 'open' : 'closed'}
        />

        <Observer onChange={this.handleView}>
          <TopSection title={title} subTitele={'やる気はいつも遅刻気味'} />
        </Observer>

        <div style={{margin: '1px'}} />

        <AboutSection />
        <SkillSection />
        <WorksSection />
        <ContactSection />
        <FooterSection />
      </>
    );
  }
}

export default TestPage;


const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${Color.BackThemae};
  }
`;