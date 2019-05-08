import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';
import SkillIcon from './skillIcon';

export default ({name, list}) => (
  <SkillBox>
    <SkillTitle>
      <SkillName>{name}</SkillName>
    </SkillTitle>
    <SkillIcons>
      {list.map(item => <SkillIcon key={item.skill} skill={item.skill} level={item.level} used={item.used} />)}
    </SkillIcons>
  </SkillBox>
);

const SkillBox = styled.div`
  width: 100%;
  margin: 5px;
  border: solid 4px ${Color.SkillThema};
  background-color: white;
`;

const SkillTitle = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${Color.SkillThema};
  text-align: center;
`;

const SkillName = styled.h2`
  Color: ${Color.SkillTitleFont};
  font-size: 2rem;
  font-family: ${Font.yuGothic};
  padding: 2px 0;
`;

const SkillIcons = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-content: flex-start;
  align-items: center;
`;