import { Menu as DefaultMenu, MenuItem, MenuSurfaceAnchor } from '@rmwc/menu';
import { useAuth } from '@/lib/auth';

interface IMenu {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const Menu = ({ open, setOpen }: IMenu) => {
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
