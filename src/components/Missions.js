import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Missions.module.css';
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
    <table className={styles.mission_table}>
      <thead>
        <tr>
          {missionHeadings.map((heading) => (
            <th className={styles.mission_th} key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td className={styles.mission_td}><b>{mission.mission_name}</b></td>
            <td className={styles.mission_td}>{mission.description}</td>
            <td className={styles.mission_td}>
              <div className="status">
                {mission.reserved && 'Active'}
                {!mission.reserved && 'Not a Member'}
              </div>
            </td>
            <td className={styles.mission_td}>
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
