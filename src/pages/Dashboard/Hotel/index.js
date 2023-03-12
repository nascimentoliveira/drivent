import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import HotelArea from '../../../components/Dashboard/Hotel/HotelArea';
import usePayment from '../../../hooks/api/usePayment';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Splash from '../../../components/Splash';
import HotelSummary from '../../../components/Dashboard/Hotel/HotelSummary';
import useGetBooking from '../../../hooks/api/useGetBooking';
import ChangeRoom from '../../../components/Dashboard/Hotel/ChangeRoom';

export default function Hotel() {
  const { payment, paymentLoading } = usePayment();
  const { booking, getBooking } = useGetBooking();
  const [bookingSummary, setBookingSummary] = useState(false);
  const [changeInProgress, setChangeInProgress] = useState(false);
  let forbiddenErrorMessage;

  useEffect(async() => {
    await getBooking();
  }, [bookingSummary, changeInProgress]);

  if (paymentLoading) {
    return <Splash loading />;
  }

  if(!payment) {
    forbiddenErrorMessage = 'Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem';
  }

  if(!payment.Ticket.TicketType.includesHotel) {
    forbiddenErrorMessage = 'Sua modalidade de ingresso não inclui hospedagem, prossiga para a escolha de atividades';
  }

  if(forbiddenErrorMessage) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <AlignBox>
          <TextBox>
            <Text text={forbiddenErrorMessage}></Text>
          </TextBox>
        </AlignBox>
      </>
    ); 
  }

  return (
    <>
      {changeInProgress ? 
        <Typography variant="h4">Escolha seu novo hotel e quarto</Typography> 
        : 
        <Typography variant="h4">Escolha de hotel e quarto</Typography>
      }

      {!booking || changeInProgress ? 
        <HotelArea 
          setBookingSummary={setBookingSummary} 
          changeInProgress={changeInProgress} 
          setChangeInProgress={setChangeInProgress}
          booking={booking}
        /> 
        : 
        <>
          <HotelSummary booking={booking} />
          <ChangeRoom setChangeInProgress={setChangeInProgress} />
        </>
      }
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
