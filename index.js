// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 will add 1 when invoked, store that to memory and then if invoked again, will add another. Counter 2 will, regardless of how many times its invoked, just add 1.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1. Closure is when you have an inner function getting access to the outer functions scope. So in this case, count is reaching out from the inner function to the outer functions count being equal to 0 and then adding 1.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * I believe the scenario where it will be better is if we want to use a variable or function(callback) that is on the global scope. Of course, the counter1 is better, but for a scenario where we want to access or use global scope variables, that's when the counter2 becomes a better solution.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * Math.floor(3));
}

console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, n) {
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < n; i++) {
    homeScore += inning();
    awayScore += inning();
  }
  let score = {
    Home: homeScore,
    Away: awayScore,
  };
  return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(inning, n) {
  let allScores = [];
  let homeScores = 0;
  let awayScores = 0;
  let currentInning = 0;

  for (let i = 0; i < n; i++) {
    homeScores += inning();
    awayScores += inning();

    currentInning = i + 1;
    allScores += `Inning ${
      i + 1
    }: awayTeam (${awayScores}) - homeTeam (${homeScores})\n`;
  }
  allScores += `Final Score: awayTeam (${awayScores}) - homeTeam (${homeScores})`;
  return allScores;
}

console.log(scoreboard(inning, 9));
