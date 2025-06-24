import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeedbackList from '../components/FeedbackList';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}> View Feedback Form</Link>
        <button onClick={handleLogout} style={styles.logoutBtn}> Logout</button>
      </nav>

      <div style={styles.content}>
        <h1 style={styles.heading}> Feedback Dashboard</h1>
        <FeedbackList />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #e3f2fd, #e1f5fe)',
    padding: '1rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  logoutBtn: {
    padding: '0.6rem 1rem',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#222',
  },
};

export default Dashboard;
