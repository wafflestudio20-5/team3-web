import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  padding: 15px 0px;

  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  gap: 3px;
`;

export const ContentP = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// DESC: footer에 location과 좋아요 정보 저장
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Location = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
`;


export const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100px;
`;

export const CountSpan = styled.span`
  margin: 0px 5px;

`;
