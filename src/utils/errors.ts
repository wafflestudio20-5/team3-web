import { normalToast } from './basic-toast-modal';

export const redirectWithMsg = (
  sec: number,
  message: string,
  func: () => void,
) => {
  normalToast(message);
  setTimeout(() => {
    func();
  }, sec * 1000);
};
