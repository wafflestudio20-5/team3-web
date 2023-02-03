import styled from 'styled-components';
import {
  MD_SIZE,
  MD_to_XL_SIZE,
  SM_SIZE,
} from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  height: auto;
  margin: auto;
  border: 1px solid white;
  border-radius: 12px;
  gap: 4px;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-4px);
  }

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    height: 160px;
    border-top: 0.5px solid #d1d0d0;
    border-radius: 0;
    gap: 4px;

    &:hover {
      transform: translateY(0px);
    }
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid transparent;
  border-radius: 12px;
  margin-bottom: 4px;
  object-fit: cover;

  @media ${MD_SIZE} {
    width: 130px;
    height: 130px;
    margin-top: 14px;
    margin-right: 10px;
    margin-left: 16px;
  }
`;

export const Heart = styled.img`
  position: absolute;
  right: 4px;
  top: 208px;
  width: 24px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    top: 128px;
    right: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 6px;

  @media ${MD_SIZE} {
    width: 175px;
    gap: 8px;
    flex-grow: 1;
  }
`;

export const Title = styled.h3`
  width: 168px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${MD_SIZE} {
    width: 90%;
    height: 24px;
    font-size: 16px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;

  @media ${MD_SIZE} {
    font-size: 16px;
  }
`;

export const Location = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${MD_SIZE} {
    font-size: 13px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  @media ${MD_SIZE} {
    font-size: 12px;
  }
`;

export const Likes = styled.span`
  color: gray;
`;

export const Chats = styled.span`
  color: gray;
`;

export const Date = styled.span`
  color: gray;
`;

export const More = styled.img`
  position: absolute;
  right: 0px;
  top: 212px;
  width: 20px;

  @media ${MD_SIZE} {
    top: 22px;
    right: 4px;
    width: 24px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReviewButton = styled.button`
  display: none;

  @media ${MD_SIZE} {
    display: block;
    width: 100vw;
    height: 30px;
    background-color: #f1f3f5;
    border-top: 0.5px solid #d1d0d0;
    font-size: 14px;
  }
`;
