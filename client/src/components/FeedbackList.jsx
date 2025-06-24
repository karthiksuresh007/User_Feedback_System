import React, { useEffect, useState } from 'react';
import API from '../api';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await API.get('/feedback');
      if (res.data.success) {
        setFeedback(res.data.data);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  //Analytics Summary
  const total = feedback.length;
  const bugs = feedback.filter(f => f.category === 'bug report').length;
  const suggestions = feedback.filter(f => f.category === 'suggestion').length;
  const features = feedback.filter(f => f.category === 'feature request').length;

  const filteredFeedback = feedback.filter(item => {
    const matchCategory = !filter || item.category === filter;
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div style={styles.container}>
      

      {/*  Analytics Summary */}
      <div style={styles.analytics}>
        <div style={styles.statBox}>Features: <strong>{features}</strong></div>
        <div style={styles.statBox}>Bugs: <strong>{bugs}</strong></div>
        <div style={styles.statBox}>Suggestions: <strong>{suggestions}</strong></div>
        <div style={styles.statBox}>Total: <strong>{total}</strong></div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder=" Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      {/*  Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.select}
      >
        <option value="">All Categories</option>
        <option value="suggestion">Suggestion</option>
        <option value="bug report">Bug Report</option>
        <option value="feature request">Feature Request</option>
      </select>

      {/*  Feedback List */}
      {filteredFeedback.length === 0 ? (
        <p>No feedback yet!</p>
      ) : (
        <ul style={styles.list}>
          {filteredFeedback.map((item) => (
            <li key={item.id} style={styles.card}>
              <h4>{item.name}  ({item.email})</h4>
              <p><strong> Category:</strong> {item.category || 'N/A'}</p>
              <p><strong> Message:</strong> {item.message}</p>
              <p style={styles.timestamp}> {new Date(item.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '2rem',
  },
  analytics: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
    background: '#eef6ff',
    padding: '1rem',
    borderRadius: '8px',
  },
  statBox: {
    flex: '1 1 120px',
    background: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    fontSize: '1rem',
  },
  search: {
    padding: '0.6rem',
    marginBottom: '1rem',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '0.5rem',
    marginBottom: '1rem',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  card: {
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
  },
  timestamp: {
    fontSize: '0.8rem',
    color: '#666',
  },
};

export default FeedbackList;
