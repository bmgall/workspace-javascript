$(function(){
    $('a').each(function(){
        $(this).attr('href', 'https://google.com');
        $(this).css('text-decoration', 'line-through');
    });
    $('img').each(function(){
        $(this).attr('src', "img/die1.png");
    });
});