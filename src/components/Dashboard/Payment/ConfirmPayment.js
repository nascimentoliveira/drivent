import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

export default function ConfirmPayment() {
  useEffect(() => {
    toast('O seu pagamento foi confirmado com sucesso!');
  }, []);

  return (
    <ConfirmPaymentStyle>
      Pagamento
      <div>
        <HiCheckCircle />
        <ConfirmPaymentMessage>
          <b>Pagamento confirmado!</b>
          <Link to='/dashboard/hotel'>
            <span>Prossiga para escolha de hospedagem e atividades</span>
          </Link>
        </ConfirmPaymentMessage>
      </div>
    </ConfirmPaymentStyle>
  );
}

const ConfirmPaymentStyle = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;

  > div {
    display: flex;
    align-items: center;
    margin: 15px 0;

    > svg {
      font-size: 60px;
      color: #36B853;
      margin-right: 12px;
    }
  }
`;

const ConfirmPaymentMessage = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #454545;
  display: flex;
  flex-direction: column;

  b {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
