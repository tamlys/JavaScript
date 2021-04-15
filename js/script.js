'use strict';

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; 
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");


// defer - не блокирует страницу, дойдя до скрипта,
// продолжает загружать страницу и в фоновом режиме грузит скрипт.
// Скрипт начнет выполняться только тогда, когда будет загружено DOM дерево,
// если js файлов несколько, то выполняются последовательно

// async - страница не ждет скрипт. Содержимое обрабатывается и отображается
// DOMContentLoaded и async скрипты не ждут друг друга
// какой файл скрипта быстрее прогрузился(фон. реж), тот и заработал первым
// Применяется к скриптам, которые не зависят от DOM структуры +
// не должен зависить от других скриптов

// Динамически загружаемые скрипты ведут себя также, как async.
// С помощью script.async = false будет вести себя как и обычный скрипт
