import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  min-width: 360px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items: center;
  position: relative;
  z-index: 0;

  width: 711px;
  height: auto;

  margin-top: 30px;
  margin-bottom: 80px;
  padding: 22px 46px 40px 46px;
  border-radius: 10px;

  background-color: white;
  // overflow: auto;

  @media ${MD_SIZE} {
    padding: 0px 20px;
    width: 100%;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 1000px;
  overflow: auto;

  @media ${MD_SIZE} {
    max-height: 500px;
    margin-bottom: 10px;
  }
`;
