const apiUrl = 'https://api.spacexdata.com/v3/missions';
const SHOW_MISSIONS = 'space-travelers/missions/SHOW_MISSIONS';
const JOIN_MISSIONS = 'space-travelers/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'space-travelers/missions/LEAVE_MISSIONS';

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});
export const joinMission = (id) => ({
  type: JOIN_MISSIONS,
  id,
});
export const leaveMission = (id) => ({
  type: LEAVE_MISSIONS,
  id,
});

const filteredMissions = (data) => {
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return showMissions(missions);
};

export const fetchMissions = () => (dispatch) => {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(filteredMissions(json)));
};

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSIONS:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
}
