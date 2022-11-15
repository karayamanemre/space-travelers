import React from 'react';
import { useSelector } from 'react-redux';

export default function Rockets() {
  const ans = useSelector((state) => state.rockets)
  console.log(ans);
  return (
    <div>
      <h1>test rockets</h1>
    </div>
  );
}
