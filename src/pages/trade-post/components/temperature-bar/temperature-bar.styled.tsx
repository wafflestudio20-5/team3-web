import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 122px;
  height: 30px;
`;

export const ProgressBg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 6px;
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
  height: 6px;
  background: ${bgColor || '#EEEEEE'};
  border-radius: 6px;

  animation-name: run;
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  
  // DESC: progress animation
  @keyframes run {
    from {
      width: 0%;
    }
    to {
      width: ${width || 36.5}%;
    }
  }
`,
);

export const CurrentTempWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 122px;
  left: 48px;
  top: 0;
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
  margin-top: 2px;
`;

export const MannerTemp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 122px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #868e96;
  text-decoration: underline;
`;
