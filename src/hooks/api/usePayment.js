import useAsync from '../useAsync';
import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi';
import { useTicket } from '../api/useTicket';

export async function usePayment() {
  const token = useToken();
  // const { ticket, ticketLoading } = useTicket();

  // console.log(ticket);
  
  const ticketId = 39;
  const { 
    data: payment, 
    loading: paymentLoading, 
    error: paymentError, 
    act: getPaymentByTicketId 
  } = useAsync(() => paymentApi.getPayment(token, ticketId));
  
  return {
    payment,
    paymentLoading,
    paymentError,
    getPaymentByTicketId
  };
}
