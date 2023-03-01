import Splash from '../../../components/Splash';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  if (!enrollment) {
    return 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  }
  if (enrollmentLoading) {
    return <Splash loading />;
  }

  return 'Pagamento: Em breve!';
}
