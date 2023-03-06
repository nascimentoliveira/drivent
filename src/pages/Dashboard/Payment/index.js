import Splash from '../../../components/Splash';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketArea from './TicketArea';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useTicket } from '../../../hooks/api/useTicket';
import PaymentArea from '../../../components/Dashboard/Payment/PaymentArea';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { ticket, ticketLoading, getTickets } = useTicket();

  if (enrollmentLoading) {
    return <Splash loading />;
  }
  if (ticketLoading) {
    return <Splash loading />;
  }

  if (!enrollment) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <AlignBox>
          <TextBox>
            <Text text={'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso'}></Text>
          </TextBox>
        </AlignBox>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {!ticket ? <TicketArea />: <PaymentArea ticket={ticket} getTickets={getTickets} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const TextBox = styled.div`
  width: 388px;
  height: 46px;
  text-align: center;
`;

const AlignBox = styled.div`
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
