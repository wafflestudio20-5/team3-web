import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE, SM_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 8px;
`;

export const Goods = styled.div``;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  white-space: pre-wrap;
`;

export const SubTitle = styled.span`
  color: gray;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 500px;
  margin-bottom: 40px;
  gap: 60px;

  @media ${MD_SIZE} {
    width: 400px;
    gap: 40px;
  }
`;



export const Review = styled.textarea`
  width: 500px;
  height: 200px;
  padding: 8px 12px;
  border: 1px solid gray;
  border-radius: 12px;
  resize: none;

  @media ${MD_SIZE} {
    width: 400px;
    height: 160px;
  }
`;

export const Button = styled.div`
  width: 500px;
  height: 40px;
  padding: 8px;
  text-align: center;
  line-height: 17px;
  background-color: #FF6F0F;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 6px;
  margin-top: 16px;
  align-self: center;

  @media ${MD_SIZE} {
    width: 400px;
  }
`