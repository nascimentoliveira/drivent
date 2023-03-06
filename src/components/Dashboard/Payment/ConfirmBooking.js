import styled from 'styled-components';
import { toast } from 'react-toastify';
import useSaveTicket from '../../../hooks/api/useSaveTicket';

export default function ConfirmBooking({ setPaymentArea, ticketType }) {
  const { loadingSaveTicket, saveTicket } = useSaveTicket();

  async function submit(event) {
    event.preventDefault();
    try {
      await saveTicket({ 'ticketTypeId': ticketType.id });
      setPaymentArea(true);
      toast('Seu ingresso foi reservado com sucesso!');
    } catch (error) {
      toast('Não foi possível reservar o seu ingresso!');
    }
  }

  return (
    <ConfirmBookingStyle>
      <ConfirmBookingMessage>
        Fechado! O total ficou em R$ {ticketType.price}. Agora é só confirmar:
      </ConfirmBookingMessage>
      <ConfirmBookingButton onClick={submit} disabled={loadingSaveTicket}>
        RESERVAR INGRESSO
      </ConfirmBookingButton>
    </ConfirmBookingStyle>
  );
}

const ConfirmBookingStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ConfirmBookingMessage = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-bottom: 17px;
`;

const ConfirmBookingButton = styled.button`
  width: 162px;
  height: 37px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  transition: 1s;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;

  &:hover {
    cursor: pointer;
    background-color: #EFEFEF;
  }
`;
