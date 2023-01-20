import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 150px;
  background: transparent;
  @media ${MD_SIZE} {
    height: auto;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'LINESeedKR-Bd';
  font-size: 30px;
  color: #404040;

  @media ${MD_SIZE} {
    font-size: 18px;
  }
`;

export const CategoryWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 320px 320px;
  grid-template-rows: 178px 178px;
  width: 100%;
  height: auto;
  margin-top: 70px;
  gap: 20px;

  @media ${MD_SIZE} {
    grid-template-columns: 320px;
    margin-top: 50px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 178px;
  font-family: 'KyoboHand';
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
`;
