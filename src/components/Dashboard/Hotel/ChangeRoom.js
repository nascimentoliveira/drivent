import { ConfirmBookingButton, ConfirmBookingStyle } from '../Payment/ConfirmBooking';

export default function ChangeRoom({ setChangeInProgress }) {
  return (
    <ConfirmBookingStyle>
      <ConfirmBookingButton onClick={() => setChangeInProgress(true)}>
        TROCAR DE QUARTO
      </ConfirmBookingButton>
    </ConfirmBookingStyle>
  );
}
