const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '../data/goals.json');

module.exports = {
  readAll: () => {
    try {
      if (!fs.existsSync(DATA_PATH)) return [];
      return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch (e) { return []; }
  },
  saveAll: (goals) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(goals, null, 2));
  }
};