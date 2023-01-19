import styled from 'styled-components';
import { SM_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 28px 0 0 15px;

  @media ${SM_SIZE} {
    margin: 35px 0 0 5px;
  }
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media ${SM_SIZE} {
    width: 60px;
    height: 60px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-left: 20px;

  @media ${SM_SIZE} {
    margin-left: 14px;
  }
`;

export const Username = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000;

  @media ${SM_SIZE} {
    font-size: 18px;
  }
`;

export const UserEmail = styled.div`
  font-size: 15px;
  color: #969696;

  @media ${SM_SIZE} {
    font-size: 14px;
  }
`;
