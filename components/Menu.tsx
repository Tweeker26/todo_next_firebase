import { Menu as DefaultMenu, MenuItem, MenuSurfaceAnchor } from '@rmwc/menu';

const Menu = ({ open, setOpen }: any) => {
  return (
    <MenuSurfaceAnchor>
      <DefaultMenu open={open} onClose={() => setOpen(false)}>
        <MenuItem>Logout</MenuItem>
      </DefaultMenu>
    </MenuSurfaceAnchor>
  );
};

export default Menu;
