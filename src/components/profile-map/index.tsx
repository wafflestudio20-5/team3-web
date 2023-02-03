import { useState, useEffect } from 'react';
import { Map, Circle, MapMarker } from 'react-kakao-maps-sdk';

interface ProfileMapProps {
  location: string | null;
}

const ProfileMap = ({ location }: ProfileMapProps) => {
  const [mapLocation, setMapLocation] = useState({
    // DESC: 서울대입구역
    y: 37.481277765,
    x: 126.95275023,
  });
  const [defaultMap, setDefaultMap] = useState<kakao.maps.Map | undefined>();

  useEffect(() => {
    if (defaultMap) {
      if (kakao.maps.services && kakao.maps.services.Places) {
        const ps = new kakao.maps.services.Places();

        // TODO: data 타입정보
        ps.keywordSearch(location, (data: any, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            if (data.length > 0) {
              const y = data[0].y;
              const x = data[0].x;
              setMapLocation({ y, x });
            }
          }
        });
      }
    }
  }, [defaultMap, setDefaultMap, location]);

  return (
    <Map
      center={{ lat: mapLocation.y, lng: mapLocation.x }}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        zIndex: 10,
      }}
      level={5}
      onCreate={setDefaultMap}
    >
      {/* TODO: Area 적용 버그잡기 */}
      <Circle
        center={{ lat: mapLocation.y, lng: mapLocation.x }}
        radius={120}
        strokeWeight={0}
        strokeColor={'#75B8FA'}
        strokeOpacity={2}
        strokeStyle={'solid'}
        fillColor={'#ffad60'}
        fillOpacity={0.7}
      />
      <MapMarker position={{ lat: mapLocation.y, lng: mapLocation.x }} />
    </Map>
  );
};

export default ProfileMap;
