import { useEffect, useState } from 'react';
import { LocalBoard } from '../../../components/Dashboard/Activities/LocalBoard';
import Splash from '../../../components/Splash';
import useGetActivities from '../../../hooks/api/useActivities';
import { Typography } from '@material-ui/core';
import usePayment from '../../../hooks/api/usePayment';
import Text from '../../../components/Text';
import styled from 'styled-components';
import EventDays from '../../../components/Dashboard/Activities/EventDays';

export default function Activities() {
  const { activities, activitiesLoading } = useGetActivities();
  const { payment, paymentLoading } = usePayment();
  const [selected, setSelected] = useState();
  let forbiddenErrorMessage;

  useEffect(() => {
  }, [selected]);

  if (paymentLoading || activitiesLoading) {
    return <Splash loading />;
  }

  if(!payment) {
    forbiddenErrorMessage = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
  } else if (!payment.Ticket.TicketType.includesHotel) {
    forbiddenErrorMessage = 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas atividades';
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
      <EventDays 
        activities={activities}
        selected={selected}
        setSelected={setSelected}
      /> 
      {selected && <LocalBoard locals={activities[selected]} />}
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
