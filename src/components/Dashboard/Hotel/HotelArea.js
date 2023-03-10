import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import { getHotel } from '../../../services/hotelApi';
import SelectHotel from '../../../components/Dashboard/Hotel/SelectHotel';
import HotelChoice from '../../../components/Dashboard/Hotel/HotelChoice';

export default function HotelArea() {
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
        <HotelChoice hotelId={selectedHotel.id} />
      }
    </>
  );
}
