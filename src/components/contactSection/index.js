import React from './node_modules/react';
import styled from './node_modules/styled-components';
import CommonSection from '../parts/commonSection';

export default function(){
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
}

const TextArea = styled.p`
  font-size: 1.2rem;
  margin: 0 auto 20px;
  text-align: center;
  width: 680px;
`;

const Contacts = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: center;
  margin: 10px auto 20px;
`;

const Button = styled.a`
  background-color: rgba(253, 67, 100, 0.8);
  border-bottom: solid 3px rgb(150, 0, 0);
  border-radius: 10px;
  border-right: solid 3px rgb(150, 0, 0);
  color: white;
  font-weight: bold;
  margin: 0 5px;
  padding: 10px 0;
  text-align: center;
  width: 130px;

  :active {
    border: none;
    margin-top: 3px;
    transform: translate(3px,3px);
  }

  :hover {
    background-color: rgb(253, 67, 100);
    color: white;
  }
`;