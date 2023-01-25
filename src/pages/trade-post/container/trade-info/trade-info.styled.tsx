import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  padding: 0 20px 10px 20px;
  border-bottom: 2px solid #eaebee;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #acacac;
  margin-left: 8px;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  padding: 0 20px;
  border-bottom: 2px solid #eaebee7c;
  padding-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: auto;
  cursor: pointer;
  &:hover {
    color: #909090;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
`;

export const Username = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #212529;
`;

export const Location = styled.h5`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #212529;
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SampleImg = styled.img`
  width: 100%;
  height: 36vh;
  border-radius: 10px;
  margin-bottom: 30px;
  object-fit: cover;
`;
