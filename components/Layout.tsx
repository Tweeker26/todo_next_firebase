import React, { FC, useState } from 'react';
import firebase from 'firebase/app';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarActionItem,
} from '@rmwc/top-app-bar';
import Menu from './Menu';

interface ILayout {
  children: React.ReactNode;
  user: firebase.User | null | undefined;
}

const Layout: FC<ILayout> = ({ children, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarTitle>Todo Next With Firebase</TopAppBarTitle>
          </TopAppBarSection>

          {Boolean(user) && (
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="menu" onClick={() => setOpen(true)} />
              <Menu open={open} setOpen={setOpen} />
            </TopAppBarSection>
          )}
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />

      {children}
    </>
  );
};

export default Layout;
