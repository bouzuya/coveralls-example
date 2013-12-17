
module.exports = process.env.MYAPP_COV
  ? require('./lib-cov')
  : require('./lib');
