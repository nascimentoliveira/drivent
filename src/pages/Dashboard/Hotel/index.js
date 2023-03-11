import { Typography } from '@material-ui/core';
import HotelArea from '../../../components/Dashboard/Hotel/HotelArea';
import { usePayment } from '../../../hooks/api/usePayment';
import Text from '../../../components/Text';
import styled from 'styled-components';
import Splash from '../../../components/Splash';

export default function Hotel() {
  const { payment, paymentLoading } = usePayment();

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

  return (
    <>
      <Typography variant="h4">Escolha de hotel e quarto</Typography>
      <HotelArea />
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
