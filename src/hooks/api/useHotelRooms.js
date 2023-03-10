import useAsync from '../useAsync';
import useToken from '../useToken';
import * as hotelApi from '../../services/hotelApi';
export function useHotelRooms(hotelId) {
  const token = useToken();
  const {
    data: hotelWithRooms,
    loading: hotelWithRoomsLoading,
    error: hotelWithRoomsError,
    act: getHotelWithRooms,
  } = useAsync(() => hotelApi.getRooms(token, hotelId));

  return {
    hotelWithRooms,
    hotelWithRoomsLoading,
    hotelWithRoomsError,
    getHotelWithRooms,
  };
}
