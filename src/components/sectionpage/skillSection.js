import React from 'react';
import styled from 'styled-components';
import CommonSection from '../parts/commonSection';
import SkillSet from '../parts/skillSet';

const backendList = [
  {skill:'C_Sharp', level: '75%', used: true},
  {skill:'dotnet' ,level: '35%', used: true},
  {skill:'python' ,level: '25%'},
];

const frontendList = [
  {skill:'html-5' ,level: '25%'},
  {skill:'css-3' ,level: '25%'},
  {skill:'javascript' ,level: '25%', used: true},
  {skill:'react' ,level: '25%', used: true},
  {skill:'gatsby' ,level: '25%'},
];

const dbList = [
  {skill:'oracle' ,level: '50%', used: true},
  {skill:'postgresql' ,level: '25%'},
];

const othersList = [
  {skill:'subversion' ,level: '50%', used: true},
  {skill:'git' ,level: '25%'},
  {skill:'visual-studio-code' ,level: '40%', used: true},
];

export default () => {
  return (
    <CommonSection id='skill' title='Skill'>
      <TextArea>
        業務／自習問わず触ったことのあるスキルの一覧です。<br />
        業務で使っていたのは、赤枠で表しています。<br />
        このサイトはGatsbyで作ってます。バーが長いほど経験があります。
      </TextArea>
      <Container>
        <SkillSet name='Backend' list={backendList} />
        <SkillSet name='Frontend' list={frontendList} />
        <SkillSet name='DB' list={dbList} />
        <SkillSet name='Others' list={othersList} />
      </Container>
    </CommonSection>
  );
};

const TextArea = styled.p`
  width: 680px;
  margin: 0 auto 20px;
`;

const Container = styled.div`
  max-width: 765px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
`;

