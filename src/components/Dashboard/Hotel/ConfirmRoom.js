import { toast } from 'react-toastify';
import { useBooking } from '../../../hooks/api/useBooking';
import { ConfirmBookingButton, ConfirmBookingStyle } from '../Payment/ConfirmBooking';

export default function ConfirmRoom({ roomId, setBookingSummary }) {
  const { bookingLoading, postBooking } = useBooking();

  async function submit(event, roomId) {
    event.preventDefault();
    try {
      await postBooking(roomId);
      setBookingSummary(true);
      toast('Seu QUARTO foi reservado com sucesso!');
    } catch (error) {
      toast('Não foi possível reservar o seu QUARTO!');
    }
  }
  return (
    <ConfirmBookingStyle>
      <ConfirmBookingButton onClick={(e) => submit(e, roomId)} disabled={bookingLoading}>
        RESERVAR QUARTO
      </ConfirmBookingButton>
    </ConfirmBookingStyle>
  );
}
