import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid white;
  border-radius: 12px;
  gap: 4px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 12px;
  margin-bottom: 6px;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Location = styled.span``;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const Likes = styled.span`
  color: gray;
`;

export const Chats = styled.span`
  color: gray;
`;

export const Date = styled.span`
  color: gray;
`;
