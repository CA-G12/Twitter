const { join } = require('path');

module.exports = (req, res) => {
  res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public', 'errors', '500.html'));
};
