window.onload = function() {

  var buttonG = document.getElementById("G");



  buttonG.addEventListener("click", function() {
 for (var i = -6; i <= 6; i = i + 2) {
  var x = i;
  
  if (x < 2) {
    x = Math.sin(x) + Math.tan(x);
  }
  
  if (x === 2) {
    x = Math.pow(x, 2) + 5 * Math.pow(x, 3);
  }

  if  (x > 2) {
      Math.sqrt((Math.pow(x, 3)));
  }
  

  
 
   alert("Результати розрахунків при аргументі " + i + " = " + x);
}

  });

};
