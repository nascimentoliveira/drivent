import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function HotelCard({ hotel, selectedHotel, setSelectedHotel }) {
  const [accommodation, setAccommodation] = useState('');
  const [vacancies, setVacancies] = useState(0);
  let options = {
    single: false,
    double: false,
    triple: false
  };

  useEffect(() => {
    roomsCapacity(hotel);
    roomVacancies(hotel);
  }, []);

  function roomsCapacity(hotel) {
    let types = [];
    hotel.Rooms.forEach((r) => {
      if (!types.includes(r.capacity)) {
        types.push(r.capacity);
      }
    });
    typesAccommodation(types);
  }

  function typesAccommodation(types) {
    if (types.includes(1) && options.single === false) {
      setAccommodation(prevAccommodation => prevAccommodation + 'Single ');
      options.single = true;
    }
    if (types.includes(2) && options.double === false) {
      setAccommodation(prevAccommodation => prevAccommodation + 'Double ');
      options.double = true;
    }
    if(types.includes(3) && options.triple === false) {
      setAccommodation(prevAccommodation => prevAccommodation + 'Triple ');
      options.triple = true;
    }
    if(options.single === true && options.double === true) {
      setAccommodation('Single e Double');
    }
    if(options.single === true && options.triple === true) {
      setAccommodation('Single e Triple');
    }
    if(options.double === true && options.triple === true) {
      setAccommodation('Double e Triple');
    }
    if(options.single === true && options.double === true && options.triple === true) {
      setAccommodation('Single, Double e Triple');
    }
  }

  function roomVacancies(hotel) {
    let vacancies = 0;
    hotel.Rooms.forEach((r) => {
      vacancies += r.capacity;
    });
    let booking = 0;
    hotel.Rooms.forEach((r) => {
      booking += r.Booking?.length;
    });
    setVacancies(vacancies - booking);
  }

  return (
    <>
      <HotelContainer selectedHotel={selectedHotel} hotel={hotel} onClick={() => setSelectedHotel(hotel)}>
        <img src={hotel.image} alt="hotel" />
        <h5>{hotel.name}</h5>
        <Info>
          <h6>Tipos de acomodação:</h6>
          <p>{accommodation}</p>
          <h6>Vagas disponíveis:</h6>
          <p>{vacancies}</p>
        </Info>
      </HotelContainer>
    </>
  );
}

export const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => (props.selectedHotel?.id === props.hotel.id ? '#FFEED2' : '#EBEBEB')};
  border-radius: 10px;
  padding: 16px 14px;
  margin: 20px 19px 19px 0px;
  cursor: pointer;

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

export const Info = styled.div`
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 14px;
  margin-top: 10px;

  h6 {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    word-wrap: break-word;
  }

  p {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    word-wrap: break-word;
    margin: 5px 0px 10px 0px;
  }
`;
