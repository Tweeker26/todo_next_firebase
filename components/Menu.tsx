import { Menu as DefaultMenu, MenuItem, MenuSurfaceAnchor } from '@rmwc/menu';
import { useAuth } from '@/lib/auth';

const Menu = ({ open, setOpen }: any) => {
  const auth = useAuth();

  const closeHandler = () => {
    auth?.signOut();
    setOpen(false);
  };

  return (
    <MenuSurfaceAnchor>
      <DefaultMenu open={open} onClose={closeHandler}>
        <MenuItem>Logout</MenuItem>
      </DefaultMenu>
    </MenuSurfaceAnchor>
  );
};

export default Menu;
