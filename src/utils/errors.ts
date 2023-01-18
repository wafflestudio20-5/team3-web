import { toast } from 'react-toastify';

export const redirectWithMsg = (
  sec: number,
  message: string,
  func: () => void,
) => {
  toast.error(message);
  setTimeout(() => {
    func();
  }, sec * 1000);
};
