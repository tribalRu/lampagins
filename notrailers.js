(function () {  
  "use strict";  
  
  if (window.notrailers_plugin_started) return;  
  window.notrailers_plugin_started = true;  
  
  // 1. Скрываем кнопку «Трейлеры» через CSS  
  var style = document.createElement("style");  
  style.textContent =  
    ".full-start__button.view--trailer, " +          // кнопка на карточке  
    ".button--trailer, " +                            // вариант в новых темах  
    "[data-component='trailer'] { display: none !important; }";  
  document.head.appendChild(style);  
  
  // 2. Дополнительно вырезаем из DOM (на случай динамической отрисовки)  
  function removeTrailers() {  
    $(".full-start__button, .button--trailer").each(function () {  
      var t = $(this);  
      if (t.hasClass("view--trailer") || /трейлер|trailer/i.test(t.text()))  
        t.remove();  
    });  
  }  
  
  // 3. Перехватываем событие отрисовки полной карточки  
  Lampa.Listener.follow("full", function (e) {  
    if (e.type === "complite") removeTrailers();  
  });  
})();
