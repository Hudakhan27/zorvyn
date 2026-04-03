require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/db');
const transactionRoutes = require('./src/routes/transactionRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Finance API is running!'));
app.use('/api/transactions', transactionRoutes);

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("🚀 Server ready on port " + PORT));
});
