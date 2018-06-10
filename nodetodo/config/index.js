var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds153890.mlab.com:53890/nodetodo`;
    }
};