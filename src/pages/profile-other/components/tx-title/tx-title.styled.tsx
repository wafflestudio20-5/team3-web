import styled from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 22px;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  margin-left: 6px;
  margin-top: -2px;
  font-weight: 700;
  font-size: 16px;
  color: #212124;
`;

export const ArrowBox = styled.p`
  position: absolute;
  text-align: center;
  width: 160px;
  height: auto;
  padding: 8px;
  top: -10px;
  left: 95px;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 8px;
  z-index: 10;
  white-space: pre-wrap;

  &:hover {
    display: none;
  }
  &:after {
    border-top: 8px solid #333333;
    border-left: 8px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 20px;
    left: -5px;
  }
`;
