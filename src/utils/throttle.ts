export const throttle = (func: any, timeout: number) => {
  let timer: any;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func();
      }, timeout);
    }
  };
};
