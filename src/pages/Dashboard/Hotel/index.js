import HotelChoice from '../../../components/Dashboard/Hotel/HotelChoice';
import SelectHotel from '../../../components/Dashboard/Hotel/SelectHotel';
import { Typography } from '@material-ui/core';

export default function Hotel() {
  return (
    <>
      <Typography variant="h4">Escolha de hotel e quarto</Typography>
      <SelectHotel />
      <HotelChoice hotelId={1} />
    </>
  );
}
