// DESC: 타입의 경우 무조건 string, String 타입 캐스팅이 필요하다면 호출부에서 캐스팅
export const toStringNumberWithComma = (input?: string) => {
  if (!input) return '';
  return input.replace(
    /(\..*)$|(\d)(?=(\d{3})+(?!\d))/g,
    (digit, fract) => fract || digit + ',',
  );
};

// DESC: 타입의 경우 무조건 string, String 타입 캐스팅이 필요하다면 호출부에서 캐스팅
export const toNumberWithoutComma = (input?: string) =>
  Number(input?.replace(/,/g, ''));
