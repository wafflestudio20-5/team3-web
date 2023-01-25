import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
  height: auto;
  margin: auto;
  border: 1px solid white;

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    height: auto;
    border-bottom: 0.5px solid #7b7b7b42;
    padding: 10px 0;

    &:last-of-type {
      border: none;
    }
  }
`;

export const Img = styled.img`
  max-width: 180px;
  height: 180px;
  border: 1px solid transparent;
  border-radius: 12px;
  margin-bottom: 4px;

  @media ${MD_SIZE} {
    width: 130px;
    height: 130px;
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 4px;
  height: 120px;
  width: 175px;

  @media ${MD_SIZE} {
    gap: 8px;
    height: 130px;
    flex-grow: 1;
  }
`;

export const Title = styled.h3`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${MD_SIZE} {
    width: 100%;
    height: 24px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.span`
  font-family: 'LINESeedKR-Bd';
  font-size: 14px;
  font-weight: 600;
`;

export const Location = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 12px;
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
