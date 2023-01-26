import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 15px;
`;

export const Edit = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;

export const Delete = styled.div`
  color: ${COLOR_CARROT};
`;
