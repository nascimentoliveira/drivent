import { useState } from 'react';
import Splash from '../../../components/Splash';
import useTicketTypes from '../../../hooks/api/useTickets';
import Button from '../../../components/Button';
import styled from 'styled-components';

export default function TicketTypes() {
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();
  const [selectedTicketType, setSelectedTicketType] = useState();
  if (ticketTypesLoading) {
    return <Splash loading />;
  }
  function bookTicket() {
    const ticket = ticketTypes.filter((t) => t.name === selectedTicketType);
    if (selectedTicketType === 'Online') {
      return ticket[0].id;
    }
  }
  console.log(selectedTicketType);
  return (
    <>
      <AlignBox2>
        {ticketTypes.map((t) => (
          <Button text1={t.name} text2={t.price} key={t.id} onClick={() => setSelectedTicketType(t.name)} />
        ))}
      </AlignBox2>

      {selectedTicketType === 'Presencial' ? (
        <p> abre o componente de hospedagem</p>
      ) : selectedTicketType === 'Online' ? (
        <p onClick={bookTicket}>abre componente reservar ingresso</p>
      ) : (
        <></>
      )}
    </>
  );
}

const AlignBox2 = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
