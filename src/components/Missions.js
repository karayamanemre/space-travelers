import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

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
  return (
    <div className="bg-gray-100 p-4 mt-20">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.map((mission) => (
            <div key={mission.id} className="bg-white p-6 rounded-md">
              <h3 className="text-lg font-bold mb-2">{mission.mission_name}</h3>
              <p className="text-sm md:text-base mb-4">{mission.description}</p>
              <div>
                {mission.reserved ? (
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full">
                    Status: Active
                  </span>
                ) : (
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full">
                    Status: Passive
                  </span>
                )}
              </div>
              <button
                type="button"
                className={`px-4 py-2 rounded-full ${
                  mission.reserved
                    ? 'bg-red-500 hover:bg-red-700'
                    : 'bg-green-500 hover:bg-green-700'
                } text-white mt-4`}
                onClick={() => toggleReservation(mission)}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;
