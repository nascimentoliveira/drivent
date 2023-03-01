import styled from 'styled-components';

export default function Text({ text }) { 
  return <TextStyle>{`${text}`}</TextStyle>;
}

const TextStyle = styled.p`
font-family: "Roboto";
font-weight: 400;
font-size: 20px;
line-height: 23.44px;
color: #8E8E8E;
`;

