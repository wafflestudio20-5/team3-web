// DESC: 전체 주소를 동 단위 까지만 표기되도록 변환
export const shortenLocation = (fullLocation: string) => {
  const arr = fullLocation.split(' ');
  let dongIdx = 0;
  arr.forEach((word, i) => {
    if (word.slice(-1) === '동') {
      dongIdx = i;
    }
  });
  const result = arr.slice(0, dongIdx + 1).join(' ');
  return result;
};

export const getDong = (fullLocation: string) => {
  const arr = fullLocation.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(-1) === '동') {
      return arr[i];
    }
  }
};
