import styled from 'styled-components';
import { SM_to_MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-width: 360px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 711px;
  min-width: 360px;
  height: auto;
  padding: 50px 16px;

  @media ${SM_to_MD_SIZE} {
    padding: 40px 10px;
  }
`;

export const SampleImg = styled.img`
  width: 100%;
  height: 36vh;
  border-radius: 10px;
  margin-bottom: 30px;
  object-fit: cover;
`;
