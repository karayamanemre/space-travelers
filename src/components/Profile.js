import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/Profile.module.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className={styles.profile_section}>
      <div className={styles.profile_missions}>
        <h2>My Missons</h2>
        <table className={styles.profile_mission_title}>
          <tbody>
            {activeMissions.map((mission) => (
              <tr className={styles.profile_mission_tr} key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>My Rockets</h2>
        <table>
          <tbody>
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
