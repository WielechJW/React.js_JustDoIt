import React, { useState } from 'react';
import styles from './Form.module.scss';

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu możesz dodać logikę do wysyłania emaila na serwer lub zapisanie go w bazie danych
    setMessage('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className={styles.form}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Form;
