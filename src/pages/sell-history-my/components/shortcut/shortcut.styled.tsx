import styled from 'styled-components';
import {
  MD_SIZE,
  MD_to_XL_SIZE,
  SM_SIZE,
} from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
  border: 1px solid transparent;
  border-radius: 12px;
  gap: 4px;

  &:hover {
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    height: 180px;
    border-top: 0.5px solid #8a8a8a;
    border-collapse: collapse;
    border-radius: 0;
    gap: 4px;

    &:hover {
      box-shadow: 0 0 0 0;
      transform: none;
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
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 16px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 180px;
  gap: 6px;

  @media ${MD_SIZE} {
    width: 50vw;
    gap: 10px;
  }
`;

export const Title = styled.h3`
  width: 176px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${MD_SIZE} {
    width: 100%;
    height: 24px;
    font-size: 18px;
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
`;

export const Location = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
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
    top: 20px;
    right: 16px;
    width: 24px;
  }
`;

export const ReviewButton = styled.button`
  display: none;

  @media ${MD_SIZE} {
    display: block;
    position: absolute;
    right: 30px;
    bottom: 30px;
    border-radius: 4px;
    padding: 4px 10px;
    line-height: 150%;
    font-weight: bold;
    font-size: 14px;
    background-color: #ff6f0f;
    color: rgb(255, 255, 255);
    margin-left: auto;
  }
`;