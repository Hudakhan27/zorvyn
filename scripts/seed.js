const sequelize = require('../src/config/db');
const Transaction = require('../src/models/Transaction');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Transaction.bulkCreate([
      { amount: 50000, type: 'income', category: 'Salary', description: 'Jan Salary' },
      { amount: 2000, type: 'expense', category: 'Food', description: 'Dinner' },
      { amount: 1500, type: 'expense', category: 'Transport', description: 'Uber' },
      { amount: 10000, type: 'income', category: 'Freelance', description: 'Project X' }
    ]);
    console.log('✅ Database Seeded Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed Error:', err);
    process.exit(1);
  }
};

seed();
