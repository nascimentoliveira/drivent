import { toast } from 'react-toastify';
import { useBooking } from '../../../hooks/api/useBooking';
import { ConfirmBookingButton, ConfirmBookingStyle } from '../Payment/ConfirmBooking';
import useChangeRoom from '../../../hooks/api/useChangeBooking';
import styled from 'styled-components';
import Swal from 'sweetalert2';

export default function ConfirmRoom({ booking, roomId, setBookingSummary, changeInProgress, setChangeInProgress }) {
  const { bookingLoading, postBooking } = useBooking();
  const { changeRoomLoading, changeRoom } = useChangeRoom();
  
  async function submit(event, roomId) {
    event.preventDefault();
    if (changeInProgress) {
      await(Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Deseja realmente trocar de quarto?',
        showCancelButton: true,
        cancelButtonText: 'Não, continuar com anterior',
        confirmButtonText: 'Sim, desejo alterar',
        confirmButtonColor: '#636C74',
        cancelButtonColor: '#EA8F8F',
      })).then(async(result) => {
        try { 
          if (result.isConfirmed) {
            await changeRoom(booking.id, roomId);
            toast('Seu quarto foi alterado com sucesso!');
            setChangeInProgress(false);
          } else {
            setChangeInProgress(false);
          }
        } catch (error) {
          toast('Não foi possível alterar o seu quarto!');
        }});
    } else {
      try {
        await postBooking(roomId);
        setBookingSummary(true);
        toast('Seu quarto foi reservado com sucesso!');
      } catch (error) {
        toast('Não foi possível reservar o seu quarto!');
      }
    } 
  }

  return (
    <ConfirmBookingStyle>
      <Options>
        { changeInProgress && 
          <ConfirmBookingButton
            className='cancel' 
            onClick={() => setChangeInProgress(false)} 
            disabled={(bookingLoading || changeRoomLoading)}
          >
            CANCELAR
          </ConfirmBookingButton>
        }

        <ConfirmBookingButton onClick={(e) => submit(e, roomId)} disabled={(bookingLoading || changeRoomLoading)}>
          {changeInProgress ? 'CONFIRMAR TROCA' : 'RESERVAR QUARTO'}
        </ConfirmBookingButton>
      </Options>
    </ConfirmBookingStyle>
  );
}

const Options = styled.div`
  width: 100%;
  display: flex;

  .cancel {
    background-color: #EA8F8F;
  }
`;
