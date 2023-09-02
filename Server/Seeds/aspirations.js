const {URL_PREFIX} = require("./utils.js")

const AspirationData = [
    {
        "type":"Animal",
        "pack": "Cats & Dogs",
        "name":"Big Happy Animal",
        "typeImage": URL_PREFIX + "/images/aspirations/Animal.png",
        "aspirationImage":URL_PREFIX + "/images/aspirations/FriendOfTheAnimals.png",
        "PackId": 5
    },
    {
        "type":"Family",
        "pack": "Base Game",
        "name":"Big Happy Family",
        "typeImage": URL_PREFIX + "/images/aspirations/Family.png",
        "aspirationImage":URL_PREFIX + "/images/aspirations/BigHappyFamily.png",
        "PackId": 1
    },
    {
        "type":"Family",
        "pack": "Parenthood",
        "name":"Super Parent",
        "typeImage": URL_PREFIX + "/images/aspirations/Family.png",
        "aspirationImage":URL_PREFIX + "/images/aspirations/SuperParent.png",
        "PackId": 20
    },
    {
        "type":"Family",
        "pack": "Base Game",
        "name":"Successfull Lineage",
        "typeImage": URL_PREFIX + "/images/aspirations/Family.png",
        "aspirationImage":URL_PREFIX + "/images/aspirations/SuccessfullLineage.png",
        "PackId": 1
    },
    {
        "type":"Family",
        "pack": "Vampires",
        "name":"Vampire Family",
        "typeImage": URL_PREFIX + "/images/aspirations/Family.png",
        "aspirationImage":URL_PREFIX + "/images/aspirations/VampireFamily.png",
        "PackId": 19
    }
]

module.exports = {AspirationData}