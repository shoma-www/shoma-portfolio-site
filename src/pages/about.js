import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Content from '../components/content';
import SEO from '../components/seo';
import ProfileImage from '../components/profileImage';

const About = () => (
  <Layout>
    <SEO title='About' keywords={['About', 'application', 'react']} />
    <Content title='About'>
      <TextBody>
        　はじめまして。しゅうまいと申します。新卒から働き出して４年目です。<br />
        　新卒で金融向けシステムを開発するSierに就職しました。１年目から保守開発を担当し、案件担当として設計～テストまでいろいろやってました。現在は、新規開発プロジェクトでバッチ開発、SPAでWebの管理画面の開発をしています。よろしくお願いします！
      </TextBody>
      <ProfileImage />
    </Content>
  </Layout>
);
export default About;

const TextBody = styled.p`
  width: 100%;
  max-width: calc(650px - 1rem);
  padding: 0.5rem;
  font-size: 1.5rem;
  display: inline-block;
  vertical-align: top;
`;