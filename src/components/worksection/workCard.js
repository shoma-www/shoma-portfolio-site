import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import WorkDetailContainer from './workDetailContainer';

export default function({title, image, details}){
  const [isZoomed, setZoomed] = useState(false);

  const zoomIn = () => {
    setZoomed(true);
  };

  const zoomOut = () => {
    setZoomed(false);
  };

  const toggle = () => isZoomed ? zoomOut() : zoomIn();

  return (
    <>
      <WorkDetailContainer
        onClick={zoomOut}
        title={title}
        isZoomed={isZoomed}
        details={details}
      />
      <WorkContent onClick={toggle}>
        <WorkIcon fluid={image} />
        <Title>
          {title}
        </Title>
      </WorkContent>
    </>
  );
}

const WorkContent = styled.div`
  height: 350px;
  margin: 10px;
  padding: 15px 10px;
  width: 420px;
  :hover{
    background-color: rgba(112, 128, 144, .1);
    border-radius: 10px 10px;
    cursor: pointer;
  }
`;

const WorkIcon = styled(Img)`
  width: 400px;
  height: 300px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  margin-top: 5px;
  text-align: center;
`;