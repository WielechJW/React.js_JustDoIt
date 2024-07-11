import React from 'react';
import Hero from '../components/Hero';
import Group from '../components/Group';
import Form from '../components/Form';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Group />
      <Form />
    </div>
  );
};

export default Home;
