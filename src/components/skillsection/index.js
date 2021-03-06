import React from 'react';
import styled from 'styled-components';
import CommonSection from '../parts/commonSection';
import SkillTypeContainer from './skillTypeContainer';

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

export default function(){
  return (
    <CommonSection id='skill' title='Skill'>
      <TextArea>
        業務／自習問わず触ったことのあるスキルの一覧です。<br />
        業務で使っていたのは、赤枠で表しています。<br />
        このサイトはGatsbyで作ってます。バーが長いほど経験があります。
      </TextArea>
      <SkillTypeOuter>
        <SkillTypeContainer name='Backend' list={backendList} />
        <SkillTypeContainer name='Frontend' list={frontendList} />
        <SkillTypeContainer name='DB' list={dbList} />
        <SkillTypeContainer name='Others' list={othersList} />
      </SkillTypeOuter>
    </CommonSection>
  );
}

const TextArea = styled.p`
  font-size: 1.2rem;
  margin: 0 auto 20px;
  text-align: center;
`;

const SkillTypeOuter = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  margin: auto;
  max-width: 762px;
`;

