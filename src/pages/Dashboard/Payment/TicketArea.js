import { useEffect, useState } from 'react';
import Splash from '../../../components/Splash';
import useTicketTypes from '../../../hooks/api/useTicketsType';
import Button from '../../../components/Button';
import styled from 'styled-components';
import Text from '../../../components/Text';
import { useTicket } from '../../../hooks/api/useTicket';
import ConfirmBooking from '../../../components/Dashboard/Payment/ConfirmBooking';

export default function TicketArea() {
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();
  const [selectedTicketType, setSelectedTicketType] = useState({});
  const { ticket } = useTicket();
  const [hotelPrice, setHotelPrice] = useState(0);
  if (ticketTypesLoading) {
    return <Splash loading />;
  }

  function hotel() {
    const presencialTickets = ticketTypes.filter((t) => !t.isRemote);
    setHotelPrice(Math.abs(presencialTickets[0].price - presencialTickets[1].price));
  }
  function bookTicket() {
    const ticket = ticketTypes.filter((t) => t.name === selectedTicketType.name);
    if (selectedTicketType.isRemote) {
      return ticket[0].id;
    }
  }

  return (
    <>
      <Text text={'Primeiro, escolha sua modalidade de ingresso'}></Text>
      <AlignBox2>
        {ticketTypes.map(
          (t) =>
            !t.includesHotel && (
              <Button
                text1={t.name}
                text2={t.price}
                width={145}
                key={t.id}
                onClick={() => setSelectedTicketType(t)}
              />
            )
        )}
      </AlignBox2>

      {selectedTicketType?.isRemote === false ? (
        <p onClick={hotel}> abre o componente de hospedagem</p>
      ) : selectedTicketType?.isRemote === true ? (
        <p onClick={bookTicket}><ConfirmBooking ticketType={selectedTicketType}/></p>
      ) : (
        <></>
      )}
    </>
  );
}

export const AlignBox2 = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
