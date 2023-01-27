const team={
  _players:[
    {firstName:'Jordan',lastName:'Henderson',age:32
    },
    {firstName:'Mo',lastName:'Salah',age:30
    },
    {firstName:'Virgil ',lastName:'van Dijk',age:31
    }
  ],
  _games:[
    {oponent:'Real Madrid',teamPoints:32,opponentPoints:30},
    {oponent:'Man City',teamPoints:30,opponentPoints:32},
    {oponent:'Chelsea',teamPoints:31,opponentPoints:32}
 ],
 get players(){
   return this._players;
 },
 get games(){
   return this._games;
 },
 addPlayer(newFirstName,newLastName, newAge){
   let player={
     firstName:newFirstName,
     lastName:newLastName,
     age:newAge
   };
   this.players.push(player);
 },
 addGame(newOpponent,newTeamPoints,newOpponentPoints){
   let game={
     opponent:newOpponent,
     teamPoints:newTeamPoints,
     opponentPoints:newOpponentPoints
   };
   this.games.push(game);
 }

};
team.addGame('Titans',100,98);
console.log(team.games)

