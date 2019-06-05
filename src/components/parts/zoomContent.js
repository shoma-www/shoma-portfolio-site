import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';

export default function ({image}) {
  const [isZoomed, setZoomed] = useState(false);
  const pose = isZoomed ? 'zoom' : 'init';

  const zoomIn = () => {
    setZoomed(true);
  };

  const zoomOut = () => {
    setZoomed(false);
  };

  const toggle = () => isZoomed ? zoomOut() : zoomIn();

  return (
    <Content
      onClick={toggle}
    >
      {(isZoomed)&&<ModalScroll />}
      <Img className='hoverable' fixed={image} />
      <Modal pose={pose} className='modal'>
        <ModalForm>
          <ExplainContent>

          </ExplainContent>
          <PictureContent>

          </PictureContent>
        </ModalForm>
      </Modal>
    </Content>
  );
}


const Modal = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block'},
    opacity: 1,
    delayChildren: 200,
  }
});

const Content = styled.div`
  width: 400px;
  height: 300px;

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    z-index: 1000;
    background: rgba(0, 0, 0, .5);
    transform: translateZ(0);
  }

  .hoverable{
    :hover{
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
const ModalScroll = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Popup = posed.div({
  init: {
    scaleX: 0,
    scaleY: 0,
  },
  zoom: {
    scaleX: 1,
    scaleY: 1,
  }
});

const ModalForm = styled(Popup)`
  background-color: white;
  width: 80%;
  min-height: 400px;
  max-height: 80%;
  position: absolute;
  top: 10%;
  left: calc(50% - 40%);
  padding: 3%;

  display: flex;
  flex: 1 2;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const ExplainContent = styled.div`
  background-color: gray;
  flex-grow: 1;
  height: 100%;
  margin: 0 5px;
`;

const PictureContent = styled.div`
  background-color: gray;
  flex-grow: 2;
  height: 100%;
  margin: 0 5px;
`;