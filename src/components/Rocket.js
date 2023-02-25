import React from 'react';
import { useDispatch } from 'react-redux';
import { reserved, notReserved } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const isReserved = props.datas.reserved;
  const buttonStyle = `rounded-full py-2 px-4 text-white font-bold ${
    isReserved
      ? 'bg-gray-500 hover:bg-gray-700'
      : 'bg-blue-500 hover:bg-blue-700'
  }`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <figure>
        <img src={props.datas.flickr_images[0]} alt="rocket" />
      </figure>
      <article className="p-4">
        <h2 className="text-xl font-bold mb-2">{props.datas.name}</h2>
        <p className="text-gray-700 text-base mb-4">{props.datas.type}</p>
        <button
          type="button"
          className={buttonStyle}
          onClick={() => {
            if (!isReserved) {
              dispatch(reserved(props.datas.id));
            } else {
              dispatch(notReserved(props.datas.id));
            }
          }}
        >
          {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </article>
    </div>
  );
};

export default Rocket;
