import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Text from '../../Text';
import HotelCard from './HotelCard';

export default function HotelBooking() {
  return (
    <Container>
      <Typography variant="h4">Escolha de hotel e quarto</Typography>
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

  .subtitle {
    margin-top: 10px;
  }

  .hotels {
    display: flex;
    overflow-x: scroll;
  }
`;
