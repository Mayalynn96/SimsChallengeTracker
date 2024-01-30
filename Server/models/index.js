const User = require('./User');
const Pack = require('./Pack');
const Career = require('./Career');
const Aspiration = require('./Aspiration');
const Trait = require('./Trait');
const Legacy = require('./Legacy');
const Sim = require('./Sim');
const Skill = require('./Skill');
const PointsSheet = require('./PointsSheet')

Sim.belongsTo(Legacy);
Legacy.hasMany(Sim);

Legacy.belongsTo(User);
User.hasMany(Legacy);

Legacy.hasOne(PointsSheet);
PointsSheet.belongsTo(Legacy);

Career.belongsTo(Pack);
Pack.hasMany(Career);

Aspiration.belongsTo(Pack);
Pack.hasMany(Aspiration);

Trait.belongsTo(Pack);
Pack.hasMany(Trait);

Skill.belongsTo(Pack);
Pack.hasMany(Skill);

Trait.belongsToMany(Sim, {through: "simTraits"});
Sim.belongsToMany(Trait, {through: "simTraits"});

module.exports = {
    User,
    Pack,
    Career,
    Aspiration,
    Trait,
    Legacy,
    Sim,
    Skill,
    PointsSheet
};