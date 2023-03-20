import styled from 'styled-components';
import { ConfirmBookingButton } from '../Payment/ConfirmBooking';
import Text from '../../Text';

export default function EventDays({ activities, selected, setSelected }) {
  return (
    <DaysContainer>
      {selected ? (
        ''
      ) : (
        <div className="subtitle">
          <Text text={'Primeiro, filtre pelo dia do evento: '}></Text>
        </div>
      )}

      <div className="days">
        {Object.keys(activities).map((value, index) => (
          <ButtonDays
            key={index}
            isSelected={value === selected}
            onClick={() => {
              setSelected(value);
            }}
          >
            {value}
          </ButtonDays>
        ))}
      </div>
    </DaysContainer>
  );
}

const DaysContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;

  .subtitle {
    margin: 20px 0px;
  }

  .days {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ButtonDays = styled(ConfirmBookingButton)`
  width: 130px;
  background-color: ${(props) => (props.isSelected ? '#FFD37D' : '#e0e0e0')};
  transition: 0.2;
  &:hover {
    background-color: ${(props) => (props.isSelected ? '#FFD37D' : '#efefef')};
  }
`;
