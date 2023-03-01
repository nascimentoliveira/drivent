import Splash from '../../../components/Splash';
import Text from '../../../components/Text';
import useEnrollment from '../../../hooks/api/useEnrollment';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../../../components/Button';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
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
      <Text text={'Primeiro, escolha sua modalidade de ingresso'}></Text>
      <AlignBox2>
        <Button text1={'Presencial'} text2={'R$ 200'}></Button>
        <Button text1={'Online'} text2={'R$ 150'}></Button>
      </AlignBox2>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const TextBox = styled.div`
width:388px;
height: 46px;
text-align: center;
`;

const AlignBox = styled.div`
height: 440px;
display: flex;
justify-content: center;
align-items: center;
`;

const AlignBox2 = styled.div`
margin-top: 17px;
display: flex;
flex-direction: row;
align-items: center;
`;
