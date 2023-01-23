import { ReactElement } from 'react';

import Dim from './dim';
import * as S from './drawer.styled';
import { ReactComponent as QuitIcon } from '../../assets/quit.svg';

interface DrawerProps {
  active: boolean;
  children: ReactElement;
  handleToggleDrawer: () => void;
}

const Drawer = ({ active, children, handleToggleDrawer }: DrawerProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Container
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { width: '360px' }, close: { width: 0 } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <S.InnerWrapper>
            <S.QuitIconWrapper onClick={handleToggleDrawer}>
              <QuitIcon />
            </S.QuitIconWrapper>
            {children}
          </S.InnerWrapper>
        </S.Container>
      </S.Wrapper>
      {active && <Dim handleToggle={handleToggleDrawer} />}
    </>
  );
};

export default Drawer;
