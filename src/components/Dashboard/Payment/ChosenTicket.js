import styled from 'styled-components';
import Button from '../../Button';
import Splash from '../../Splash';
import Text from '../../Text';
import { useTicket } from '../../../hooks/api/useTicket';
import { AlignBox2 } from '../../../pages/Dashboard/Payment/TicketArea';
export default function ChosenTicket() {
  const { ticket, ticketLoading } = useTicket();
  if (ticketLoading) {
    return <Splash loading />;
  }
  function summaryTitle() {
    if (ticket.TicketType.isRemote) {
      return ticket.TicketType.name;
    }
    if (ticket.TicketType.includesHotel) {
      return `${ticket.TicketType.name} + Com Hotel `;
    }
    return `${ticket.TicketType.name} Sem Hotel `;
  }
  return (
    <ChosenTicketContainer>
      <Text text={'Ingresso Escolhido'}></Text>
      <AlignBox2>
        <Button
          text1={summaryTitle()}
          text2={ticket.TicketType.price}
          width={290}
          height={108}
          color={'#ffeed2'}
        />
      </AlignBox2>
    </ChosenTicketContainer>
  );
}

const ChosenTicketContainer = styled.div`
  margin-bottom: 20px;
`;
