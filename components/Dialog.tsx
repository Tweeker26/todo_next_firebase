import { DialogOnCloseEventT } from 'rmwc';
import {
  Dialog as DefaultDialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle,
} from '@rmwc/dialog';

interface IDialog {
  open: boolean;
  setOpen: (arg0: string | null) => void;
  title: string;
  content: string;
  action: () => void;
}

const Dialog = ({ open, setOpen, title, content, action }: IDialog) => {
  const handleClose = (e: DialogOnCloseEventT) => {
    if (e.detail.action === 'accept') {
      action();
    }
    setOpen(null);
  };
  return (
    <DefaultDialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <DialogButton action="close">Cancel</DialogButton>
        <DialogButton action="accept" isDefaultAction>
          Confirm delete!
        </DialogButton>
      </DialogActions>
    </DefaultDialog>
  );
};

export default Dialog;
