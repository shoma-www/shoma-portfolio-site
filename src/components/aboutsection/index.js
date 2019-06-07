import React from 'react';
import styled from 'styled-components';
import ProfileImage from './profileImage';
import CommonSection from '../parts/commonSection';

export default function () {
  return (
    <CommonSection id='about' title='About'>
      <ProfileContainer>
        <ProfileText>
          <p style={{textAlign: 'center'}}>
            しょうま
          </p>
          <TextArea>
            　2016年から働き出して４年目です。
            金融向けシステムを開発するSIerに就職しました。
            入社してから証券システムの保守／開発（バッチ／Web画面）をやってました。
            設計～テストまで一通りは経験しています。
            ７月から新しい会社でエンジニアする予定です。
          </TextArea>
        </ProfileText>
        <ProfileImage />
      </ProfileContainer>
    </CommonSection>
  );
}


const ProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ProfileText = styled.div`
  display: inline-block;
  padding: 20px;
  width: 480px;
`;

const TextArea = styled.p`
  font-size: 1.2rem;
  line-height: 2.2rem;
`;