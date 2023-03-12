import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export function useBooking() {
  const token = useToken();
  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: postBooking,
  } = useAsync((roomId) => bookingApi.post(token, roomId), false);

  return {
    booking,
    bookingLoading,
    bookingError,
    postBooking,
  };
}
