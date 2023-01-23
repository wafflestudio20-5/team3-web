import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-content: center;
  width: 100%;
  height: 160px;
  border: 0.5px solid gray;
  border-radius: 6px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  gap: 30px;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  align-self: center;
  border: 0.5px solid transparent;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 6px;
`;

export const User = styled.h3`
  width: 200px;
  font-size: 19px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const Type = styled.span`
  color: gray;
`;

export const Location = styled.span`
  color: gray;
`;

export const Time = styled.span`
  color: gray;
`;

export const Content = styled.span`
  margin-top: 6px;
`;

export const More = styled.img`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
`;
