import { Menu as DefaultMenu, MenuItem, MenuSurfaceAnchor } from '@rmwc/menu';
import { useAuth } from '@/lib/auth';

const Menu = ({ open, setOpen }: any) => {
  const auth = useAuth();

  const closeHandler = () => {
    setOpen(false);
  };

  const onSelectHandler = () => {
    auth?.signOut();
  };

  return (
    <MenuSurfaceAnchor>
      <DefaultMenu open={open} onClose={closeHandler} onSelect={onSelectHandler}>
        <MenuItem>Logout</MenuItem>
      </DefaultMenu>
    </MenuSurfaceAnchor>
  );
};

export default Menu;
