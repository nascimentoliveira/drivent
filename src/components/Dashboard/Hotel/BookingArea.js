import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import { getHotel } from '../../../services/hotelApi';
import SelectHotel from './SelectHotel';
import RoomChoice from './RoomChoice';

export default function BookingArea({ setBookingSummary, changeInProgress, setChangeInProgress, booking }) {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState();
  const token = useToken();

  useEffect(async() => {
    setHotels(await getHotel(token));
  }, []);

  return (
    <>
      <SelectHotel 
        hotels={hotels}
        selectedHotel={selectedHotel}
        setSelectedHotel={setSelectedHotel} 
      />

      {selectedHotel?.id !== undefined &&
        <RoomChoice 
          hotelId={selectedHotel.id} 
          setBookingSummary={setBookingSummary} 
          changeInProgress={changeInProgress}
          setChangeInProgress={setChangeInProgress}
          booking={booking}
        />
      }
    </>
  );
}
