import styled from 'styled-components';

export const PositionWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

export const ProflieImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const BadgeInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: #e5e5e5;
  border-radius: 50%;
`;

export const WaffleBadge = styled.img`
  width: 12px;
  height: 12px;
`;
