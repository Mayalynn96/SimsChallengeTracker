const User = require('./User');
const Pack = require('./Pack');
const Career = require('./Career');
const Aspiration = require('./Aspiration');

Career.belongsTo(Pack);
Pack.hasMany(Career);

Aspiration.belongsTo(Pack);
Pack.hasMany(Aspiration);

module.exports = {
    User,
    Pack,
    Career,
    Aspiration
};