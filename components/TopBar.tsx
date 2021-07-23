import { useState } from 'react';
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import Menu from '@/components/Menu';
import { UserType } from '@/types/index';

interface ITopBar {
  user: UserType;
}

const TopBar = ({ user }: ITopBar) => {
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
    </>
  );
};

export default TopBar;
