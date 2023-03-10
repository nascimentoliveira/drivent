import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HotelCard({ id, selectedHotelId, selectHotel }) {
  const [selected, setSelected]= useState(false);

  useEffect(() => {
    if (selectedHotelId === id) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedHotelId]);

  return (
    <>
      <HotelContainer selected={selected} onClick={() => {selectHotel(id);}}>
        <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/2680156-belo-luxo-guarda-sol-e-cadeira-ao-redor-piscina-externa-no-hotel-e-resort-com-coqueiro-palmeira-no-ceu-azul-gratis-foto.jpg" alt="hotel" />
        <h5>Driven Resort</h5>
        <Info>
          <h6>Tipos de acomodação:</h6>
          <p>Single e double</p>
          <h6>Vagas disponíveis:</h6>
          <p>102</p>
        </Info>
      </HotelContainer>
    </>
  );
}

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${props => (props.selected ? '#FFEED2' : '#EBEBEB')};
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

const Info = styled.div`
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
