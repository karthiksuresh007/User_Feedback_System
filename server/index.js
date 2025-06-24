const express = require('express');
const cors = require('cors');
const app = express();
const feedbackRoutes = require('./src/routes/feedbackRoutes');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
