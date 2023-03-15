import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesLocals(token) {
  const response = await api.get('/activities/locals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
