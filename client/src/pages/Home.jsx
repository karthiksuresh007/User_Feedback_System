import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.nav}>
        <Link to="/dashboard" style={styles.link}> Go to Dashboard</Link>
      </div>

      <div style={styles.centerContainer}>
        <FeedbackForm />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #e3f2fd, #e1f5fe)', 
  },
  nav: {
    padding: '1rem 2rem',
    textAlign: 'right',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  centerContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
};

export default Home;
 