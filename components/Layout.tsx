import { FC } from 'react';

import TopBar from '@/components/TopBar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Layout;
