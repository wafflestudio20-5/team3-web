import styled from 'styled-components';
import {
  MD_SIZE,
  MD_to_XL_SIZE,
  SM_SIZE,
} from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  color: #E78111;
  position: absolute;
  top: 240px;
  right: 0px;
  width: 90px;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);

  @media ${MD_SIZE} {
    top: 48px;
    right: 12px;
  }
`;

export const Button = styled.button`
  line-height: 26px;
  font-size: 15px;
  font-weight: 500;
  border-bottom: 0.3px solid gray;
`;
