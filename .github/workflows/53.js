<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <title>Planets</title>
 <style>
 .redtext { color: red; }
 </style>
 <script>
 function init() {
 var planet = document.getElementById("greenplanet");
 planet.innerHTML = "Red Alert: hit by phaser fire!";
 planet.setAttribute("class", "redtext");
 }
 window.onload = init;
 </script>
</head>
<body>
 <h1>Green Planet</h1>
 <p id="greenplanet">All is well</p>
 <h1>Red Planet</h1>
 <p id="redplanet">Nothing to report</p>
 <h1>Blue Planet</h1>
 <p id="blueplanet">All systems A-OK</p>
</body>
</html>
