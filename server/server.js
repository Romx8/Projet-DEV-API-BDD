const express = require('express');
const app = express();
const path = require('path');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use('/api/auth', authRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));
});

app.get('/', (req, res) => {
    res.send('API Rogue-like en ligne ✅');
  });
  