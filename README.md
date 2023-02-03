# team3-web

# 🥕 Waffle-Market 🥕

## 🥕 당근마켓 클론 코딩 와플마켓 API 서버

- 당근마켓 기능을 클론 코딩한 와플마켓 API 서버입니다.
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
