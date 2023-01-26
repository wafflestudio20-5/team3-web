import styled from 'styled-components';

export const PositionWrapper = styled.div`
  position: relative;
  width: 155px;
  height: 155px;
  margin-bottom: 24px;
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
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  object-fit: cover;
`;

export const BadgeInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #e5e5e5;
  border-radius: 50%;
`;

export const WaffleBadge = styled.img`
  width: 24px;
  height: 24px;
`;

export const EditWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

export const EditInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #e5e5e5;
  border-radius: 50%;
  transition: 0.2s all;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Edit = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
`;
