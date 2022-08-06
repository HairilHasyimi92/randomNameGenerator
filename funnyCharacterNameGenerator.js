const charNames = ['bane', 'batRider', 'crystalMaiden', 'jakiro', 'pugna', 'witchDoctor', 'winterWyvern', 'juggernaut', 'emberSpirit', 'facelessVoid', 'tusk', 'underlord', 'sven', 'chaosKnight', 'abaddon', 'bristleback', 'beastMaster', 'io', 'magnus', 'slardar'];

const charTitle = ['king', 'queen', 'lord', 'ser', 'lady', 'princess', 'prince'];

const charChar = ['theSlayer', 'witchKiller', 'theHunter', 'theSaviour'];
//console.log(charNames.length);//

//console.log(charTitle.length);

//console.log(charChar.length);


function getRandomCharIndex(){
    return Math.floor(Math.random()*20);
}

let i = getRandomCharIndex();

function getRandomTitleIndex(){
    return Math.floor(Math.random()*7);
}

let j = getRandomTitleIndex();

function getRandomCharCharIndex(){
    return Math.floor(Math.random()*4);
}

let k = getRandomCharCharIndex();


console.log('Congratulations! you just got yourself ' + charTitle[j] + ' ' + charNames[i] + ' the ' + charChar[k] + '!' );
//console.log(getRandomCharIndex());//

