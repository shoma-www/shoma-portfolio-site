import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Modal from './modal';
import Font from '../../const/font';

export default function ({onClick, title, isZoomed, details}) {
  return (
    <Modal onClick={onClick} isZoomed={isZoomed}>
      <Title>
        {title}
      </Title>
      <ThumbContent>
        {details.map(image =>
          <ExplainThumb key={image.originalName} fluid={image} />
        )}
      </ThumbContent>
      <Separator />
      <ExplainContent>
        <p>あいうえお</p>
      </ExplainContent>
    </Modal>
  );
}

const Title = styled.h1`
  font-family: ${Font.yuMincho};
  margin: 0;
`;

const ThumbContent = styled.div`
  height: 55%;
  overflow-y: auto;
`;

const ExplainThumb = styled(Img)`
  max-width: 600px;
`;

const Separator = styled.span`
  border-bottom: solid 1px gray;
  border-top: solid 1px black;
  margin: 8px 0;
`;

const ExplainContent = styled.div`

`;