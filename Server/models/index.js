const User = require('./User');
const Pack = require('./Pack');
const Career = require('./Career');

Career.belongsTo(Pack);
Pack.hasMany(Career);

module.exports = {
    User,
    Pack,
    Career
};