import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 36px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 44px;
  padding: 0 28px;
  border-radius: 10px;
  background: rgba(255, 111, 15, 0.2);
`;

export const Title = styled.span`
  margin-left: 6px;
  color: #ff6f0f;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;

export const ChatBtn = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(255, 92, 38);
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(-2px);
  }
`;

export const Chat = styled.span`
  margin-left: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
