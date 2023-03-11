import api from './api';

export async function save(ticketId, cardData, token) {
  const response = await api.post('/payments/process', { ticketId, cardData }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getPayment(token, ticketId) {
  const response = await api.get(`/payments?ticketId=${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
