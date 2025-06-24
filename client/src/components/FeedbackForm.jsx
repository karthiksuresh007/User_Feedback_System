import React, { useState } from 'react';
import API from '../api';
import { toast } from 'react-toastify';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await toast.promise(
        API.post('/feedback', formData),
        {
          pending: ' Sending feedback...',
          success: ' Feedback submitted successfully!',
          error: ' Failed to submit feedback. Please try again!',
        }
      );

      if (response.data.success) {
        setFormData({
          name: '',
          email: '',
          message: '',
          category: '',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Error handled via toast.promise
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}> Submit Feedback</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
        style={styles.textarea}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        style={styles.input}
      >
        <option value="">Select category</option>
        <option value="suggestion">Suggestion</option>
        <option value="bug report">Bug Report</option>
        <option value="feature request">Feature Request</option>
      </select>

      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? ' Submitting...' : ' Submit'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    width: '100%',
    maxWidth: '700px',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.85rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
  },
  textarea: {
    padding: '0.85rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '120px',
    backgroundColor: '#f8f8f8',
  },
  button: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default FeedbackForm;
