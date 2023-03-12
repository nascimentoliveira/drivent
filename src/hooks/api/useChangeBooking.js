import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useChangeRoom() {
  const token = useToken();

  const {
    loading: changeRoomLoading,
    error: changeRoomError,
    act: changeRoom
  } = useAsync((bookingId, roomId) => bookingApi.change(bookingId, roomId, token), false);

  return {
    changeRoomLoading,
    changeRoomError,
    changeRoom
  };
}
