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
  align-content: center;
  justify-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media ${MD_SIZE} {
    width: 100vw;
    margin-bottom: 0;
  }
`;

// export const List = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
//   column-gap: 30px;
//   row-gap: 100px;
//   max-width: 1080px;
//   align-content: center;

//   @media ${MD_SIZE} {
//     display: flex;
//     flex-direction: column;
//     row-gap: 0;
//     column-gap: 0;
//     width: 100vw;
//     padding: 0;
//   }
// `;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  column-gap: 30px;
  row-gap: 100px;

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
