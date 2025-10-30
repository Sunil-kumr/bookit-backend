require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const experiencesRoutes = require('./routes/experiences.routes');
const bookingsRoutes = require('./routes/bookings.routes');
const promoRoutes = require('./routes/promo.routes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/experiences', experiencesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/promo', promoRoutes);

app.get('/', (req, res) => {
  res.send('API running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
