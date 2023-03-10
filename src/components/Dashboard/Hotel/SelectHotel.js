import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../../Text';
import HotelCard from './HotelCard';
import useToken from '../../../hooks/useToken';
import { getHotel } from '../../../services/hotelApi';

export default function SelectHotel() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(0);
  const token = useToken();

  function selectHotel(id) {
    if (id !== 0 && selectedHotelId !== id) {
      setSelectedHotelId(id);
      return;
    }
  }

  async function listHotels() {
    setHotels(await getHotel(token));
  }

  useEffect(() => {
    listHotels();
  }, [selectedHotelId]);

  return (
    <Container>
      <div className="subtitle">
        <Text text={'Primeiro, escolha seu hotel'}></Text>
      </div>

      <div className="hotels">
        {hotels.map((value, index) => (
          <HotelCard
            key={index}
            id={value.id}
            selectHotel={selectHotel}
            selectedHotelId={selectedHotelId}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;

  .subtitle {
    margin-top: 20px;
  }

  .hotels {
    display: flex;
    overflow-x: scroll;
  }
`;
