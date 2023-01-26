import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

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
  width: 100%;
`;

export const EditDeleteWrapper = styled.div`
  width: 100px;
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

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ConfirmButton = styled.button`
  width: 40px;
  border-radius: 10px;
  color: white;
  background-color: ${COLOR_CARROT};
`;

export const CancelButton = styled.button``;

export const EditText = styled.textarea`
  padding-left: 5px;
  width: 80%;
  height: 30px;
  border-radius: 10px;
  resize: none;
`;

export const Content = styled.div`
  font-size: 18px;
`;

export const Date = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
`;
