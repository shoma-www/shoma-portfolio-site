import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';
import ZoomContent from './zoomContent';

export default ({ title, subTitle, image}) => {
  return (
    <WorkBox>
      <ZoomContent image={image} />
      <p>
        {title}
        <DetailComment>{subTitle}</DetailComment>
      </p>
    </WorkBox>
  );
};

const WorkBox = styled.div`
  width: 420px;
  height: 360px;
  padding: 10px;
`;

const DetailComment = styled.span`
  font-size: 1rem;
`;