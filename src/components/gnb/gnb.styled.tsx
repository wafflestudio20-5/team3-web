import styled from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
`;

export const LogoImg = styled.img`
  margin-right: 30px;
`;

export const NavWrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
`;

export const AuthWrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
`;

export const Category = styled.span`
  font-size: 18px;
  color: #4d5159;
  width: auto;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-right: 28px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    color: #ff6f0f;
  }
`;

export const RouteButton = styled.button`
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #d1d3d8;
  border-radius: 5px;
  color: #000;
  font-weight: 600;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(0, 23, 88, 0.05);
    color: #555;
  }
`;
