import styled from 'styled-components';

export const Dim = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000072;
  z-index: 1000;
  animation: modalBgShow 0.8s;
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  margin-bottom: 60px;
  padding: 32px 36px;
  gap: 8px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 15px;
  z-index: 1001;
  animation: modalShow 1s;
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
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
`;

export const Content = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const Info = styled.span`
  color: gray;
  font-size: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  right: 20px;
  align-self: center;
  justify-content: center;
  align-content: center;
  margin-top: 24px;
  gap: 12px;
`;

export const ConfirmButton = styled.button`
  background-color: #e78111;
  color: white;
  text-align: center;
  width: 56px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
`;

export const CancelButton = styled.button`
  background-color: #eaebee;
  color: black;
  text-align: center;
  width: 56px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
`;
