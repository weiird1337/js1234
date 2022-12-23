var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
 if (scores[i] == highScore) {
 bestSolutions.push(i);
 }
}
console.log("Solutions with the highest score: " + bestSolutions);
