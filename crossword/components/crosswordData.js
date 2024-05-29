// pages/crosswordData.js
export const crosswordData = {
  grid: [
    ['H', 'E', 'L', 'L', 'O', '', 'C', 'A', 'T'],
    ['E', '', 'A', '', '', '', 'L','', 'I'],
    ['L', '', 'T', '', '', '', 'O', '', 'E'],
    ['L', '', 'E', '', 'D', 'O', 'G', '', ''],
    ['O', '', '', 'E', '', '', '', '', ''],
    ['', 'B', 'I', 'R', 'D', '', '', '', ''],
    ['', '', '', 'R', '', '', '', '', ''],
    ['', '', '', 'O', '', '', '', '', ''],
    ['', '', '', 'R', '', '', '', '', ''],
  ],
  numbers: [
    [1, 0, 4, 0, 0, 0, 7, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 17, 0, 0, 0, 0],
    [0, 0, 0, 4,0 , 0, 0, 0, 0],
    [0, 24, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  clues: {
    across: {
      1: "Greeting",
      7: "A common pet",
      17: "Canine",
      24: "Flying animal"
    },
    down: {
      1: "Another word for hi",
      7: "When something is stuck",
      4: "To make a mistake",
      5: "Part of a suit",

    }
  },
  solutions: {
    across: {
      1: "HELLO",
      7: "CAT",
      17: "DOG",
      24: "BIRD"
    },
    down: {
      2: "LATE",
      3: "L",
      4: "ERROR",
      5: "TIE",
    }
  }
};
