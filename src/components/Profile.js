import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <section>
      <div className="profile-missions">
        <h2>My Missons</h2>
        <table className="profile-mission-title">
          <tbody>
            {activeMissions.map((mission) => (
              <tr key={mission.id} className="profile-mission-title">
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rocket-list col-5">
        <h2>My Rockets</h2>
      </div>
    </section>
  );
};

export default Profile;
