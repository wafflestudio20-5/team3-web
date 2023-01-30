import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentFooter from '../../components/content-footer';
import Gnb from '../../components/gnb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { neighborPost } from '../../types/neighborhood';
import { NeighborContainer } from './components/neighbor-contatiner';
import { Wrapper } from './neighbor-history.styled';

export const NeighborHistoryPage = () => {
  return (
    <Wrapper>
      <Gnb />
      <NeighborContainer />
      <ContentFooter />
    </Wrapper>
  );
};
