import React from 'react';
import Layout from '../components/layout';
import Content from '../components/content';
import SEO from '../components/seo';
import SkillBox from '../components/skillbox';

const Skill = () => (
  <Layout>
    <SEO title='Skill' keywords={['gatsby', 'application', 'react']} />
    <Content title='Skill'>
      <SkillBox skill='C#' />
    </Content>
  </Layout>
);

export default Skill;
