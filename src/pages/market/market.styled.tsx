import styled from 'styled-components';
import { MD_SIZE, Market_MD, Market_XL } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 900px;
  align-content: center;
  justify-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${MD_SIZE} {
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media ${Market_MD} {
    width: 740px;
  }

  @media ${Market_XL} {
    width: 1140px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  gap: 4px;

  @media ${MD_SIZE} {
    position: static;
    align-self: flex-end;
    margin-right: 16px;
    margin-bottom: 3px;
  }

  @media ${Market_MD} {
    grid-template-columns: repeat(3, 200px);
  }
`;

export const CheckBox = styled.input`
  width: 18px;
`;

export const Span = styled.span``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  column-gap: 30px;
  row-gap: 100px;

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
    display: flex;
    flex-direction: column;
    row-gap: 0;
    column-gap: 0;
    width: 100vw;
    padding: 0;
    border-bottom: 0.5px solid #8a8a8a;
  }

  @media ${Market_MD} {
    grid-template-columns: repeat(3, 200px);
  }

  @media ${Market_XL} {
    grid-template-columns: repeat(5, 200px);
  }
`;
