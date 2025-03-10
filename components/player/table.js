const generalHeaders = [
    'League',
    'Rating',
    'Games',
    'Games Started',
    'Minutes',
    'Fouls Commited',
    'Fouls Drawn',
    'Total Passes',
    'Key Passes',
    'Subbed In',
    'Subbed Out',
];

const attackingHeaders = [
    'League',
    'Goals',
    'Assists',
    'Shots',
    'Shots on Target',
    'Attempted Dribbles',
    'Successful Dribbles',
    'Penalties Scored',
    'Penalties Won',
];

const defendingHeaders = [
    'League',
    'Tackles',
    'Blocks',
    'Interceptions',
    'Yellow Card',
    'Red Card',
    'Total Duels',
    'Duels Won',
    'Dribble Past',
    'Goals Saved',
    'Goals Conceded',
    'Penalties Saved',
    'Penalties Commited',
];

const standingsHeaders = [
    'Pos',
    'Team',
    'P',
    'W',
    'D',
    'L',
    '+/-',
    'PTS',
    'Form',
];

const tableData = {
    general: ['games', 'fouls', 'passes', 'substitutes'],

    attack: ['goals', 'shots', 'dribbles', 'penalty'],

    defending: ['tackles', 'cards', 'duels', 'dribbles', 'penalty', 'goals'],
};

const statisticsButtons = ['General', 'Attacking', 'Defending'];

export {
    tableData,
    statisticsButtons,
    generalHeaders,
    attackingHeaders,
    defendingHeaders,
    standingsHeaders,
};
