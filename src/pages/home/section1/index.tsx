import * as S from './section1.styled';

import slider1 from '../../../assets/landing-slider1.svg';
import slider2 from '../../../assets/landing-slider2.svg';
import slider3 from '../../../assets/landing-slider3.svg';
import appLogo from '../../../assets/app-logo.svg';
import mypage from '../../../assets/waffle-mypage.svg';
import neighbor from '../../../assets/waffle-neighbor.svg';
import trade from '../../../assets/waffle-trade.svg';

const Section1 = () => {
  return (
    <S.Wrapper id="anchor1">
      <S.Title>중고 거래부터 동네 정보까지, 이웃과 함께해요.</S.Title>
      <S.Title>가깝고 따뜻한 당신의 근처를 만들어요.</S.Title>

      <S.CategoryWrapper id="anchor2">
        <S.InnerWrapper
          animation="slide"
          swipe={true}
          navButtonsAlwaysVisible={false}
          indicatorIconButtonProps={{
            style: {
              padding: '1px',
              width: '14px',
            },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: '#4747473d',
              borderRadius: '50%',
            },
          }}
          fullHeightHover={false}
        >
          <S.Background1>
            <S.FlexWrapper>
              <S.SliderImg src={slider1} alt="slider" />
              <S.InfoWrapper>
                <S.AppLogoA src={appLogo} alt="app" />
                <S.PhraseA1 src={mypage} alt="phrase" />
                <S.PhraseA2>이웃과 나누는 정, 이웃과 나누는 따뜻함</S.PhraseA2>
              </S.InfoWrapper>
            </S.FlexWrapper>
          </S.Background1>
          <S.Background2>
            <S.FlexWrapper>
              <S.InfoWrapper>
                <S.PhraseB1 src={neighbor} alt="phrase" />
                <S.PhraseB2>재잘재잘 우리 동네 이야기</S.PhraseB2>
                <S.AppLogoB src={appLogo} alt="app" />
              </S.InfoWrapper>
              <S.SliderImg src={slider2} alt="slider" />
            </S.FlexWrapper>
          </S.Background2>
          <S.Background1>
            <S.FlexWrapper>
              <S.SliderImg src={slider3} alt="slider" />
              <S.InfoWrapper>
                <S.PhraseC1 src={trade} alt="phrase" />
                <S.PhraseC2>
                  {'우리동네에서 거래되는\n인기 중고 매물을 소개합니다.'}
                </S.PhraseC2>
                <S.LogoWrapper>
                  <S.AppLogoC src={appLogo} alt="app" />
                </S.LogoWrapper>
              </S.InfoWrapper>
            </S.FlexWrapper>
          </S.Background1>
        </S.InnerWrapper>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
};

export default Section1;
