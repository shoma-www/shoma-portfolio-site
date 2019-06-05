import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Icon } from 'semantic-ui-react';
import ProhibitedScroll from '../parts/prohibitedScroll';

export default function ({children, onClick, isZoomed}) {
  const pose = isZoomed ? 'zoom' : 'init';

  const stopEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalBackContainer pose={pose} onClick={onClick}>
      {(isZoomed)&&<ProhibitedScroll />}
      <ModalWindow onClick={stopEvent}>
        <Close name='close' onClick={onClick} corner='top righ' />
        {children}
      </ModalWindow>
    </ModalBackContainer>
  );
}


const ModalBackMotion = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block'},
    delayChildren: 200,
    opacity: 1,
  }
});

const ModalBackContainer = styled(ModalBackMotion)`
  background: rgba(0, 0, 0, .5);
  bottom: 0;
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateZ(0);
  z-index: 1000;
`;

const ModalMotion = posed.div({
  init: {
    scaleX: 0,
    scaleY: 0,
  },
  zoom: {
    scaleX: 1,
    scaleY: 1,
  }
});

const ModalWindow = styled(ModalMotion)`
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  left: calc(50% - 320px);
  width: 640px;
  height: 90%;
  padding: 10px 20px;
  position: absolute;
  top: 5%;
  i.icon{
    margin-left: auto;
    margin-bottom: -20px;
  }
`;

const Close = styled(Icon)`
  cursor: pointer;
`;