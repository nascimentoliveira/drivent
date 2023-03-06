import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import useSavePayment from '../../../hooks/api/useSavePayment';
import Button from '../../Form/Button';
import Text from '../../Text';
import ConfirmPayment from './ConfirmPayment';
import ChosenTicket from './ChosenTicket';

export default function PaymentArea({ ticket, getTickets }) {
  const { savePayment } = useSavePayment();
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  function handleInputFocus(e) {
    const { name } = e.target;
    setCardData({ ...cardData, focus: name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      cvc: cardData.cvc,
      expiry: cardData.expiry,
      issuer: cardData.name,
      number: cardData.number,
    };

    try {
      if (
        cardData.number.length !== 19 ||
        cardData.cvc.length < 3 ||
        cardData.expiry.length < 5) {
        return toast('Dados do cartão incorretos ou incompletos!');
      }
      await savePayment(ticket?.id, body);
      getTickets();
      resetForm();
    } catch (error) {
      toast('Não foi possível efetuar o pagamento!');
    }
  }

  function resetForm() {
    setCardData({
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    });
  }

  return (
    <>
      {ticket?.status === 'RESERVED' ? (
        <>
          <ChosenTicket />
          <Text text={'Pagamento'}></Text>
          <PaymentCard>
            <div>
              <Cards
                cvc={cardData.cvc}
                expiry={cardData.expiry}
                focused={cardData.focus}
                name={cardData.name}
                number={cardData.number}
              />
            </div>

            <PaymentForm>
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=""
                value={cardData.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              >
                {() => <Input type="tel" maxLength="19" name="number" placeholder="Card Number" required />}
              </InputMask>
              <span>E.g.: 49..., 51..., 36..., 37...</span>

              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={cardData.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />

              <div>
                <InputMask
                  mask="99/99"
                  maskChar=""
                  value={cardData.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                >
                  {() => <ExpiryInput type="tel" maxLength="5" name="expiry" placeholder="Valid Thru" required />}
                </InputMask>

                <CVCInput
                  type="tel"
                  maxLength="4"
                  name="cvc"
                  placeholder="CVC"
                  value={cardData.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </PaymentForm>
          </PaymentCard>
          <Button type="submit" onClick={handleSubmit}>FINALIZAR PAGAMENTO</Button>
        </>
      ) : (
        <ConfirmPayment />
      )}
    </>
  );
}

const PaymentCard = styled.div`
  display: flex;
  margin: 15px 0px 10px 0px;
  @media (max-width: 695px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    div {
      margin-bottom: 10px;
    }
  }
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 300px;
  @media (max-width: 695px) {
    width: 290px;
    margin-left: 0px;
  }
  span {
    margin: -12px 0px 15px 0px;
    font-size: 15px;
    color: #999999;
  }
  div {
    display: flex;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #8e8e8e;
  font-size: 17px;
  &::placeholder {
    color: #8e8e8e;
  }
`;

const ExpiryInput = styled(Input)`
  width: 100%;
`;
const CVCInput = styled(Input)`
  width: 50%;
  margin-left: 15px;
`;
