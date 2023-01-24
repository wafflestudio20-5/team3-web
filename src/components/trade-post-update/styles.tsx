import styled from 'styled-components';

export const ModalOuterLayout = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  align-items: center;
  justify-content: center;
`;

export const ModalLayout = styled.div`
  width: 712px;
  min-width: 360px;
  height: auto;
  background: #fff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 22px;
  margin-top: 3px;
  border-bottom: 0.5px solid #a9a9a9;
`;

export const ModalTitle = styled.span`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 17px;
  color: #000000;
`;

export const ModalClose = styled.button`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 17px;
  color: #494949;
`;

export const ModalSubmit = styled.button`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 17px;
  color: #e78111;
`;

export const PostTitle = styled.input`
  font-family: 'Inter';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 22px;
  margin-top: 3px;
  border: none;
  border-bottom: 0.5px solid #a9a9a9;
  font-size: 15px;
  color: #212124;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a1a1a1;
  }
`;

export const PostDesc = styled.textarea`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  flex-grow: 1;
  padding: 18px 22px;
  resize: none;
  font-size: 15px;
  border: none;
  outline: none;
  color: #212124;
  overflow: auto;

  &::placeholder {
    color: #a1a1a1;
  }
`;

export const PostPriceWrapper = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #a9a9a9;
`;

export const PostPriceUnit = styled.span`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  color: #a2a2a2;
  padding: 0 22px;
`;

export const PostPrice = styled.input`
  font-family: 'Inter';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 0 22px 0 0;
  border: none;

  font-size: 15px;
  color: #212124;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a1a1a1;
  }
`;

export const PostAnnounceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 18px 22px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  display: flex;
  color: #d27e22;
`;

export const Emphasize = styled.h5`
  font-weight: 600;
`;

export const Announce = styled.h5``;
