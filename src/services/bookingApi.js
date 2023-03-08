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
