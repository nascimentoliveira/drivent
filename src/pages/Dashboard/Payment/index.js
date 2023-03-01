import { useState } from 'react';
import Splash from '../../../components/Splash';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketTypes from './TicketTypes';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const [isReserved, setIsReserved] = useState(false);
  if (enrollmentLoading) {
    return <Splash loading />;
  }
  if (!enrollment) {
    return 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  }
  if (isReserved) {
    return <> Página de pagamento</>;
  }
  return <TicketTypes />;
}
