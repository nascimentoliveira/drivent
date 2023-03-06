import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketsApi';
export function useTicket() {
  const token = useToken();
  const { data: ticket, loading: ticketLoading, error: ticketError, act: getTickets } = useAsync(() => ticketApi.getTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTickets
  };
}
