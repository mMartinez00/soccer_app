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

        Objects: ['goals', 'shots', 'dribbles', 'penalty'],
    },

    Attacking: {
        headers: [
            'Goals',
            'Goals Missed',
            'Assists',
            'Shots',
            'Shots on Target',
            'Attempted Dribbles',
            'Successful Dribbles',
            'Penalties Scored',
            'Penalties Won',
        ],

        Objects: ['games', 'fouls', 'passes', 'substitutes'],
    },

    Defending: {
        headers: [
            'Tackles',
            'Blocks',
            'Interceptions',
            'Yellow Card',
            'Red Card',
            'Duels Won',
            'Dribble Past',
            'Goals Saved',
            'Goals Conceded',
            'Penalties Saved',
            'Penalties Commited',
        ],

        Objects: ['tackles', 'cards', 'duels', 'penalty', 'goals'],
    },
};

const buttons = ['General', 'Attacking', 'Defending'];

export { table, buttons };
