# team3-web

# 🥕 Waffle-Market 🥕

## 🥕 당근마켓 클론 코딩 와플마켓 Client

- 당근마켓 기능을 클론 코딩한 와플마켓 client입니다.
- 단순 게시판 기능 외에 예약, 거래, 채팅 등의 부가 기능이 더해진 서비스를 구현해보면서 구성원들의 개발 실력 성장을 이루고자 했고,
  서비스 기획에 인풋을 줄이기 위해 기존에 있는 서비스를 기반으로 클론 코딩을 하였습니다.

## 😎 서비스 소개 영상 및 사진

![A1 (300 DPI)](https://user-images.githubusercontent.com/72662822/216532231-59aa7003-b65b-4d4e-b122-8165b24ed710.png)

## 👨‍👩‍👧‍👦 누가 만들었나요?

|                                                   [김예지(lerrybe)](https://github.com/lerrybe)                                                    |                                                  [백민홍(roddywhite)](https://github.com/roddywhite)                                                   |                                                  [유창민(fluentmin)](https://github.com/fluentmin)                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/lerrybe"><img src="https://avatars.githubusercontent.com/u/71599639?v=4" width="160px" style='border-radius: 50%'></a> | <a href="https://github.com/roddywhite"><img src="https://avatars.githubusercontent.com/u/109863663?v=4" width="160px" style='border-radius: 50%'></a> | <a href="https://github.com/fluentmin"><img src="https://avatars.githubusercontent.com/u/91964707?v=4" width="160px" style='border-radius: 50%'></a> |

<!-- 혹시 가능하면.. 페이지 구조 넣기..? -->
<!-- ## 🏛️ 서버 구조

![image](https://user-images.githubusercontent.com/72662822/216547325-5e281374-e3f4-405d-aa8c-4ac6b1c018c4.png) -->

## 📚 기술 스택

<div align=center>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=black">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=black">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <br>
    <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/Redux_toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
    <br>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
    <img src="https://img.shields.io/badge/amazon aws-232F3E?style=for-the-badge&logo=amazon aws&logoColor=white">
</div>

## 🧑‍💻Convention

- 프로젝트를 시작하기 전 아래와 같은 컨벤션을 정함으로써 코드 관리에 효율성을 높였습니다.

### 👔 Code Convention

- 팀원 간 코드 스타일을 맞추고 가독성을 높여 코드 리뷰를 원할하게 하기 위해 [eslint와 Prettier](https://pravusid.kr/typescript/2020/07/19/typescript-eslint-prettier.html)를 사용하였습니다.
- [husky](https://jbee.io/web/formatting-code-automatically/)를 통해, 커밋 전 코드 포맷팅을 자동화함으로써 개발 효율을 높이고자 하였습니다.
- Github Action 을 이용하여 main 브랜치에 PR 올릴때마다 자동으로 스타일 검사를 하도록 설정하였습니다.

### 😎 Commit Convention

- 아래와 같은 커밋 컨벤션을 통해 서로의 작업물이 어떤 유형의 것인지 파악하기 쉽도록 하였습니다.
  <img width="600" alt="스크린샷 2023-02-01 오후 11 26 44" src="https://user-images.githubusercontent.com/72662822/216070103-f68194a6-0ecb-4539-912b-f47107b4f500.png">

### ⛙ Git Branch 전략 및 Merge 전략

<img width="759" alt="스크린샷 2023-02-01 오후 11 43 46" src="https://user-images.githubusercontent.com/72662822/216074373-cc670c46-8f34-44c6-b153-06221d125330.png">

- Github-flow를 사용했습니다.
  - 크지 않은 사이즈의 토이프로젝트였기 때문에 간단한 Branching 전략인 Github-flow를 사용했습니다.
  - 각자의 작업물은 feature 브랜치를 만들어 관리했으며, 완성한 작업물은 main 브랜치에 Squash Merge 전략을 사용해 합쳤습니다.
- 아래와 같은 근거로 Merge 전략은 Squash Merge 전략을 택했습니다.
  - 각자 작업한 결과물의 완성본이 main 브랜치의 관심사였던 점
  - PR을 날리는 단위를 작게 하자고 미리 협의한 점
  - 각자 작업물의 히스토리는 main 브랜치에 남기기보다는 로컬에 남겨 관리하는 것이 편하겠다고 판단한 점

## 📖 기술적인 이슈 및 개발 과정을 겪으며 정리한 글

### 기술 스택 선정 이유

- **Typescript**
  - 컴파일 단계에서 타입 정보와 관련된 오류를 포착할 수 있어, 개발 경험에 좋을 것이라 생각했습니다.
- **styled-component**
  - no className bugs & 코드에 className 없어 깔끔해보입니다.
  - 특정 컴포넌트와 연결되어 있어 유지보수가 쉽다고 느꼈습니다.
- **redux / redux toolkit**
  - 가장 널리 쓰이고 정보가 많다고 생각했습니다.
  - redux에 비해 보일러 플레이트 코드가 적고, redux-toolkit에는 많은 라이브러리들이 내장되어 있어 라이브러리 의존성을 줄일 수 있을 것이라 생각했습니다.

### 공유하고 싶은 내용 & 개발하며 만났던 이슈

#### 1. 백엔드와 프론트엔드의 병렬적 개발 상황에서의 해결방안 - msw로 개발 인프라 확충

- msw란?
  - MSW(Mock Service Worker)는 모의 서비스 워커를 사용해 네트워크 호출을 가로채는 API mocking 라이브러리입니다.
  - msw는 프론트엔드가 실제 api 요청을 보내면, 네트워크 단에서 해당 요청을 가로채 백엔드 api인 척 이미 만들어진 가짜 데이터(mock data)를 응답으로 보내줍니다.
- 사용 계기
  - 백엔드의 api가 완성되지 않은 부분은 프론트엔드에서 코드를 미리 작성해두기가 어려운데, 명세가 정해져 있어도 더미 데이터를 넣고 제거하는 일이 같은 일을 중복해서 하는 것처럼 느껴졌습니다. 또한 데이터가 도착하지 않았을 때 사용자 경험을 위한 로딩 처리를 하고하는데, 더미 데이터가 소스코드 내부에 있으면 응답이 아직 도착하지 않았을 때 진행되어야 하는 로직이 제대로 실행되고 있는지 알기 어렵습니다. 따라서 백엔드 api 개발과 프론트 UI 개발을 병렬적으로 진행하기 위해 임시로 가짜 응답을 내려주는 모의 서비스워커를 도입하게 되었습니다.
- 사용 후기
  - 사실 감사하게도 우리 팀의 백엔드 개발 속도가 빨라서 사용할 일이 그렇게 많지는 않았던 것 같습니다. 하지만 초기 API가 완성되지 않고 명세가 계속 바뀔 때도 msw 덕분에 안정적으로 클라이언트 사이드를 개발할 수 있었다고 느끼는데요, 특히나 병렬적으로 UI 작업이나 API 연결 함수를 작성해야할 때 매우 유용했고 덕분에 길지 않은 프로젝트 기간에 맞춰 작업을 마무리할 수 있게 된 것 같습니다.

#### 2. 토큰 저장 위치 + 관리 + 자동갱신 + 인터셉터

- 현재 토큰 관리 방법 (accessToken + refreshToken)
  - 로그인을 하면 accessToken과 refreshToken을 발급받고, 둘 다 로컬 스토리지에 저장합니다. (후에 개선점에 이 부분이 등장합니다.) 이때, expiryTime(현 시각으로부터 60분 뒤)도 함께 저장합니다. accessToken의 만료 시간은 60분, refreshToken은 2주입니다.
  - 만약 refreshToken이 있다면 만료 1분 전(59분 경과)에 `/auth/refresh` 로 토큰 리프레시 요청을 통해 accessToken을 재발급 받아 로그인을 연장합니다. (만료 1분전 감지는 setTimeout 이용, 기준은 로그인할 때 받았던 expiryTime 입니다.)
  - 이 때, refreshToken도 재발급 받아 새로 저장하며 expiryTime도 1시간 뒤로 값을 바꿔줍니다.
  - 혹시나 accessToken이 만료된 상태에서 서버에 요청을 보내는 경우 (글 작성 중에 액세스 토큰이 만료된 것과 같은 상황) `axios interceptor`로 요청을 가로채 토큰 갱신 후 재시도, 401 에러 응답을 유저에게 주지 않고 사용자 경험을 높이려고 했습니다.
- 한계와 보완하려고 한 점
<!-- 추후 내용 추가 필요 -->

#### 3. 크로스 브라우징 이슈

- 배포 후 QA를 하는 도중 갑자기 사파리 브라우저에서 페이지가 보이지 않았던 경우가 있었다. 정규표현식 중 lookbehind 문법이 사파리 브라우저에서는 지원하지 않는 문법이었기 때문에 main.js를 만들어내지 못해 빈 화면만 보였던 것이었다.
- 작은 부분이었지만 이 디버깅을 하면서 여러가지 브라우저에 대응할 수 있도록 테스트하며 개발하는 것의 중요하다고 생각했다. 자바스크립트가 실행되는 환경이니만큼 다양한 종류에 대해, 모든 차이와 속성을 외우진 못하더라도 문제가 생겼을 때 인지할 수 있는 자세 + 사전에 문제가 생기지 않게 대비하며 개발해야겠다.

#### 4. 소셜로그인 및 회원가입

- 먼저 현재의 소셜로그인 플로우를 정리하면 아래와 같다.
    <details>
    <summary>현재 소셜로그인 플로우 정리</summary>
    <div markdown="1">

  - 카카오 로그인

  1. 유저가 로그인 시도
  2. 프론트에서 유저를 redirect 페이지 (/login/kakao)로 이동시킴
  3. redirect페이지 url에는 카카오로부터 받은 인가 코드가 쿼리로 담겨있음. 이를 백엔드에 전달
  4. 백엔드에서는 전달받은 인가코드를 카카오에 보내고 토큰(카카오)을 받아옴
  5. 받아온 카카오 토큰로 와플마켓 자체 토큰 생성
  6. 프론트에서 자체 토큰을 받아와 보관 + 로그인 처리

  - 구글 로그인

  1. 기본적인 형태는 카카오 로그인과 같고, 같은 방법으로 구현할 수 있었지만 react-google-login 사용
  2. 유저가 로그인 시도하면 구글 계정 로그인 화면으로 이동
  3. 구글 로그인에 성공하면 응답으로 유저의 이메일 등 구글에서 제공하는 유저 정보를 받아옴
  4. 백엔드에 이메일 전달하여 가입한 적이 있는 유저라면 accessToken, refreshToken을 받아 로그인 처리, 신규 유저라면 /signup 페이지로 이동

    </div>
    </details>

- 주요 이슈
  - 소셜로그인 유저와 일반 로그인 유저의 회원가입 프로세스를 통일할 수 있는가?
  - 일반 유저는 이메일 인증과 비밀번호 입력이 필요한 반면, 소셜 유저는 필요 없다. 나머지 프로세스는 동일
- 해결방법
  - 소셜 유저의 경우 이메일, 비밀번호 input 박스를 이미 입력된 것으로, read only로 처리한다. (비밀번호는 난수로 지정)
  - 소셜로그인 유저의 경우 등록된 유저 정보가 없을 경우 회원가입 페이지로 navigate 시켜주면서 useNavigate의 state 전달 기능으로 이메일 주소, 소셜로그인 유저라는 정보를 전달해준다. 회원가입 페이지에서는 useLocation을 이용해 값을 받아 이메일을 미리 입력해준다.

#### 5. 소셜 로그인에서 프론트엔드 / 백엔드의 역할 분담이 애매했던 부분 어떻게 정리했는지

- 회원가입을 구현하던 입장에서 처음에는 다른 작업과의 연결이 이메일 인증 뿐이라 생각하고 따로 인증 페이지를 만들었다. 하지만 작업 도중에 소셜 로그인의 경우에도 닉네임과 위치 정보를 얻기 위해 회원가입 화면으로 들어와야 한다는 사실을 알게 되었고, 소셜 로그인을 맡았던 민홍님과 함께 플로우를 정리하였다. 그 과정에서 기존의 이메일 인증 방식을 별도의 페이지로 구성하는 대신 회원가입이라는 하나의 페이지에서 해결하면 더욱 좋겠다는 의견이 나왔고, 이를 백엔드에서 해당 부분을 맡은 준형님께 전달드렸다.
- 프론트엔드 입장에서는 비슷한 요청을 보내고 응답을 받으니 간단한 작업이라 생각했지만, 알고 보니 해당 기능을 구현하기 위해서는 DB에 회원 정보를 등록한 후 이메일 인증을 다루는 기존의 로직을 많이 수정해야 했다. 보다 자세한 내용에 대해서는 [이 게시물](https://leeeryboy.tistory.com/2)에 잘 설명되어 있다. 구현을 시작하기 전의 단계에서 비즈니스 로직을 명확하게 정의하고 개발하는 인원들 간에 이에 대한 합의가 이루어지지 않으면 작업을 두 번(혹은 그 이상) 할 수 있음을 몸소 체험하였고, 이후엔 정기 회의에서 구현뿐만 아니라 전체적인 플로우에 대한 구성원들 각자의 생각을 공유하고자 노력하며 보다 원활한 작업을 수행할 수 있었다.

#### 6. 협업 과정에서 conflict를 줄이고자 했던 작업 방식에 대한 설명

- 페이지별로 역할을 분담하고 해당 페이지 내에서 사용되는 컴포넌트에 대해 작업함으로써 겹침과 conflict를 줄이고자 했던 것 같다. 그러나 이렇게 작업하다보니 기능 혹은 스타일에 대한 통일성이 부족하여 마지막 주에 다듬는 작업을 (주로 예지님과 민홍님이) 했다. 예지님 민홍님 정말 감사합니다..ㅠㅠ
- 중간중간 작업하며 서로 공유하면 좋겠다는 컴포넌트들(ex. 버튼, 모달 등)은 이를 위한 디렉토리에 올려두고 pr 혹은 슬랙이나 카톡 등을 통해 알려주며 conflict를 줄일 수 있었다.

#### 7. 위치 정보 api 사용기

- 클론하는 서비스 대상이 당근마켓이다보니 당신 ‘근처’에 있는 게시물들과 이웃들을 보여주기 위해 이용자의 위치 정보를 수집할 필요가 생겼다. 처음에는 ‘자바스크립트에 있는 geolocation 을 사용하면 되겠거니..’ 생각했는데,
- 회원가입 혹은 프로필에서 위치를 수정하는 유저의 현재 위치를 받아오니 그 위치가 유저가 실제 생활하는 위치와 다를 수 있겠다는 문제가 생겼다. 그래서 기존에 다른 서비스들을 사용했던 경험을 되짚어보며 해당 서비스에 나의 위치 정보를 어떻게 전달했는지 떠올려보고, 이와 관련된 자바스크립트 혹은 리액트 라이브러리가 없나 찾아보았다. 다행히 [daum postcode](https://www.npmjs.com/package/react-daum-postcode)에서 사용자의 주소를 입력하면 이와 관련된 위치 정보를 반환해주는 api를 찾아, 이를 이용하여 회원가입 부분에서 유저의 위치를 string 형태로 받아왔다. 여기까진 잘 되었겠거니 싶었는데..22
- 백엔드에서 위치 정보를 사용하여 실제 동네 범위를 조정하기 위해선 string 형태의 위치 외에도 좌표 정보가 필요했다. 그래서 위에서 사용한 api외에 예지님의 많은(거의 전부) 도움을 받아 카카오 [maps api](https://apis.map.kakao.com/web/guide/) 를 통해 string으로 받아온 위치 정보의 좌표를 구해주었다.
- api 두 개를 이어서 사용해보는 경험이 처음이었는데, 그 과정에서 혼동이 생기지 않도록 input과 output의 타입을 명확하게 정의하고 위치 정보가 처리되는 플로우를 고민하는 과정이 꽤 재밌었다. 비록 좌표 정보를 제공하지 않는 주소와 같이 아직 해결하지 못한 문제들도 있지만, 그래도 서비스를 사용하는 유저의 입장과 서비스를 제공하는 기획 및 개발자의 입장을 오가며 필요한 api를 찾아보고 적용했던 것은 좋은 경험이 될 것 같다.

#### 8. CI / CD, github actions, aws s3 cloudfront

- 기본적인 플로우

  - 서비스(main) 브랜치 / 개발 브랜치와 배포 사이트와의 안정적인 동기화, 잦은 merge 등으로 복잡한 상황일 때 불필요한 실수를 줄이기 위하여 github actions를 이용해 배포를 자동화.
  - 배포에 필요한 AWS key 등은 github secrets에 보관하고, workflow파일에서 이를 호출해 사용
  - main 브랜치에 pr이 closed(merge) 됐을 때 `main.yml` workflow 파일이 동작되도록 함
  - dev 브랜치와 동기화된 dev 사이트도 만들었는데요, dev 브랜치에 pr이 closed(merge)되었을 때는 `dev.yml`이 동작
  - Cloudfront의 경우, 배포하고 24시간 동안은 캐시가 유지되어 24시간 내에 재 배포를 하게 되면 동기화가 되지 않는데, 이 경우에 캐시를 지우는 invalidation 작업도 aws 콘솔에서 하지 않고 workflow 스크립트에 포함시켜 자동화

- 겪었던 문제

  - 매뉴얼대로 workflow 파일을 세팅했고, 같은 방식으로 다른 레포에서도 배포 자동화에 성공했는데도 불구하고 실제 workflow가 동작했을 때 aws 인증과정에서 에러가 남.
  - 사실 프로젝트를 시작하고 한동안은 본 레포를 포크한 개인 레포에서 작업을 한 뒤 본 레포로 pr을 올렸는데, 이것이 원인
  - 이 때 돌아가는 workflow 파일은 origin 레포의 것이 아니라 forked 레포 소유이기 때문. (처음엔 origin 레포의 workflow파일이 실행된다고 착각)
  - forked 레포는 origin 레포의 secrets에 접근할 수 있는 권한이 없기 때문에 에러가 남.

- 해결방법
  - 이후에는 origin 레포에 브랜치를 생성해 작업했고, 같은 문제가 발생하지 않았음

#### 9. 반응형 UI

- 모바일 뷰 / pc 뷰 (breakpoint: 712px)
- 컴포넌트 구조를 짤 때 모바일 뷰를 염두에 두고 작업한다면 생각만큼 어렵진 않았다.
- 하지만 디테일, 마감 작업에 소요되는 노력이 두 배 이상으로 늘 수 있다..(!)
- 구조가 눈에 띄게 다른 모바일뷰 / 웹뷰라면 DesktopWrapper \* MobileWrapper을 둘 수도 있지 않을까?

#### 10. [채팅 구현과 관련된 내용 정리](https://lerryroad.tistory.com/97)

## 🎉 각자 소감 및 서로에게..

- 예지:

- 민홍: 사실 저희가 이것저것 구현해야 할 페이지, 기능들이 많아서 다 꼼꼼하게 신경쓰는 것이 쉽지 않을거라고 생각했는데 정말 실제 서비스 오픈하는 것처럼 빈틈 없는 결과물을 내려고 다들 열을 올리는 모습이 너무 멋있었고 ‘뭘 해도 될 사람들’이라고 생각했네요.. 예지님.. 뼈대를 너무 잘 잡아주셔서 편하게 코드 짰네요.. 창민님.. 몸이 두 개인 것처럼 살아주셔서 감사해요.. 백엔드 분들께도 너무 감사한게 정말 빠르게 빈틈없이 작업해주셔서 작업하기 너무 수월했습니다.. 다혜님도 합류 전과 후 퀄리티가 확 차이나는걸 보고 상당한 존재감을 느꼈습니다.. 너무 많이 배우고 좋은 에너지를 얻어서 기분이 좋습니다…!!!

- 창민: 🙇‍♂️먼저 팀원분들께 절 한 번 하고 시작하겠습니다🙇‍♂️ 인턴하며 토이플젝을 하다보니 팀원분들, 특히 FE 예지님과 민홍님으로부터 정말 많은 도움 받았습니다.. 감사합니다ㅠㅠㅠ 백엔드 분들 및 디자이너 다혜님께도 엄청 많은 도움 받았어요,, 회원가입 페이지 디자인 비포애프터 사진을 첨부하고 싶은데 부끄러워서 못 하겠습니다ㅋㅋㅋ 그동안은 혼자 코딩을 해왔다보니 개발 과정에서 다른 사람들과의 협업을 경험해본 것이 처음이었는데, 협업의 순기능을 몸소 체험할 수 있었습니다. 플젝을 하는 도중 함께 일하는 건 컴퓨터 화면 너머의 사람들이라는 걸 느끼는 순간이 꽤 많았고, 칭찬을 여러번 했는데도 부족할 만큼 대단한 팀원분들 만나서 정말 감사하게 생각합니다..! 플젝 끝나고 나면 조금 허전할 것 같네요..
