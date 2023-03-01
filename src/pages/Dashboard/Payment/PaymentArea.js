import Button from '../../../components/Button';
import Splash from '../../../components/Splash';
import Text from '../../../components/Text';
import { useTicket } from '../../../hooks/api/useTicket';
import { AlignBox2 } from './TicketTypes';
export default function PaymentArea() {
  const { ticket, ticketLoading } = useTicket();
  if (ticketLoading) {
    return <Splash loading />;
  }
  return (
    <>
      <Text text={'Primeiro, escolha sua modalidade de ingresso'}></Text>
      <AlignBox2>
        <Button text1={ticket.TicketType.name} text2={ticket.TicketType.price} width={200} color={'#ffeed2'} />
      </AlignBox2>
    </>
  );
}
