import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 8px;
  font-size: 15px;
`;

export const Edit = styled.div`
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: #000;
  }
`;

export const Delete = styled.div`
  color: ${COLOR_CARROT};
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    color: #000;
  }
`;
