import { useEffect } from 'react';
import { Coordinate } from '../types/auth';

export const getCoordinate = (
  location: string,
  coordinate: Coordinate,
  setCoordinate: (input: Coordinate) => void,
) => {
  useEffect(() => {
    try {
      if (location && kakao.maps.services && kakao.maps.services.Places) {
        const ps = new kakao.maps.services.Places();

        // TODO: 데이터 타입 파악
        ps.keywordSearch(location, (data: any, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            if (data.length > 0) {
              const lat = data[0].y;
              const lng = data[0].x;
              setCoordinate({ lat, lng });
            } else {
              setCoordinate({ lat: 0, lng: 0 });
            }
          } else {
            setCoordinate({ lat: 0, lng: 0 });
          }
        });
      } else {
        setCoordinate({ lat: 0, lng: 0 });
      }
    } catch (err) {
      console.log(err);
      setCoordinate({ lat: 0, lng: 0 });
    }
  }, [location]);
};
