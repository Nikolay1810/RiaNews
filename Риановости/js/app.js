$(document).ready(function () {
    $(".rows").hide();
       $(function() {
    var fixblock_height = $('#sots_seti').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('#sots_seti').position().top; ; // определяем его первоначальное положение
    $(window).scroll(function(){
        if(test == false){
        if ($(window).scrollTop() < 1000){ // Если страницу прокрутили дальше, чем находится наш блок
            $('#sots_seti').css({'position': 'fixed', 'bottom':'0', 
'z-index':'999'}); // То мы этот блок фиксируем и отображаем сверху.
            
           // То мы этот блок фиксируем и отображаем сверху.
//            $('.header').css('padding-bottom', fixblock_height+'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
        }else{  // Если же позиция скрола меньше (выше), чем наш блок
            $('#sots_seti').css({'position': 'static'}); // то возвращаем все назад
//            $('.header').css('padding-bottom', '0px'); // И убираем отступ
        }
        }else{
            if ($(window).scrollTop() < 600){ // Если страницу прокрутили дальше, чем находится наш блок
            $('#sots_seti').css({'position': 'fixed', 'bottom':'0', 
'z-index':'999'}); // То мы этот блок фиксируем и отображаем сверху.
            
           // То мы этот блок фиксируем и отображаем сверху.
//            $('.header').css('padding-bottom', fixblock_height+'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
        }else{  // Если же позиция скрола меньше (выше), чем наш блок
            $('#sots_seti').css({'position': 'static'}); 
        }
    }
    
})
})
});
  var test = true;
$(".icon3").click(function(){
    if(test == true){
        $(".rows").slideDown(500);
        test = false;    
    }
    else{
        $(".rows").slideUp(500);
        test = true;
    }
});