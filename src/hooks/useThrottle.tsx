import { useCallback, useRef } from 'react';

// DESC: custom hook 예시
const useThrottle = () => {
  const task = useRef<(() => void) | null>(null);

  return useCallback((func: () => void, time: number) => {
    if (!task.current) {
      setTimeout(() => {
        task.current?.();
        task.current = null;
      }, time);
    }

    task.current = func;
  }, []);
};

export default useThrottle;
