import api from './api';

export async function post(token, roomId) {
  const response = await api.post(
    '/booking',
    { roomId: roomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
