const table = {
    General: {
        headers: [
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
        ],

        Objects: ['games', 'fouls', 'passes', 'substitutes'],
    },

    Attacking: {
        headers: [
            'Goals',
            'Assists',
            'Shots',
            'Shots on Target',
            'Attempted Dribbles',
            'Successful Dribbles',
            'Penalties Scored',
            'Penalties Won',
        ],

        Objects: ['goals', 'shots', 'dribbles', 'penalty'],
    },

    Defending: {
        headers: [
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
        ],

        Objects: ['tackles', 'cards', 'duels', 'dribbles', 'penalty', 'goals'],
    },
};

const statisticsButtons = ['General', 'Attacking', 'Defending'];

export { table, statisticsButtons };
