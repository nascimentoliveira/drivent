import styled from 'styled-components';
import { Info } from './HotelCard';
import Text from '../../Text';

export default function HotelSummary({ booking }) {
  let accommodationType = 'Single';
  let roommate = 0;

  if (booking) {
    if (+booking.Room.capacity === 2) {
      accommodationType = 'Double';
    }

    if (+booking.Room.capacity === 3) {
      accommodationType = 'Triple';
    }

    roommate = booking.Room.Booking.length - 1;
  }

  return (
    <OrderSummary>
      <div className="subtitle">
        <Text text={'Você já escolheu seu quarto'}></Text>
      </div>

      <HotelContainer>
        <img src={booking.Room.Hotel.image} alt="hotel" />
        <h5>{booking.Room.Hotel.name}</h5>
        <Info>
          <h6>Quarto reservado:</h6>
          <p>
            {booking.Room.name} ({accommodationType})
          </p>
          <h6>Pessoas no seu quarto:</h6>
          <p>{accommodationType === 'Single' || roommate === 0 ? 'Somente você' : `Você e mais ${roommate}`}</p>
        </Info>
      </HotelContainer>
    </OrderSummary>
  );
}

const OrderSummary = styled.div`
  .subtitle {
    margin-top: 20px;
  }
`;

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffeed2;
  border-radius: 10px;
  padding: 16px 14px;
  margin: 20px 19px 19px 0px;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  h5 {
    width: 100%;
    margin-bottom: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #343434;
    word-wrap: break-word;
  }
`;
