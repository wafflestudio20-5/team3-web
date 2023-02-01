import styled from 'styled-components';
import {
  MD_SIZE,
  MD_to_XL_SIZE,
  SM_SIZE,
} from '../../../../constant/breakpoint';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 120px;
  position: absolute;
  z-index: 3;
  top: 240px;
  right: 4px;
  background-color: transparent;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;

  @media ${MD_SIZE} {
    top: 48px;
    right: 12px;
  }
`;

export const ElemWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const Elem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  color: #8d8d8d;
  transition: all 0.2s;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: #ececec;
    color: #212124;
  }
`;

export const ElemRed = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  color: #ff7171;
  transition: all 0.2s;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: #ececec;
    color: #212124;
  }
`;
