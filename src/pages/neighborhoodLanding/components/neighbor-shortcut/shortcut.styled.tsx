import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 15px 0px;

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  gap: 3px;
  cursor: pointer;
`;

export const TopWrapper = styled.div`
  gap: 10px;
`;

export const ContentP = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'Pretendard-Regular';
  font-size: 15px;
  white-space: pre-wrap;
`;

// DESC: footer에 location과 좋아요 정보 저장
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Location = styled.span`
  margin-right: 15px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconImg = styled.img`
  margin-left: 5px;
  width: 22px;
  height: 19px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100px;
`;

export const CountSpan = styled.span`
  margin: 0px 5px;
`;
