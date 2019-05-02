import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import Color from '../../const/color';

export default ({ skill, level }) => (
  <SkillBox>
    <Icon src={withPrefix(`/img/${skill}.svg`)} alt={skill} />
    <ProgressContainer>
      <ProgressBar level={level} />
    </ProgressContainer>
  </SkillBox>
);

const SkillBox = styled.div`
  height: 175px;
  padding: 15px;
  margin: 5px;
  border: solid 5px ${Color.SkillFrame};
  border-radius: 20px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ProgressContainer = styled.div`
  height: 20px;
  border-radius: 15px;
  background-color: ${Color.SkillFrame};
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 15px;
  width: ${props => props.level};
  background-color: ${Color.MainRed};
`;