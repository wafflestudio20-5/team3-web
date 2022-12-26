// DESC: 로컬 스토리지 사용 편리성을 위한 함수
export function saveItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function loadItem(key: string) {
  return localStorage.getItem(key);
}

export function saveObjItem(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadObjItem(key: string) {
  const value: string | null = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
}

export function clearItem(key: string): void {
  localStorage.removeItem(key);
}

export function clearAll() {
  localStorage.clear();
}
