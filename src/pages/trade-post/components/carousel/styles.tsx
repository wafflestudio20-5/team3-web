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
  cursor: pointer;

  @media ${MD_SIZE} {
    height: 240px;
  }
`;

export const Dim = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000cc;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */
  cursor: pointer;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ImgOriginal = styled.img`
  width: auto;
  max-width: 70vw;
  height: auto;
  max-height: 80vh;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${MD_SIZE} {
    max-height: 90vh;
    max-width: 90vw;
  }
`;
