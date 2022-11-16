import React from 'react';
import { useDispatch } from 'react-redux';
import { reserved, notReserved } from '../redux/rockets/rockets';
import styles from './styles/Rocket.module.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.rocket_container}>
      <figure className={styles.rocket_container_figure}>
        <img src={props.datas.flickr_images[0]} alt="rocket" />
      </figure>
      <article className={styles.rocket_container_article}>
        <h2>{props.datas.name}</h2>
        <p>{props.datas.type}</p>
        <button type="button" style={{ backgroundColor: `${props.datas.reserved === true ? 'grey' : '#007bff9c'}` }} onClick={() => { if (!props.datas.reserved) { dispatch(reserved(props.datas.id)); } else { dispatch(notReserved(props.datas.id)); } }} className={styles.rocket_container_article_button}>{props.datas.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </article>
    </div>
  );
};

export default Rocket;
