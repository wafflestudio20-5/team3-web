import { useCallback, useEffect, useRef } from 'react';
import { Wrapper } from './map.styled';

const Map = () => {
  // TODO: 타입 정리
  const { kakao }: any = window;
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = useCallback(() => {
    if (mapRef.current) {
      const map = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
        level: 3,
      });
      // TODO: 확인용 콘솔, 제거
      console.log(map);
    }
  }, []);

  useEffect(() => {
    if (kakao) {
      initMap();
    }
  }, [initMap]);

  return (
    <>
      <Wrapper ref={mapRef}></Wrapper>
    </>
  );
};

export default Map;
