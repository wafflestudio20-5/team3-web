import { toast } from 'react-toastify';

export const normalToast = (msg: string) => {
  toast(`🥕 ${msg}`, {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};
