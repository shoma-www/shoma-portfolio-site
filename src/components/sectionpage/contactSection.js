import React from 'react';
import styled from 'styled-components';
import CommonSection from '../parts/commonSection';

export default () => {
  return (
    <CommonSection id='contact' title='Contact'>
      <TextArea>
        なにかあれば下記まで気軽にご連絡ください。
      </TextArea>
      <Contacts>
        <Button href='mailto:shumai.1215.2018@gmail.com'>
          Mail
        </Button>
      </Contacts>
    </CommonSection>
  );
};

const TextArea = styled.p`
  width: 680px;
  margin: 0 auto 20px;
  text-align: center;
`;

const Contacts = styled.div`
  height: 100%;
  margin: 10px auto 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Button = styled.a`
  color: white;
  font-weight: bold;
  width: 130px;
  background-color: rgba(253,67,100, 0.8);
  padding: 10px 0;
  margin: 0 5px;
  text-align: center;
  border-radius: 10px;
  border-right: solid 3px rgb(150, 0, 0);
  border-bottom: solid 3px rgb(150, 0, 0);

  :active {
    margin-top: 3px;
    border: none;
    transform: translate(3px,3px);
  }
  :hover {
    color: white;
    background-color: rgb(253,67,100);
  }
`;