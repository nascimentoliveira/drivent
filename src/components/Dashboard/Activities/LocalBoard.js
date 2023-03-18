import styled from 'styled-components';
import { ActivityContainer } from './ActivityContainer';

export function LocalBoard({ locals }) {
  return (
    <LocalsContainer>
      {Object.keys(locals).map((value, index) => (
        <Local key={index}>
          <h1>{locals[value].name}</h1>
          <LocalBox isLast={Object.keys(locals).length-1 === index}>
            {locals[value].Activity.map((activity) => <ActivityContainer key={activity.id} activity={activity} capacity={locals[value].capacity} />)}
          </LocalBox>
        </Local>
      ))}
    </LocalsContainer>
  );
}
const LocalsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 70%;
`;

const Local = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
  }
`;

const LocalBox = styled.div`
  padding: 9px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #d7d7d7;
  overflow-y: auto;
  border-right: ${(props) => props.isLast || 'none'};

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
  }
  
`;
