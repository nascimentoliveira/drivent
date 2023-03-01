import { useState } from 'react';
import Splash from '../../../components/Splash';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketTypes from './TicketTypes';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const [isReserved, setIsReserved] = useState(false); // aqui irei criar um hook para ver se tem ticket reservado no banco de dados
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
  if (isReserved) {
    return <> Página de pagamento</>;
  }
  return (
    <>
      <StyledTypography variant="h4">Inscrição e pagamento</StyledTypography>
      <Text text={'Primeiro, escolha sua modalidade de ingresso'}></Text>
      <TicketTypes />
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
