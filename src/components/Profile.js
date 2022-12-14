import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/Profile.module.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <section className={styles.profile_section}>
      <div className={styles.profile_missions}>
        <h2>My Missons</h2>
        <table className={styles.profile_mission_title}>
          <tbody>
            {activeMissions.map((mission) => (
              <tr className={styles.profile_mission_tr} key={mission.id}>
                <td className={styles.profile_mission_td}>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.profile_missions}>
        <h2>My Rockets</h2>
        <table className={styles.profile_mission_title}>
          <tbody>
            {activeRockets.map((rocket) => (
              <tr className={styles.profile_mission_tr} key={rocket.id}>
                <td className={styles.profile_mission_td}>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
