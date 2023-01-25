import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 330px;
  padding-top: 30px;
  background: #fafafa;
  font-family: 'KOTRA_GOTHIC';
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  min-width: 340px;
  padding: 0 20px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  width: 122px;
  height: 32px;
`;

export const RoleWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-left: 5px;
`;

export const Role = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

export const RoleTitle = styled.span`
  display: flex;
  width: auto;
  height: auto;
  color: #cccccc;
  font-size: 13px;
  font-weight: 700;
`;

export const Name = styled.span`
  width: auto;
  height: auto;
  color: #cccccc;
  font-size: 12px;
`;

export const Blank = styled.div`
  margin: 0 15px;
  color: #c2c2c29e;
`;

export const InfoLine = styled.div`
  height: 20px;
  width: 100%;
  border-bottom: 1px solid #c6c6c657;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-left: 5px;
`;

export const InfoInnerWrapper = styled.div`
  display: flex;

  @media ${MD_SIZE} {
    margin-top: 0;
    align-items: center;
  }
`;

export const NoticeWrapper = styled.div`
  display: flex;
  margin-top: 26px;
  @media ${MD_SIZE} {
    margin-top: 13px;
    flex-direction: column;
  }
`;

export const NoticeTitle = styled.span`
  width: auto;
  height: auto;
  margin-right: 5px;
  color: #ccc;
  font-size: 12px;
`;

export const NoticeContent = styled.span`
  width: auto;
  height: auto;
  margin-right: 7px;
  color: #c8c8c864;
  font-size: 11px;
`;

export const Copyright = styled.span`
  color: #ccc;
  font-size: 12px;
  margin-top: 28px;

  @media ${MD_SIZE} {
    margin-top: 13px;
  }
  @media (max-width: 547px) {
    display: none;
  }
`;
