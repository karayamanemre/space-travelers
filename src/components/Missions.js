import React, { useEffect } from 'react';
import './styles/Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((missions || []).length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);
  const toggleReservation = (mission) => {
    if (!mission.reserved) {
      dispatch(joinMission(mission.id));
    } else {
      dispatch(leaveMission(mission.id));
    }
  };
  const missionHeadings = ['Missions', 'Description', 'Status', 'Action'];
  return (
    <table>
      <thead>
        <tr>
          {missionHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <span>
                {mission.reserved && 'Active'}
                {!mission.reserved && 'Not a Member'}
              </span>
            </td>
            <td>
              <button
                key={mission.id}
                type="button"
                onClick={() => toggleReservation(mission)}
              >
                {mission.reserved && 'Leave Mission'}
                {!mission.reserved && 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
