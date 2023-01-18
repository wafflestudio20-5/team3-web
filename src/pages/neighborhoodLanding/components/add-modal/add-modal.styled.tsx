import styled from 'styled-components';
import {
  COLOR_CARROT,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
} from '../../../../constant';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;

  @media ${MD_SIZE} {
    width: 100%;
  }
`;

export const TopWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
`;

export const SpanClose = styled.span`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SpanTitle = styled.span`
  font-size: 20px;
  font-weight: ${FONT_SEMI_BOLD};
`;
export const SpanComplete = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${COLOR_CARROT};
`;

export const DescWrapper = styled.div`
  flex: 10;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
`;

export const Desc = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;

  .content:focus {
    outline: none;
  }
`;

export const NoticeWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const NoticeTitleSpan = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: ${COLOR_CARROT};
`;

export const NoticeSpan = styled.span`
  font-size: 17px;
  font-weight: ${FONT_REGULAR};
  color: ${COLOR_CARROT};
`;
