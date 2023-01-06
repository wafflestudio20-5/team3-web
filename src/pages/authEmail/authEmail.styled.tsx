import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLOR_CARROT } from '../../constant';
import { LG_SIZE, MD_SIZE, SM_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 360px;
  height: 100%;
  padding: 100px 200px;

  @media ${LG_SIZE} {
    padding: 70px 150px;
  }
  @media ${MD_SIZE} {
    padding: 50px 30px;
  }
  @media ${SM_SIZE} {
    padding: 0px 10px;
  }
`;

interface Span extends HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const Span = styled.span<Span>(
  ({ color }) => `
  margin-top: 20px;
  color: ${color || 'black'};
    font-size: 40px;
    font-weight: 600;
    
  @media ${LG_SIZE} {
    font-size: 30px;
  }

  @media ${SM_SIZE} {
    font-size: 20px;
  }
  
  `,
);

export const SendAgainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;

  @media ${LG_SIZE} {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const SendAgainSpan = styled(Span)`
  font-size: 30px;
  font-weight: 400;

  @media ${LG_SIZE} {
    font-size: 25px;
  }
  @media ${MD_SIZE} {
    font-size: 20px;
  }
  @media ${SM_SIZE} {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 70px;
  margin-top: auto;
  border-radius: 10px;
  background-color: ${COLOR_CARROT};
  color: white;
  font-size: 30px;
  font-weight: 700;

  @media ${SM_SIZE} {
    height: 50px;
    font-size: 20px;
  }
`;

export const SendAgainButton = styled(Button)`
  width: 40%;
  font-size: 25px;

  @media ${LG_SIZE} {
    width: 60%;
    height: 50px;
    margin-top: 20px;
    font-size: 20px;
  }

  @media ${MD_SIZE} {
    width: 80%;
    font-size: 20px;
  }

  @media ${SM_SIZE} {
    font-size: 15px;
  }
`;
