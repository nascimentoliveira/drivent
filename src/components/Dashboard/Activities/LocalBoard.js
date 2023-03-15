import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ActivityContainer } from './ActivityContainer';

export function LocalBoard({ activities, locals }) {
  return (
    <LocalsContainer>
      {locals.map((l) => (
        <Local key={l.id}>
          <h1>{l.name}</h1>
          <LocalBox locals={locals} l={l}>
            {activities.map((a) => a.ActivityLocal.id === l.id && <ActivityContainer key={a.id} activity={a} />)}
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
`;
const Local = styled.div`
  width: 100%;
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
  height: 60vh;
  border: 1px solid #d7d7d7;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
  }
  border-right: ${(props) => props.locals.indexOf(props.l) + 1 === props.locals.length || 'none'};
`;
