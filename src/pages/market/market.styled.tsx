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
  margin-bottom: 45px;

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
  transition: 0.3s all;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    position: static;
    align-self: flex-end;
    margin: 4px 16px 4px 0;
  }

  @media ${Market_MD} {
    grid-template-columns: repeat(3, 200px);
  }
`;

export const CheckBox = styled.input`
  width: 16px;
  cursor: pointer;
  accent-color: #03996c;
`;

export const Span = styled.span`
  font-size: 15px;
  color: #4b4b4b;
`;

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

export const NotFound = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
`;
