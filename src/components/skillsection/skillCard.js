import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import Color from '../../const/color';

export default ({ skill, level, used }) => (
  <SkillContent used={used}>
    <Icon src={withPrefix(`/img/${skill}.svg`)} alt={skill} />
    <ProgressContainer>
      <ProgressBar level={level} />
    </ProgressContainer>
  </SkillContent>
);

const SkillContent = styled.div`
  background-color: white;
  border: solid 4px ${({used}) => used?Color.SkillWorkUsed:Color.SkillThema};
  border-radius: 20px;
  height: 155px;
  margin: 3px;
  padding: 10px;
`;

const Icon = styled.img`
  height: 90px;
  margin-bottom: 10px;
  width: 90px;
`;

const ProgressContainer = styled.div`
  background-color: ${Color.ProgressContainer};
  border-radius: 5px;
  height: 20px;
`;

const ProgressBar = styled.div`
  background-color: ${Color.Progress};
  border-radius: 5px;
  height: 100%;
  width: ${props => props.level};
`;