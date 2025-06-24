import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/dashboard');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Feedback Form</Link>

      <h2> Admin Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: '2rem',
    position: 'relative',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backLink: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '300px',
  },
  button: {
    padding: '0.8rem 1.2rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Login;
