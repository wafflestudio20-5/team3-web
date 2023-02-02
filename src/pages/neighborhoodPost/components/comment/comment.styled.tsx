import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 8px 0 4px 0;
  height: auto;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EditDeleteWrapper = styled.div`
  width: 100px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #f2f2f2;
`;

export const UserName = styled.span`
  margin: 0px 10px;
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  white-space: pre-wrap;
`;

export const Location = styled.span`
  font-family: 'Pretendard-Regular';
  font-size: 11px;
  white-space: pre-wrap;
  color: #969696;
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  width: 98%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 65px;
  gap: 7px;
`;

export const ConfirmButton = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 4px;
  font-size: 13px;
  color: white;
  background-color: ${COLOR_CARROT};
`;

export const CancelButton = styled.button`
  font-size: 13px;
`;

export const EditText = styled.textarea`
  padding-left: 5px;
  flex-grow: 1;
  height: auto;
  min-height: 90px;
  max-height: 200px;
  border-radius: 4px;
  resize: none;
  border: 1px solid #d0d0d0;
  margin: 0 0 12px 12px;
  margin-bottom: 12px;
  padding: 8px;
  font-size: 14px;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  white-space: pre-wrap;
  margin: 12px;
`;

export const Date = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 12px;
`;
