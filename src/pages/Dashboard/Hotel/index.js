import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import HotelArea from '../../../components/Dashboard/Hotel/HotelArea';
import usePayment from '../../../hooks/api/usePayment';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Splash from '../../../components/Splash';
import HotelSummary from '../../../components/Dashboard/Hotel/HotelSummary';
import useGetBooking from '../../../hooks/api/useGetBooking';

export default function Hotel() {
  const { payment, paymentLoading } = usePayment();
  const { booking, getBooking } = useGetBooking();
  const [bookingSummary, setBookingSummary] = useState(false);

  useEffect(async() => {
    await getBooking();
  }, [bookingSummary]);

  if (paymentLoading) {
    return <Splash loading />;
  }

  if(!payment) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <AlignBox>
          <TextBox>
            <Text text={'Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem'}></Text>
          </TextBox>
        </AlignBox>
      </>
    ); 
  }

  if(payment.Ticket.TicketType.includesHotel === false) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <AlignBox>
          <TextBox>
            <Text text={'Sua modalidade de ingresso não inclui hospedagem, prossiga para a escolha de atividades'}></Text>
          </TextBox>
        </AlignBox>
      </>
    );
  }

  return (
    <>
      <Typography variant="h4">Escolha de hotel e quarto</Typography>
      {!booking ? <HotelArea setBookingSummary={setBookingSummary} /> : <HotelSummary booking={booking} />}
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
