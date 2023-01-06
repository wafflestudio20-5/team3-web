import { useEffect, useState } from 'react';

export const getCoordinate = (location: string) => {
  const [coordinate, setCoordinate] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if (kakao.maps.services && kakao.maps.services.Places) {
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(location, (data: any, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          if (data.length > 0) {
            const lat = data[0].y;
            const lng = data[0].x;
            setCoordinate({ lat, lng });
          }
        }
      });
    }
  }, [location]);

  return coordinate;
};
