import styled from 'styled-components';
import { BsPerson, BsFillPersonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export default function RoomContainer({ room, setChoosenRoom, choosenRoom, alreadyBooked }) {
  const [availableRooms, setAvailableRooms] = useState(room.capacity - room.Booking.length);
  const crowdedRoom = room.capacity === room.Booking.length;

  console.log('RoomContainer');

  useEffect(() => {  
    if (room.id === choosenRoom) {
      setAvailableRooms(room.capacity - room.Booking.length - 1);
    } else {
      setAvailableRooms(room.capacity - room.Booking.length);
    }
  }, [choosenRoom]);
  
  return (
    <Room
      choosenRoom={choosenRoom}
      room={room}
      disabled={ crowdedRoom || alreadyBooked }
      title={crowdedRoom ? 'Não há vagas neste quarto' : alreadyBooked ? 'Este é o seu quarto atual' : 'Clique para selecionar este quarto'}
      onClick={() => setChoosenRoom(room.id)}
    >
      <p>{room.name}</p>
      <div>
        {[...Array(availableRooms)].map((_, index) => (
          <BsPerson key={index} size="20px" />
        ))}
        {room.id === choosenRoom && <BsFillPersonFill color="#FF4791" size="20px" />}
        {[...Array(room.Booking.length)].map((_, index) => (
          <BsFillPersonFill key={index} size="20px" />
        ))}
      </div>
    </Room>
  );
}

const Room = styled.button`
  box-sizing: border-box;
  border: none;
  background: ${(props) => (props.choosenRoom === props.room.id ? '#FFEED2' : 'none')};
  box-shadow: none;
  padding: 0 13px;
  display: flex;
  box-sizing: border-box;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin: 0 17px 8px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #454545;
  }
  :disabled {
    background: #e9e9e9;
    border: 1px solid #cecece;
    cursor: not-allowed;
    p {
      color: #9d9d9d;
    }
  }
`;
