import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  max-width: 740px;
  width: 100%;

  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: auto;
  padding: 15px 30px 25px 30px;
  margin: 20px 0 50px 0;
  background: #fff;
  border-radius: 16px;

  @media ${MD_SIZE} {
    padding: 15px 0 30px 0;
    width: 360px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${MD_SIZE} {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 10px;
  column-gap: 10px;
  width: 100%;
  margin-top: 48px;
  padding: 36px 0 28px 0;
  border-top: 2px solid #f5f5f5;

  @media ${MD_SIZE} {
    width: 336px;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 2px;
  }
`;

export const ModalInnerWrapper = styled.ul`
  max-height: 440px;
  overflow-y: auto;
  padding-right: 8px;
  overflow-x: hidden;
  height: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff871f;
  }

  &::-webkit-scrollbar-track {
    background-color: #c3c3c33c;
  }
`;

export const Header = styled.h1`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
  padding: 5px 0 20px 5px;
  background-color: #fff;
`;

export const DefaultAnnounce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 14px;
  color: #757575;
`;

export const PositionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const ScopeImg = styled.img`
  width: 300px;
  height: 250px;
`;

export const RangeDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Desc = styled.span`
  font-size: 12px;
  color: #626262;
`;

export const Range = styled.input`
  overflow: hidden;
  width: 280px;
  border-radius: 30px;
  -webkit-appearance: none;
  background-color: #e3e3e3;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    height: 16px;
    -webkit-appearance: none;
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    width: 28px;
    -webkit-appearance: none;
    height: 24px;
    cursor: pointer;
    background: #12b886;
    margin-top: -5px;
    box-shadow: -282px 0 0 280px #ff6f0f;
  }

  &::-ms-track {
    height: 16px;
    background-color: #ff6f0f;
  }

  &::-ms-thumb {
    width: 28px;
    -webkit-appearance: none;
    height: 24px;
    cursor: pointer;
    background: #12b886;
    margin-top: -5px;
    box-shadow: -280px 0 0 280px #ff6f0f;
  }

  /* Firefox */
  &::-moz-range-progress {
    background-color: #ff6f0f;
  }
  &::-moz-range-track {
    height: 16px;
    background-color: #e3e3e3;
  }
  /* IE*/
  &::-ms-fill-lower {
    background-color: #ff6f0f;
  }
  &::-ms-fill-upper {
    background-color: #e3e3e3;
  }
`;

export const RangeAnnounce = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  color: #626262;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const RangeAnnounceTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  color: #171717;
  margin-bottom: 30px;
  font-size: 13px;
  text-decoration: underline;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding: 5px 0 20px 5px;
  background-color: #fff;
`;

export const RangeTitle = styled.h1`
  width: auto;
  font-size: 16px;
  font-weight: 600;
`;

export const SubmitRange = styled.button`
  width: auto;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 6px;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(-2px);
  }
`;
