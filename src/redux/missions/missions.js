const missionsUrl = 'https://api.spacexdata.com/v3/missions';
const SHOW_MISSIONS = 'space-travelers/missions/missions';

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});

const filteredMissions = (data) => {
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return showMissions(missions);
};

export const fetchMissions = () => (dispatch) => {
  fetch(`${missionsUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(filteredMissions(json)));
};

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    default:
      return state;
  }
}