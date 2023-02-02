import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  width: 100%;
  height: auto;

  @media ${MD_SIZE} {
    width: 100%;
  }
`;

export const Title = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
`;

export const Text = styled.div`
  flex: 1;
  margin-top: 20px;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 6px;
  margin-top: 40px;
`;

export const ConfirmButton = styled.button`
  background-color: #FF6F0F;
  color: white;
  text-align: center;
  width: 50px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
`;

export const CancelButton = styled.button`
  background-color: #eaebee;
  color: black;
  text-align: center;
  width: 50px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
`;
