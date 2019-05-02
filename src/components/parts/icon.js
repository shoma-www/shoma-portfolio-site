import React from 'react';
import styled, { css } from 'styled-components';

export const SidebarIcon = ({ color, onClick }) => ( 
  <SidebarFrame
    onClick={onClick}
    color={color}
  >
    <ThreeBorders color={color} />
  </SidebarFrame>
);

const SingleLine = css`
  transform-origin: center center;
  position: absolute;
  height: 4px;
  width: 28px;
  display: block;
  background-color: ${props => props.color || 'black' };
`;

const ThreeBorders = styled.span`
  color: rgba(0,0,0,0);
  top: 6px;
  ${SingleLine};

  ::before,
  ::after {
    content: '';
    ${SingleLine};
  }

  ::before {
    top: 10px;
  }

  ::after {
    top: 20px;
  }
`;


const SidebarFrame = styled.div`
  cursor: pointer;
  position: relative;
  height: 40px;
  width: 44px;
  display: inline-block;
  padding: 6px;
  /* border: solid 2px ${props => props.color || 'black' };
  border-radius: 10px; */
`;