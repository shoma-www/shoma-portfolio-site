import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';
import CommonSection from '../parts/commonSection';
import SkillIcon from '../parts/skillIcon';

const backendList = [
  {skill:'C_Sharp' ,level: '75%'},
  {skill:'dotnet' ,level: '35%'},
  {skill:'python' ,level: '35%'},
  {skill:'oracle' ,level: '50%'},
];

const frontendList = [
  {skill:'html-5' ,level: '25%'},
  {skill:'css-3' ,level: '25%'},
  {skill:'javascript' ,level: '35%'},
  {skill:'react' ,level: '35%'},
  {skill:'gatsby' ,level: '35%'},
];

const othersList = [
  {skill:'subversion' ,level: '50%'},
  {skill:'git' ,level: '25%'},
  {skill:'visual-studio-code' ,level: '35%'},
];

export default () => {
  return (
    <CommonSection id='skill' title='Skill'>
      <TextArea>
        触ったことのあるスキルの一覧です。
        業務で使ってたのは、C#とOracle 11g、あとはReactです。
        このサイトはGatsbyで作ってます。
        バーが長いほど経験があります。
      </TextArea>
      <Container>
        <SkillSet name='Backend' list={backendList} />
        <SkillSet name='Frontend' list={frontendList} />
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
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const SkillSet = ({name, list}) => (
  <SkillBox>
    <SkillTitle>
      <SkillName>{name}</SkillName>
    </SkillTitle>
    <SkillIcons>
      {list.map(item => <SkillIcon key={item.skill} skill={item.skill} level={item.level} />)}
    </SkillIcons>
  </SkillBox>
);

const SkillBox = styled.div`
  width: 500px;
  margin: 10px;
  border: solid 4px ${Color.SkillFrame};
`;

const SkillTitle = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Color.SkillFrame};
  text-align: center;
`;

const SkillName = styled.h2`
  Color: white;
  font-size: 2rem;
  font-family: ${Font.yuGothic};
  padding: 5px 0;
`;

const SkillIcons = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
`;