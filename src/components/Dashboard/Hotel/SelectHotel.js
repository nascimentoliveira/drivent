import styled from 'styled-components';
import Text from '../../Text';
import HotelCard from './HotelCard';

export default function SelectHotel() {
  return (
    <Container>
      <div className="subtitle">
        <Text text={'Primeiro, escolha seu hotel'}></Text>
      </div>

      <div className="hotels">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
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
