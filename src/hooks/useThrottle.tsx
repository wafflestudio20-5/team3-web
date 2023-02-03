import { useCallback, useRef, useState } from 'react';

// DESC: custom hook 예시
// const useThrottle = () => {
//   const task = useRef<(() => void) | null>(null);

//   return useCallback((func: () => void, time: number) => {
//     if (!task.current) {
//       setTimeout(() => {
//         task.current?.();
//         task.current = null;
//       }, time);
//     }

//     task.current = func;
//   }, []);
// };

// export default useThrottle;

interface Props {
  delay: number;
}

const useThrottle = (delay: number) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const throttle = useCallback(
    (cb: () => void) => {
      if (!isDisabled) {
        setIsDisabled(true);
        cb();
        setTimeout(() => {
          setIsDisabled(false);
        }, delay);
      }
    },
    [isDisabled, delay],
  );

  return { isDisabled, throttle };
};

export default useThrottle;
