import React from 'react';
import styled from 'styled-components';
import Color from '../../const/color';
import Font from '../../const/font';
import SkillCard from './skillCard';

export default function({name, list}){
  return (
    <SkillContainer>
      <SkillTitleOuter>
        <SkillTitle>{name}</SkillTitle>
      </SkillTitleOuter>
      <SkillContents>
        {list.map((item, index) => <SkillCard key={index} skill={item.skill} level={item.level} used={item.used} />)}
      </SkillContents>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  background-color: white;
  border: solid 4px ${Color.SkillThema};
  margin: 5px;
  width: 100%;
`;

const SkillTitleOuter = styled.div`
  background-color: ${Color.SkillThema};
  height: 44px;
  text-align: center;
  width: 100%;
`;

const SkillTitle = styled.p`
  Color: ${Color.SkillTitleFont};
  font-size: 2rem;
  font-family: ${Font.yuGothic};
  padding: 2px 0;
`;

const SkillContents = styled.div`
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  padding: 5px;
  width: 100%;
`;