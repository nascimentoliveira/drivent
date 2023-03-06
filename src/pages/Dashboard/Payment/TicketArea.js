import { useState } from 'react';
import Splash from '../../../components/Splash';
import useTicketTypes from '../../../hooks/api/useTicketsType';
import Button from '../../../components/Button';
import styled from 'styled-components';
import Text from '../../../components/Text';
import ConfirmBooking from '../../../components/Dashboard/Payment/ConfirmBooking';

export default function TicketArea({ setPaymentArea }) {
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();
  const [selectedTicketType, setSelectedTicketType] = useState({});
  const [includesHotel, setIncludesHotel] = useState();
  const [hotelPrice, setHotelPrice] = useState(0);
  
  if (ticketTypesLoading) {
    return <Splash loading />;
  }

  function hotel() {
    const presencialTickets = ticketTypes.filter((t) => !t.isRemote);
    setHotelPrice(Math.abs(presencialTickets[0].price - presencialTickets[1].price));
  }

  return (
    <>
      <Text text={'Primeiro, escolha sua modalidade de ingresso'} />
      <AlignBox2>
        {ticketTypes.map(
          (t) => 
            !t.includesHotel && (
              <Button
                text1={t.name}
                text2={t.price}
                width={145}
                key={t.id}
                color={(selectedTicketType.id === t.id) ? '#FFEED2' : ''}
                onClick={() => {
                  setSelectedTicketType(t);
                  setIncludesHotel();
                  hotel();
                }}
              />
            )
        )}
      </AlignBox2>

      {selectedTicketType?.isRemote === false &&
        <>
          <Text text={'Ótimo! Agora escolha sua modalidade de hospedagem'} />
          <AlignBox2>
            {ticketTypes.map(
              (t) =>
                !t.isRemote && (
                  <Button
                    text1={t.includesHotel ? 'Com Hotel' : 'Sem Hotel'}
                    text2={t.includesHotel ? hotelPrice : 0}
                    width={145}
                    key={t.id}
                    color={includesHotel?.id === t.id ? '#FFEED2' : ''}
                    onClick={() => {
                      setIncludesHotel(t);
                    }}
                  />
                )
            )}
          </AlignBox2>
        </>
      }
      {selectedTicketType?.isRemote ? <ConfirmBooking setPaymentArea={setPaymentArea} ticketType={selectedTicketType}/> : 
        includesHotel ? <ConfirmBooking setPaymentArea={setPaymentArea} ticketType={includesHotel}/>: <></>}
    </>
  );
}

export const AlignBox2 = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 44px;
`;
