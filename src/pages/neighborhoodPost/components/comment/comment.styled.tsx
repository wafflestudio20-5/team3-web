import styled from 'styled-components';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0px;
  height: 80px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const UserName = styled.span`
  margin: 0px 10px;
  font-size: 18px;
`;

export const Location = styled.span`
  font-size: 16px;
`;

export const Content = styled.div`
  font-size: 18px;
`;

export const Date = styled.span`
  font-size: 16px;
`;
