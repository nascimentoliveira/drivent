import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from '../../Form/Button';

export default function CreditCard() {
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    cardName: '',
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

  return (
    <>
      <PaymentCard>
        <div>
          <Cards
            cvc={cardData.cvc}
            expiry={cardData.expiry}
            focused={cardData.focus}
            name={cardData.cardName}
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
            {() => <Input 
              type="tel"
              maxLength="19"
              name="number"
              placeholder="Card Number" 
            />}
          </InputMask>
          <span>E.g.: 49..., 51..., 36..., 37...</span>

          <Input
            type="text"
            name="cardName"
            placeholder="Name"
            value={cardData.cardName}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <div>
            <InputMask
              mask="99/99"
              maskChar=""
              value={cardData.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            >
              {() => <ExpiryInput 
                type="tel"
                maxLength="5"
                name="expiry"
                placeholder="Valid Thru"
              />}
            </InputMask>

            <CVCInput
              type="tel"
              maxLength="4"
              name="cvc"
              placeholder="CVC"
              value={cardData.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </PaymentForm>
      </PaymentCard>
      
      <Button>FINALIZAR PAGAMENTO</Button>
    </>
  );
}

const PaymentCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 695px) {
    flex-direction: column;
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
    width: 100%;
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
  border-color: #8E8E8E;
  font-size: 17px;
    &::placeholder {
      color: #8E8E8E;
    }
`;

const ExpiryInput = styled(Input)`
  width: 100%;
`;
const CVCInput = styled(Input)`
  width: 50%;
  margin-left: 15px;
`;
