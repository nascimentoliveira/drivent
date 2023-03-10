import HotelChoice from '../../../components/Dashboard/Hotel/HotelChoice';
import SelectHotel from '../../../components/Dashboard/Hotel/SelectHotel';

export default function Hotel() {
  return (
    <>
      <SelectHotel />
      <HotelChoice hotelId={1} />
    </>
  );
}
