export const Player = {
  name: String,
  totalAverage: Number,
  averageWithoutDoubles: Number,
  legs: Number,
}

export const NormalGame = {
  name: String,
  gameLegs: Number,
  players: {
    playerOne: Player,
    playerTwo: Player,
  },
  score: {
    pOneScore: Number,
    pTwoScore: Number,
  },
  gameType: Number
}

export const DoublesGame = {
  name: String,
  gameLegs: Number,
  players: {
    playerOne: Player,
    playerTwo: Player,
    playerThree: Player,
    playerFour: Player,
  },
  teams: {
    teamOne: {
      playerOne: Player,
      playerTwo: Player,
    },
    teamTwo: {
      playerThree: Player,
      playerFour: Player
    }
  },
  score: {
    pOneScore: Number,
    pTwoScore: Number,
  },
  gameType: Number
}
