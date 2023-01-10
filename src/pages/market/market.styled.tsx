import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 210px));
  column-gap: 30px;
  row-gap: 80px;
  width: 80%;
  max-width: 1600px;
  align-content: center;
  justify-content: center;
  padding: 30px 60px;
`;

export const Title = styled.h2``;

export const AddButton = styled.img`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;
`;
