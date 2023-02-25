import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="bg-gray-100 p-4 min-h-fit mt-20">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Active Missions</h2>
        <table className="w-full bg-white shadow-md rounded mb-4">
          <tbody>
            {activeMissions.map((mission) => (
              <tr key={mission.id} className="hover:bg-gray-200">
                <td className="py-2 px-4">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Reserved Rockets</h2>
        <table className="w-full bg-white shadow-md rounded">
          <tbody>
            {activeRockets.map((rocket) => (
              <tr key={rocket.id} className="hover:bg-gray-200">
                <td className="py-2 px-4">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
