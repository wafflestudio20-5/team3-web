import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 1000;
`;

// DESC: for drawer motion
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 100%;
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  padding: 25px 25px;
  box-sizing: border-box;
`;

export const QuitIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
