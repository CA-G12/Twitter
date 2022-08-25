const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'public', 'error', '404.html'));
};
module.exports = clientError;
