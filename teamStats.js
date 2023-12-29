const team = {
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
};

team['_players'] = [];
team['_games'] = [];

team._players.push({firstName: 'Alexandre', lastName: 'Yeargan', age: 29});
team._players.push({firstName: 'Rose', lastName: 'Durand', age: 24});
team._players.push({firstName: 'Vero', lastName: 'Mars', age: 23});

team._games.push({opponent: 'me', teamPoints: 2, opponentPoints: 5});
team._games.push({opponent: 'myself', teamPoints: 2, opponentPoints: 5});
team._games.push({opponent: 'i', teamPoints: 2, opponentPoints: 5});

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team);
console.log(Object.keys(team));

