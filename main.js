$(() => {

     // 1画面分以上スクロールしたら、ヘッダーを固定する

  let headerFix = $("header");

  $(window).scroll(function (){
    if ($(window).scrollTop() > $(window).height()) {
      headerFix.addClass("fix");
    } else {
      headerFix.removeClass("fix");

    }
  });


    // ハンバーガーメニュー
    $('#nav_toggle').click(() => {
        $('.nav_line').toggleClass('clicked');
        $('.header').toggleClass('clicked');
        $('.header_inner').toggleClass('clicked');
        $('.nav').toggleClass('clicked');
        $('.nav_ham').toggleClass('clicked');
        $('.nav_list').toggleClass('clicked');
    });

    // タイピングアニメーション

    const texts = ['Webサイト制作 ', 'ライティング ', 'WordPress '];
    let count = 0;
    let index = 0;
    let currtentText = '';//currenttext:表示されているテキストを返す
    let letter = '';

    (function type() {

        if(count === texts.length) {
            count = 0;

        }
        currtentText = texts[count];
        letter = currtentText.slice(0, ++index);
        //slice()は元の文字列を変更せず、文字列の一部を取り出して新しい文字列として返す

        document.querySelector('.line').textContent = letter;
        if(letter.length === currtentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 200);

    })();




    // スライドショー
    let nowPage = 0;
    let nextPage = 1;

    const slides = $("#kv_slide").find("img");
    const slideLength = slides.length;

    const fadeTime = 1500;
    const showTime = 3000;

    slides.hide();
    slides.eq(0).show();

    const slidesshow = () => {

        slides.eq(nowPage % slideLength).fadeOut(fadeTime).removeClass("zoom");
        slides.eq(nextPage % slideLength).fadeIn(fadeTime).addClass("zoom");

        nowPage++;
        nextPage++;
    };

    setInterval(slidesshow, showTime);




    // scroll　animation
    const reveal = gsap.utils.toArray('.out_in');
    reveal.forEach((text, i) => {
        ScrollTrigger.create({
            trigger: text,
            toggleClass: 'active',
            strat: "top 90%",
            end: "bottom 20%",

        })

    });

    const images = gsap.utils.toArray('img');
    images.forEach((img, i) => {
        ScrollTrigger.create({
            trigger: img,
            toggleClass: 'active',
            strat: "top 90%",
            end: "bottom 20%",

        })
    });



    //ナビクリックでスムーズ移動
    $(function () {
        $('a[href^="#"]').click(function () {
            //スクロールのスピード
            let speed = 500;
            //リンク元を取得
            let href = $(this).attr("href");
            //リンク先を取得
            let target = $(href == "#" || href == "" ? 'html' : href);
            //リンク先までの距離を取得
            let position = target.offset().top;
            //スムーススクロール
            $("html, body").animate({ scrollTop: position }, speed, "swing");

            return false;
        });
    });

});


