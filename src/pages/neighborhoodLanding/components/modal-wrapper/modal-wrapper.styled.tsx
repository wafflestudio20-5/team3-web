// DESC: 아직 PR에 있는 코드를 pull 받지 못하여, PR #30에 있는 코드를 그대로 복사하였습니다..
// pull 이후 삭제할지 말지 결정하겠습니다. (변동사항 있으면 현재 파일에 코멘트 후 그대로 남겨두겠습니다.)

import styled from 'styled-components';

export const Dim = styled.div`
  min-width: 360px;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #00000072;
  z-index: 1000;
  animation: modalBgShow 0.3s;
  @keyframes modalBgShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FixedWrapper = styled.div`
  min-width: 360px;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  min-width: 350px;
  min-height: 100px;
  max-height: 600px;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 15px;
  z-index: 1001;
  animation: modalShow 0.3s;
  @keyframes modalShow {
    from {
      opacity: 0;
      margin-top: -100px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  // DESC: box shadow 추가
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
`;
