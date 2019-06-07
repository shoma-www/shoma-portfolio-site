import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Icon } from 'semantic-ui-react';
import Modal from './modal';
import Color from '../../const/color';

export default function (
  {onClick, isZoomed, images, title='', details=[], icons=[], language='', explain=()=>(<></>)}) {

  const detailsImages = images
    .filter(image => details.includes(image.node.fluid.originalName))
    .map(image => image.node.fluid);

  return (
    <Modal onClick={onClick} isZoomed={isZoomed}>
      <ThumbContent>
        {detailsImages.map((detail, index) =>
          <ExplainThumb key={index} fluid={detail} />
        )}
      </ThumbContent>
      <ExplainContent>
        <Title>
          {title}
          {icons.map((icon, index) =>
            <MiniIcon
              key={index}
              href={icon.href}
              name={icon.name}
            />
          )}
        </Title>
        <ProgramText>言語：{language}</ProgramText>
        <ExplainText>
          { explain() }
        </ExplainText>
      </ExplainContent>
    </Modal>
  );
}

const Title = styled.h1`
  border-bottom: solid 1px black;
  font-size: 1.6rem;
  margin: 0;
`;

const ProgramText = styled.p`
  font-size: 1.2rem;
`;

const ExplainText = styled.p`
  font-size: 1.2rem;
`;

const ThumbContent = styled.div`
  height: 60%;
  overflow-y: auto;
`;

const ExplainThumb = styled(Img)`
  max-width: 600px;
`;

const ExplainContent = styled.div`
  margin: 10px 0;
`;

const MiniIcon = ({href, name}) => (
  <MiniLink
    href={href}
    target='_blank'
    rel="noreferrer noopener"
  >
    <Icon name={name} />{name}
  </MiniLink>
);

const MiniLink = styled.a`
  border-radius: 5px;
  color: ${Color.Thema};
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 10px;
  padding: 0 3px;
  :hover {
    background-color: ${Color.Thema};
    color: white;
  }
`;