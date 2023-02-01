import styled from 'styled-components';
import { MD_SIZE, SM_SIZE } from '../../../../constant/breakpoint';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 8px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  border: 0px solid transparent;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-4px);
  }

  @media ${MD_SIZE} {
    width: 100px;
    height: 100px;
  }
`;

export const Text = styled.span`
  width: 120px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;

  @media ${MD_SIZE} {
    width: 100px;
  }
`;
