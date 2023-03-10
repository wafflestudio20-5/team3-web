import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: auto;
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 1s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
  font-family: 'Noto Sans';

  @media ${MD_SIZE} {
    margin: 30px 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 321px;
  height: 258px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ImgUser = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.19);
`;

export const ImgFrame = styled.img`
  width: 321px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  margin-top: 24px;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 40px;
  color: #808080;
`;

export const Name = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  color: #414141;
  padding-right: 8px;
  border-right: 0.8px solid #bdbdbd;
`;

export const Logo = styled.img`
  width: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temp = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
  color: #893009;
`;
