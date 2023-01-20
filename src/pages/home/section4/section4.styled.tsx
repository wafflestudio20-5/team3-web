import styled from 'styled-components';
import { LG_SIZE, MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  @media ${LG_SIZE} {
  }
`;

export const Title = styled.h1`
  font-family: 'LINESeedKR-Bd';
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #404040;

  @media ${LG_SIZE} {
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  gap: 20px;

  @media ${LG_SIZE} {
  }
`;

export const Category = styled.div`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  @media ${LG_SIZE} {
  }
`;
