import api from './api';
import { getTicket } from './ticketsApi';

export async function save(ticketId, cardData, token) {
  const response = await api.post('/payments/process', { ticketId, cardData }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getPayment(token) {
  const ticket = await getTicket(token);
  const response = await api.get(`/payments?ticketId=${ticket.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
