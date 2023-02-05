import * as S from './footer.styled';
import logoWhite from '../../assets/logo-white.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as NotionIcon } from '../../assets/notion-icon.svg';
import { ReactComponent as SwaggerIcon } from '../../assets/swagger-icon.svg';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.LogoWrapper>
          <S.Logo src={logoWhite} />
        </S.LogoWrapper>
        <S.RoleWrapper>
          <S.Role>
            <S.RoleTitle>
              PO
              <S.Blank>|</S.Blank>
            </S.RoleTitle>
            <S.Name>김준형</S.Name>
          </S.Role>
          <S.Role>
            <S.RoleTitle>
              Backend Dev.
              <S.Blank>|</S.Blank>
            </S.RoleTitle>
            <S.Name>김준형 · 곽민지 · 김좌훈</S.Name>
          </S.Role>
          <S.Role>
            <S.RoleTitle>
              Frontend Dev.
              <S.Blank>|</S.Blank>
            </S.RoleTitle>
            <S.Name>백민홍 · 유창민 · 김예지</S.Name>
          </S.Role>
          <S.Role>
            <S.RoleTitle>
              Designer
              <S.Blank>|</S.Blank>
            </S.RoleTitle>
            <S.Name>강다혜</S.Name>
          </S.Role>
          <S.Role>
            <S.RoleTitle>
              PM
              <S.Blank>|</S.Blank>
            </S.RoleTitle>
            <S.Name>안민규</S.Name>
          </S.Role>
        </S.RoleWrapper>

        <S.InfoLine />

        <S.InfoWrapper>
          <S.InfoInnerWrapper>
            <S.IconWrapper>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/wafflestudio20-5/team3-web"
              >
                <GithubIcon width={26} height={26} />
              </a>
            </S.IconWrapper>
            <S.IconWrapper>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/wafflestudio20-5/team3-server"
              >
                <GithubIcon width={26} height={26} />
              </a>
            </S.IconWrapper>
            <S.IconWrapper>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.waffle-market.store/swagger-ui/index.html"
              >
                <SwaggerIcon width={26} height={26} />
              </a>
            </S.IconWrapper>

            <S.NoticeWrapper>
              <div>
                <S.NoticeTitle>고객문의</S.NoticeTitle>
                <S.NoticeContent>oh..no</S.NoticeContent>
                <S.NoticeTitle>지역문의</S.NoticeTitle>
                <S.NoticeContent>no no...</S.NoticeContent>
              </div>
              <div>
                <S.NoticeTitle>제휴문의</S.NoticeTitle>
                <S.NoticeContent>plz no..</S.NoticeContent>
                <S.NoticeTitle>지역광고</S.NoticeTitle>
                <S.NoticeContent>welcome</S.NoticeContent>
              </div>
            </S.NoticeWrapper>
          </S.InfoInnerWrapper>
          <S.Copyright>{`ⓒ ${year}. TEAM 03 all rights reserved.`}</S.Copyright>
        </S.InfoWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Footer;
