import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <section className="bg-gray-100 p-4 mt-20">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Rockets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rockets.map((rocket) => (
            <Rocket key={rocket.id} datas={rocket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rockets;
