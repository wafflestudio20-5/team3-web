import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled(Carousel)`
  width: 90%;
  height: 390px;
  margin-bottom: 12px;
  border-radius: 8px;
  z-index: 0;

  @media ${MD_SIZE} {
    height: 280px;
  }
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;

  @media ${MD_SIZE} {
    height: 240px;
  }
`;
