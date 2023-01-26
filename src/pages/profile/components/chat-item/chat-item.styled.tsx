import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ececec;
  padding: 0 5px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    background: #eeeeee89;
  }
`;

export const ProfileImg = styled.img`
  width: 40px;
  min-height: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ececec;
  margin-right: 8px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Username = styled.span`
  font-family: 'LINESeedKR-Bd';
  height: 20px;
  font-weight: 600;
  font-size: 13px;
  color: #212124;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LastChat = styled.span`
  margin-left: 4px;
  color: #868b94;
  font-size: 12px;
  white-space: nowrap;
`;

export const Message = styled.span`
  max-width: 220px;
  height: 20px;
  font-weight: 600;
  font-size: 13px;
  color: #4d5159;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5px;
`;

export const PostImg = styled.img`
  border: 1px solid #ececec;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
