import Splash from '../../../components/Splash';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketTypes from './TicketTypes';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useTicket } from '../../../hooks/api/useTicket';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { ticket } = useTicket();
  console.log(ticket);
  if (enrollmentLoading) {
    return <Splash loading />;
  }
  if (!enrollment) {
    return (
      <>
        <StyledTypography variant="h4">Inscrição e pagamento</StyledTypography>
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
      <StyledTypography variant="h4">Inscrição e pagamento</StyledTypography>
      {ticket?.status === 'RESERVED' ? <> Página de pagamento</> : <TicketTypes />}
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
