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
  height: auto;
  padding: 0 10px;

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
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: ${COLOR_CARROT};
  }
`;

export const SpanTitle = styled.span`
  font-size: 17px;
  font-weight: ${FONT_SEMI_BOLD};
`;
export const SpanComplete = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: ${COLOR_CARROT};
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: #000;
  }
`;

export const DescWrapper = styled.div`
  flex: 10;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
`;

export const TitleText = styled.textarea`
  width: 100%;
  height: 10%;
  padding: 5px 10px;
  box-sizing: border-box;
  border: none;
  resize: none;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
  &:focus {
    outline: none;
  }
`;

export const Desc = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px 0;
  box-sizing: border-box;
  border: none;
  resize: none;
  font-size: 15px;
  overflow: auto;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
  &:focus {
    outline: none;
  }
`;

export const NoticeWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 5px;
`;

export const NoticeTitleSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${COLOR_CARROT};
`;

export const NoticeSpan = styled.span`
  font-size: 14px;
  font-weight: ${FONT_REGULAR};
  color: ${COLOR_CARROT};
`;
