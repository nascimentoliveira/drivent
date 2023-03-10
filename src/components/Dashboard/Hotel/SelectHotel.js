import styled from 'styled-components';
import Text from '../../Text';
import HotelCard from './HotelCard';

export default function SelectHotel({ hotels, selectedHotel, setSelectedHotel }) {
  return (
    <Container>
      <div className="subtitle">
        <Text text={'Primeiro, escolha seu hotel'}></Text>
      </div>

      <div className="hotels">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            hotel={hotel}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
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
