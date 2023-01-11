// DESC: 타입 예시
export interface LoginRequest {
  email: string;
  password: string;
  username: string;
  location?: string;
  coordinate?: Coordinate;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}
