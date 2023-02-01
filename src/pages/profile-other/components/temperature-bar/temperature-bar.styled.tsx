import { HTMLAttributes } from 'react';

import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

export const InitialTemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 71px;
  width: 80px;
  height: 34px;

  @media ${MD_SIZE} {
    left: 78px;
  }
`;

export const InitialTempText = styled.span`
  font-weight: 400;
  font-size: 12px;
  height: 15px;
  color: #868686;
`;

export const ProgressBg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 13px;
  background: #e8e8e8;
  border-radius: 6px;
`;

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  width: number | null;
  bgColor?: string;
}

export const ProgressTemp = styled.div<DivProps>(
  ({ width, bgColor }) => `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 13px;
  background: ${bgColor || '#EEEEEE'};
  border-radius: 6px;
  width: ${width || 36.5}%;

  // animation-name: run;
  // animation-delay: 0.5s;
  // animation-duration: 1.5s;
  // animation-fill-mode: forwards;
  
  // // DESC: progress animation
  // @keyframes run {
  //   from {
  //     width: 0%;
  //   }
  //   to {
  //     width: ${width || 36.5}%;
  //   }
  // }
`,
);

export const CurrentTempWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -3px;
`;

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const CurrentTempText = styled.span<SpanProps>(
  ({ color }) => `
  margin-right: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: ${color || '#000'};
`,
);

export const CurrentIcon = styled.img`
  width: 22px;
  height: 22px;
`;
