const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use(cors());


// Use book routes
app.use('/api', bookRoutes);

// Sync DB and start server
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('Unable to sync database:', err));
