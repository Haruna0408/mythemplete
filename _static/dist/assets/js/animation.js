//loading animetion
window.onload = function () {
    const loader = document.getElementById('loading');
    loader.classList.add('p-loading_completed');
}

//animation
$(function () {
    $(window).scroll(function () {
        $('.js_animation').each(function () {
            var element = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > element - windowHeight + 100) {
                $(this).addClass('js_scrollIn');
            }
        });

        //clip-pathを使用したテキスト表示
        // $('.js_animation.js_scrollIn').each(function() {
        //     var currentText = $(this).find('.js_animation_clipPath_text');
        //     if (currentText.hasClass('js_animation_trigger')) {
        //         currentText.addClass('js_animation_trigger_fadeOut');
        //     }
        // });
    });
});