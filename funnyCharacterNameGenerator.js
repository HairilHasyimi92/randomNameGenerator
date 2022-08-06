const charNames = ['bane', 'batRider', 'crystalMaiden', 'jakiro', 'pugna', 'witchDoctor', 'winterWyvern', 'juggernaut', 'emberSpirit', 'facelessVoid', 'tusk', 'underlord', 'sven', 'chaosKnight', 'abaddon', 'bristleback', 'beastMaster', 'io', 'magnus', 'slardar'];

const charTitle = ['king', 'queen', 'lord', 'ser', 'lady', 'princess', 'prince'];

const charChar = ['theSlayer', 'witchKiller', 'theHunter', 'theSaviour'];
//console.log(charNames.length);//

//console.log(charTitle.length);

//console.log(charChar.length);


function getRandomCharIndex(){
    return Math.floor(Math.random()*(charNames.length));
}

let i = getRandomCharIndex();

function getRandomTitleIndex(){
    return Math.floor(Math.random()*(charTitle.length));
}

let j = getRandomTitleIndex();

function getRandomCharCharIndex(){
    return Math.floor(Math.random()*(charChar.length));
}

let k = getRandomCharCharIndex();


console.log('Congratulations! you just got yourself ' + charTitle[j] + ' ' + charNames[i] + ' the ' + charChar[k] + '!' );
//console.log(getRandomCharIndex());//

