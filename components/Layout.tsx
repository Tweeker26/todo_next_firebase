import { FC, ReactNode } from 'react';

import TopBar from '@/components/TopBar';
import { UserType } from '@/types/index';

interface ILayout {
  children: ReactNode;
  user: UserType;
}

const Layout: FC<ILayout> = ({ children, user }) => {
  return (
    <>
      <TopBar user={user} />
      {children}
    </>
  );
};

export default Layout;
