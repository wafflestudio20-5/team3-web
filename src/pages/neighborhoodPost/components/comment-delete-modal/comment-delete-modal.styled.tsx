import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 100%;
  height: 80px;

  @media ${MD_SIZE} {
    width: 100%;
  }
`;

export const Title = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 400;
`;

export const Text = styled.div`
  flex: 1;
  margin-top: 20px;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const ConfirmButton = styled.button`
  background-color: #e78111;
  color: white;
  text-align: center;
  width: 56px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
`;

export const CancelButton = styled.button`
  background-color: #eaebee;
  color: black;
  text-align: center;
  width: 56px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
`;
