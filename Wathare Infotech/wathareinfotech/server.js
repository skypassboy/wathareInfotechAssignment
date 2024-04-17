const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace <DB_URI> with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define mongoose schema and model for your data
const sampleDataSchema = new mongoose.Schema({
  ts: Date,
  machine_status: Number,
  vibration: Number
});

const SampleData = mongoose.model('SampleDatas', sampleDataSchema);

// Route to fetch sample data
app.get('/api/data', async (req, res) => {
  try {
    const data = await SampleData.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch sample data with time range and frequency filtering
app.get('/api/data/filter', async (req, res) => {
    try {
      let query = {};
  
      // Parse query parameters
      const { startTime, frequency } = req.query;
      if (startTime && frequency) {
        const startDate = new Date(startTime);
        let endDate;
  
        switch (frequency) {
          case 'hour':
            endDate = new Date(startDate.getTime() + 3600000); // Adding an hour
            break;
          case 'day':
            endDate = new Date(startDate.getTime() + 86400000); // Adding a day
            break;
          case 'week':
            endDate = new Date(startDate.getTime() + 604800000); // Adding a week
            break;
          case 'month':
            endDate = new Date(startDate.getTime() + 2592000000); // Adding a month
            break;
          default:
            throw new Error('Invalid frequency');
        }
  
        query.ts = { $gte: startDate, $lt: endDate };
      }
  
      const data = await SampleData.find(query);
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// http://localhost:5000/api/data/filter?startTime=2024-04-17T00:00:00&frequency=day;