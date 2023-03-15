import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activitiesApi from '../../services/activitiesApi';
export default function useGetActivitiesLocals() {
  const token = useToken();

  const {
    data: activitiesLocals,
    loading: activitiesLocalsLoading,
    error: activitiesLocalsError,
    act: getActivitiesLocals,
  } = useAsync(() => activitiesApi.getActivitiesLocals(token));

  return {
    activitiesLocals,
    activitiesLocalsLoading,
    activitiesLocalsError,
    getActivitiesLocals,
  };
}
