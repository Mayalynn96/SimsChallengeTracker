const User = require('./User');
const Pack = require('./Pack');
const Career = require('./Career');
const Aspiration = require('./Aspiration');
const Trait = require('./Trait');
const Legacy = require('./Legacy');
const Sim = require('./Sim');

Sim.belongsTo(Legacy);
Legacy.hasMany(Sim);

Legacy.belongsTo(User);
User.hasMany(Legacy);

Career.belongsTo(Pack);
Pack.hasMany(Career);

Aspiration.belongsTo(Pack);
Pack.hasMany(Aspiration);

Trait.belongsTo(Pack);
Pack.hasMany(Trait);

module.exports = {
    User,
    Pack,
    Career,
    Aspiration,
    Trait,
    Legacy,
    Sim
};