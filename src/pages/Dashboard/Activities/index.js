import { useState } from 'react';
import { LocalBoard } from '../../../components/Dashboard/Activities/LocalBoard';
import Splash from '../../../components/Splash';
import useGetActivities from '../../../hooks/api/useActivities';
import useGetActivitiesLocals from '../../../hooks/api/useActivitiesLocals';

export default function Activities() {
  const { activities, activitiesLoading } = useGetActivities();
  const { activitiesLocals, activitiesLocalsLoading } = useGetActivitiesLocals();
  const [filteredActivities, setFilteredActivities] = useState([]); // AS ATIVIDADES PARA FILTRAR POR DIA
  if (activitiesLoading||activitiesLocalsLoading) {
    return <Splash loading />;
  }
  console.log(activities);
  return (
    <>
      {/*  <>Compotente que mostra os dias para filtrar</> */}
      {/* aqui vai ter um ternário, se não tiver activity filtrada e selecionada não vai renderizar o LocalBoard */}
      <LocalBoard activities={/* filteredActivities */ activities} locals={activitiesLocals}  />
    </>
  );
}
