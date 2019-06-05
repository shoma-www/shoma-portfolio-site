import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../parts/profileImage';
import CommonSection from '../parts/commonSection';

export default () => {
  return (
    <CommonSection id='about' title='About'>
      <Container>
        <ContentArea>
          <p style={{textAlign: 'center'}}>
            しょうま
          </p>
          <TextArea>
            　2016年から働き出して４年目です。
            金融向けシステムを開発するSIerに就職しました。
            入社してから証券システムの保守／開発（バッチ／Web画面）をやってました。
            設計～テストまで一通りは経験しています。
          </TextArea>
        </ContentArea>
        <ProfileImage />
      </Container>
    </CommonSection>
  );
};


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ContentArea = styled.div`
  display: inline-block;
  width: 480px;
  padding: 20px;
`;

const TextArea = styled.p`
  line-height: 2.5rem;
`;