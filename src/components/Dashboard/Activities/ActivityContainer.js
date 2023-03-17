import styled from 'styled-components';
import { RiLoginBoxLine } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import dayjs from 'dayjs';
export function ActivityContainer({ activity, capacity }) {
  const height = (new Date(activity.endsAt).getTime() - new Date(activity.startsAt).getTime()) / 3600000;
  return (
    <ActivityBox height={height}>
      <EventData>
        <h2>{activity.name}</h2>
        <p>
          {dayjs(activity.startsAt).add(3, 'hours').format('HH:mm')}-
          {dayjs(activity.endsAt).add(3, 'hours').format('HH:mm')}
        </p>
      </EventData>
      <CapacityContainer activity={activity} capacity={capacity}>
        {capacity - activity.ActivityRegistration.length > 0 ? (
          <>
            <RiLoginBoxLine color="#078632" />
            <p>{capacity - activity.ActivityRegistration.length} vagas </p>
          </>
        ) : (
          <>
            <AiOutlineCloseCircle color="#CC6666" />
            <p> Esgotado </p>
          </>
        )}
      </CapacityContainer>
    </ActivityBox>
  );
}

const EventData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  width: 80%;
  border-right: 1px solid #cfcfcf;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
  p {
    margin-top: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
`;
const CapacityContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: ${(props) => props.capacity - props.activity.ActivityRegistration.length > 0 ? '#078632' : '#CC6666'};
  }
`;
const ActivityBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  min-height: ${(props) => props.height * 80 + (props.height - 1) * 10}px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 10px;
`;
