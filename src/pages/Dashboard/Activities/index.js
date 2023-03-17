import { useState } from 'react';
import { LocalBoard } from '../../../components/Dashboard/Activities/LocalBoard';
import Splash from '../../../components/Splash';
import useGetActivities from '../../../hooks/api/useActivities';
import useGetActivitiesLocals from '../../../hooks/api/useActivitiesLocals';
import { Typography } from '@material-ui/core';
import usePayment from '../../../hooks/api/usePayment';
import Text from '../../../components/Text';
import styled from 'styled-components';

export default function Activities() {
  const { activities, activitiesLoading } = useGetActivities();
  const { activitiesLocals, activitiesLocalsLoading } = useGetActivitiesLocals();
  const [filteredActivities, setFilteredActivities] = useState([]); // AS ATIVIDADES PARA FILTRAR POR DIA
  const { payment, paymentLoading } = usePayment();
  let forbiddenErrorMessage;

  if (paymentLoading) {
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
  
  if (activitiesLoading||activitiesLocalsLoading) {
    return <Splash loading />;
  }
  
  return (
    <>
      {/*  <>Compotente que mostra os dias para filtrar</> */}
      {/* aqui vai ter um ternário, se não tiver activity filtrada e selecionada não vai renderizar o LocalBoard */}
      <LocalBoard activities={/* filteredActivities */ activities} locals={activitiesLocals}  />
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
