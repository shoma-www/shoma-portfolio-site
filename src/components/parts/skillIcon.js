import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import Color from '../../const/color';

export default ({ skill, level, used }) => (
  <SkillBox used={used}>
    <Icon src={withPrefix(`/img/${skill}.svg`)} alt={skill} />
    <ProgressContainer>
      <ProgressBar level={level} />
    </ProgressContainer>
  </SkillBox>
);

const SkillBox = styled.div`
  height: 155px;
  padding: 10px;
  margin: 3px;
  border: solid 4px ${({used}) => used?Color.SkillWorkUsed:Color.SkillThema};
  border-radius: 20px;
  background-color: white;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
`;

const ProgressContainer = styled.div`
  height: 20px;
  border-radius: 5px;
  background-color: ${Color.ProgressContainer};
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 5px;
  width: ${props => props.level};
  background-color: ${Color.Progress};
`;