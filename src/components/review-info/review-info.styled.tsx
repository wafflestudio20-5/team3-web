import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-content: center;
  width: 400px;
  min-height: 100px;
  border: 0.5px solid transparent;
  gap: 30px;
  margin-top: 16px;
  margin-bottom: 44px;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  align-self: center;
  border: 0.5px solid transparent;
  border-radius: 50%;
  object-fit: cover;

  @media ${MD_SIZE} {
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 6px;

  @media ${MD_SIZE} {
    font-size: 14px;
  }
`;

export const User = styled.h3`
  width: 200px;
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${MD_SIZE} {
    font-size: 15px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  @media ${MD_SIZE} {
    font-size: 13px;
  }
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
  width: 380px;
  margin-top: 6px;

  @media ${MD_SIZE} {
    width: 260px;
  }
`;

export const More = styled.img`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
`;
