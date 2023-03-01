import Button from '../../../components/Button';
import Splash from '../../../components/Splash';
import Text from '../../../components/Text';
import { useTicket } from '../../../hooks/api/useTicket';
import { AlignBox2 } from './TicketArea';
export default function PaymentArea() {
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
    <>
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
    </>
  );
}
