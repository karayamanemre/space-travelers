import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const ans = useSelector((state) => state.rockets);
  return (
    <>
      {
        ans.map(((item) => (
          <Rocket key={item.id} datas={item} />
        )))
      }
    </>
  );
};

export default Rockets;
