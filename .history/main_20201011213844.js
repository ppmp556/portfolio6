$(() => {
    $('#nav_toggle').click(() => {
        $('.nav_line').toggleClass('clicked');
        $('.header').toggleClass('clicked');
        $('.header_inner').toggleClass('clicked');
        $('.nav_ham').toggleClass('clicked');
        $('.nav_list').toggleClass('clicked');
    });

    const txts = ['website', 'portfolio', 'sample'];
    let count = 0;
    let index = 0;

    let currnt = '';
    let letter = '';

    (type => {

        if (count === txts.lenght) {
            count = 0;
        }
        currnt = txts[count];
        letter = currnt.slice(0, ++index);

        document.querySelector('.kv_animetype').textContent = letter;
        // $('.line_type').textContent = leter;
        if (letter.length === currnt.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 500);

    });







});










const body = document.body;

const toggler = document.getElementById('navToggler');
//#navToggleを取得し、togglerに格納

const navList = document.getElementById('js-nav');
const navList2 = document.getElementById('js-nav2');


toggler.addEventListener('click', function() {　
    //togglerクリックされたら、
    body.classList.toggle('clicked');　
    
});
navList.addEventListener('click', function(){

    
    body.classList.remove('clicked');
});
navList2.addEventListener('click', function(){

    
    body.classList.remove('clicked');
});
//ナビクリックでスムーズ移動
$(function(){
    $('a[href^="#"]').click(function(){
      //スクロールのスピード
      var speed = 500;
      //リンク元を取得
      var href= $(this).attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  



$(function(){

    var effect_btm = 500; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 3000; // エフェクトの時間(ms) 1秒なら1000


   //親要素と子要素のcssを定義
   $('.scroll-fade-row').css({
    opacity: 0
  });
  $('.scroll-fade-row').children().each(function(){
    $(this).css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });
  });

  $(window).on('load scroll', function() {
      var obj = $('.boxAnime');

      obj.each(function() {
          var isPlay = 'isPlay';
          var objOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();

          if(scrollPos > objOffset - wh +(wh / 4)) {
              $(this).addClass(isPlay);
          }
      });
  });

  $(function() {
    $('.js-modal-open').on('click', function() {
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click', function() {
        $('.js-modal').fadeOut();
        return false;
    });

});


  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    var effect_pos = scroll_btm - effect_btm;

    //エフェクトが発動したとき、子要素をずらしてフェードさせる
    $('.scroll-fade-row').each( function() {
        var this_pos = $(this).offset().top;
        if ( effect_pos > this_pos ) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
            $(this).children().each(function(i){
                $(this).delay(100 + i*200).queue(function(){
                    $(this).css({
                        opacity: 1,
                        transform: 'translateY(0)'
                    }).dequeue();
                });
            });
        };
    });
  });
})

$(document).ready(function(){
    function toggleChange() {
        var slideIndex = $('.slide').index($('.active'));
        $('.button').show();
        if(slideIndex == 0) {
            $('.prev').hide();
        }else if (slideIndex == $('.slide').length - 1) {
            $('.next').hide();
        }
    }
    toggleChange();

    $('.next').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active');
        $displaySlide.next().addClass('active');
        toggleChange();
    });
    $('.prev').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active');
        $displaySlide.prev().addClass('active');
        toggleChange();
    });


});




