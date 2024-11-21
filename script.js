"use strict";

// touchstart -
// Событие touchstart в JavaScript срабатывает, когда палец или другой сенсорный инструмент касается элемента на сенсорном экране
// touchmove -
// Срабатывает при перемещении пальца(или другого сенсорного инструмента) по экрану после его касания
// touchend -
// Срабатывает, когда палец (или другой сенсорный инструмент) поднимается с экрана, завершая взаимодействие
// touchenter -
// Срабатывает, когда точка касания перемещается на элемент, не инициируя новое касание.Это напоминает mouseenter для мыши
// touchleave -
// Срабатывает, когда точка касания покидает границы элемента
// touchcancel -
// Срабатывает, когда текущее касание отменяется системой(например, входящее звонок, завершение жеста или другое прерывание)


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    /* box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        
        console.log('start');
        console.log(e.touches);
    }); */

    // Событие при касании элемента
    box.addEventListener('touchstart', (e) => { 
        e.preventDefault();

        console.log('start'); // Логируем начало касания
        console.log(e.targetTouches); // Логируем список всех касаний, связанных с элементом
    }); 

    /* box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.changedTouches);
    });
    */

    // Событие при движении пальца по экрану
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // Логируем горизонтальную координату первого касания
        console.log(`X: ${e.targetTouches[0].pageX}, Y: ${e.targetTouches[0].pageY}`);
    });

    /* box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    }); */

});



// три главных свойства в событиях на мобильных устройствах:
// touches - Включает все точки соприкосновения, которые сейчас активны на экране, вне зависимости от элемента, к которому относится запущенная функция
// targetTouches - Содержит только точки касания, которые начались в пределах элемента, даже если пользователь перемещает пальцы за его пределами
// changedTouches - влючает любые точки соприкосновения, которые изменились с последнего сенсорного события