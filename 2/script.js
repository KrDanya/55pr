window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("Я дуже люблю народну українсь-ку мову, звучну,\n" +
        "барвисту й таку м'я-ку.\n");
  });

  buttonGr.addEventListener("click", function() {
    alert("Мова вмирає, коли наступне покоління втрачає розуміння\n" +
        "значення слів.");
  });

  buttonC.addEventListener("click", function() {
    alert("М. Гоголь Дивуєшся дорогоцінності мови нашої: в ній що\n" +
        "не звук, то подарунок, все крупно, зернисто, як самі перла.\n");
  });

  buttonCI.addEventListener("click", function() {
    alert("Українці — стародавній народ, а мова \"їхня мова багатша і\n" +
        "всеосяжніша, ніж персидська, китайська, монгольська і\n" +
        "всілякі інші.».");
  });

  buttonSH.addEventListener("click", function() {
    alert("Раби — це нація, котра не має Слова. Тому й не зможе\n" +
        "захистить себе.");
  });
};
