import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Our Company</h1>
      <p>We provide the best products and services for your needs.</p>
    </section>
  );
};

export default Hero;
