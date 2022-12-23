function getMostCostEffectiveSolution(scores, costs, highscore) {
 var cost = 100;
 var index;
 for (var i = 0; i < scores.length; i++) {
 if (scores[i] == highscore) {
 if (cost > costs[i]) {
 index = i;
 cost = costs[i];
 }
 }
 }
 return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
