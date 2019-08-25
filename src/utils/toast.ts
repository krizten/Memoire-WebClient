import { toast } from 'react-toastify';

interface ToastNotification {
  message: string;
  position?:
    | 'top-center'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-left';
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error' | 'default';
}

export const notify = ({
  message,
  position = 'top-right',
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  type = 'default',
}: ToastNotification) => {
  toast(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    type,
  });
};
