import { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

type ConfirmModalProps = {
  isOpenConfirmModal: boolean;
  handleCloseModal: () => void;
  handleConfirmDelete: () => void;
  handleRejectDelete: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpenConfirmModal,
  handleCloseModal,
  handleConfirmDelete,
  handleRejectDelete,
}) => {
  return (
    <Dialog
      open={isOpenConfirmModal}
      onClose={handleCloseModal}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {'Are you sure you want to delete it?'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => handleConfirmDelete()}>Yes</Button>
        <Button onClick={() => handleRejectDelete()} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
