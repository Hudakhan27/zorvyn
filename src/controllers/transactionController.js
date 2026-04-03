const Transaction = require('../models/Transaction');
const { Op } = require('sequelize');

exports.create = async (req, res) => {
  try {
    const record = await Transaction.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + parseFloat(t.amount), 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + parseFloat(t.amount), 0);
    
    res.json({
      total_income: income,
      total_expenses: expense,
      net_balance: income - expense,
      recent_activity: transactions.slice(-5)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const records = await Transaction.findAll();
  res.json(records);
};
