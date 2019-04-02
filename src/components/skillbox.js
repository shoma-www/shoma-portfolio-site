import React from 'react';
import styled from 'styled-components';

const SkillBox = (props) => (
  <Box>
    {props.skill}
  </Box>
);

export default SkillBox;

const Box = styled.div`
  font-size: 1.5rem;
  color: #000;
  padding: 0.2rem 0.5rem;
  border: double medium #000;
  background-color: white;
  display: inline-block;
`;