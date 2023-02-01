import styled from 'styled-components';
import { MD_SIZE, SM_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media ${MD_SIZE} {
    width: 400px;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Neighbor = styled.span`
  &:hover {
    transform: translateY(-2px);
  }
`;
