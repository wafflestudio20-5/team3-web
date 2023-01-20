import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 430px;
  padding-top: 80px;
  background: #495057;
  font-family: 'KOTRA_GOTHIC';

  @media ${MD_SIZE} {
    height: 400px;
    padding-top: 60px;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 1000px;
  min-width: 340px;
  padding: 0 50px;

  @media ${MD_SIZE} {
    padding: 0 30px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
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
  color: #f1f1f1;
  font-size: 15px;
  font-weight: 700;
`;

export const Name = styled.span`
  width: auto;
  height: auto;
  color: #d6d6d6b6;
  font-size: 13px;
`;

export const Blank = styled.div`
  margin: 0 20px;
  color: #ffffff6d;
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 42px;
  height: auto;
  margin-top: 26px;

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
  color: #c8c8c859;
  font-size: 12px;
`;

export const NoticeContent = styled.span`
  width: auto;
  height: auto;
  margin-right: 7px;
  color: #c8c8c821;
  font-size: 11px;
`;

export const Copyright = styled.span`
  color: #c8c8c876;
  font-size: 12px;
  margin-top: 28px;

  @media ${MD_SIZE} {
    margin-top: 13px;
  }
  @media (max-width: 547px) {
    display: none;
  }
`;
