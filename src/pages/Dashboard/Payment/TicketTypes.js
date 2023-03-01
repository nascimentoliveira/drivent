import { useState } from 'react';
import Splash from '../../../components/Splash';
import useTicketTypes from '../../../hooks/api/useTickets';

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

  return (
    <>
      <h3>Primeiro,escolha sua modalidade de ingresso</h3>
      <button onClick={() => setSelectedTicketType('Online')}>Online</button>
      <button onClick={() => setSelectedTicketType('Presencial')}>Presencial</button>

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
