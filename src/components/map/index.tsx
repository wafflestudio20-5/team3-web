import { useEffect, useRef } from 'react';
import { Wrapper } from './map.styled';

const Map = () => {
  // TODO: 타입 정리
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { kakao }: any = window;

  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    // 지도 객체 생성하기
    const map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <>
      <Wrapper ref={mapRef}></Wrapper>
    </>
  );
};

export default Map;
