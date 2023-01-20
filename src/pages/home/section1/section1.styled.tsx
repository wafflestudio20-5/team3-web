import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  @media ${MD_SIZE} {
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: 'LINESeedKR-Bd';
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #404040;

  @media ${MD_SIZE} {
    font-size: 18px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  margin-top: 70px;
  gap: 20px;
  grid-template-columns: 320px 320px;
  grid-template-rows: 178px 178px;
  @media ${MD_SIZE} {
    margin-top: 50px;
    grid-template-columns: 320px;
  }
`;

export const Category = styled.div`
  font-family: 'KyoboHand';
  width: 320px;
  height: 178px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  @media ${MD_SIZE} {
  }
`;
