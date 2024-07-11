import React from 'react';
import styles from './Group.module.scss';

const Group = () => {
  return (
    <section className={styles.group}>
      <div className={styles.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/assets/grzyb2.jpg`} alt="Group" />
      </div>
      <div className={styles.description}>
        <h2>About Our Group</h2>
        <p>
          Our group consists of highly skilled professionals who are dedicated
          to providing top-notch services and products. We value collaboration,
          innovation, and excellence in everything we do.
        </p>
      </div>
    </section>
  );
};

export default Group;
