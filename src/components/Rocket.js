import React from 'react';
import styles from './styles/Rocket.module.css';

const Rocket = (props) => {
  const x = 0;
  console.log(x);
  return (
    <div className={styles.rocket_container}>
      <figure className={styles.rocket_container_figure}>
        <img src={props.datas.flickr_images[0]} alt="rocket" />
      </figure>
      <article className={styles.rocket_container_article}>
        <h2>{props.datas.name}</h2>
        <p>{props.datas.type}</p>
        <button type="button" className={styles.rocket_container_article_button}>Reserved</button>
      </article>
    </div>
  );
};

export default Rocket;
