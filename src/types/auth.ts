// DESC: 타입 예시
export interface LoginRequest {
  email: string;
  password: string;
  username: string;
  location?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}