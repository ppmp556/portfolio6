$(() => {


    $('body').addClass('lock');

    setTimeout(function () {

        $('#js-loading_wrap').addClass('loading_anime');
        $("body").stop().animate(
            {
                opacity: '1',
            }, 1000);

    }, 2500);



    setTimeout(function () {

        $('body').removeClass('lock')
    }, 2800);

    setTimeout(function () {

        $('#js-loading_wrap').addClass('loading_none');
    }, 8000);


    let pgTop = $('#js-scroll');

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pgTop.addClass("is_fade");

        } else {
            pgTop.removeClass("is_fade");

        }
    });


    pgTop.on("click", function () {

        $('body, html').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    const navTg = $('#nav_toggle');
    const navLin = $('.nav_line');
    const header = $('.header');
    const headerIn = $('.header_inner');
    const nav = $('.nav');
    const navHam = $('.nav_ham');
    const navList = $('.nav_list');


    // ハンバーガーメニュー
    navTg.click(() => {
        navLin.toggleClass('clicked');
        header.toggleClass('clicked');
        headerIn.toggleClass('clicked');
        nav.toggleClass('clicked');
        navHam.toggleClass('clicked');
        navList.toggleClass('clicked');

        return false;

    });


    // ハンバーガーメニュー以外の場所クリックでメニュー閉じる
    $('html, body').click(() => {
        if (navList.hasClass('clicked')) {
            // console.log("ok");
            navLin.removeClass('clicked');
            header.removeClass('clicked');
            headerIn.removeClass('clicked');
            nav.removeClass('clicked');
            navHam.removeClass('clicked');
            navList.removeClass('clicked');
        }

    });


    // タイピングアニメーション

    // const texts = ['Webサイト制作 ', 'ライティング ', 'WordPress '];
    const texts = ['Webサイト制作 ', 'ライティング '];
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
        setTimeout(type, 300);
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
            strat: "top 95%",
            end: "bottom 5%",

        })

    });

    const images = gsap.utils.toArray('img');
    images.forEach((img, i) => {
        ScrollTrigger.create({
            trigger: img,
            toggleClass: 'active',
            strat: "top 95%",
            // end: "bottom 5%",

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

            navLin.removeClass('clicked');
            header.removeClass('clicked');
            headerIn.removeClass('clicked');
            nav.removeClass('clicked');
            navHam.removeClass('clicked');
            navList.removeClass('clicked');

            return false;
        });
    });


    //お問い合わせ送信後と遷移しない
    let contactForm = $('#js-contact_form');
    $(document).ready(function () {

        contactForm.submit(function (event) {
            let formData = contactForm.serialize();

            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2EYyj02s4RsRpAxRPVd9rrj0bAqqQzgMMT73U3R0j1DufXg/formResponse",
                data: formData,
                type: "POST",
                dataType: "xml",

                statusCode: {

                    0: function () {

                        $("#js-end_msg").delay(1000).slideDown("slow");

                        $("#js-submit_btn").css({
                            "opacity":"0",
                            "transition":".5",
                            "pointer-events":"none"
                            });
                        },

                    500: function () {
                        $("#js-false_msg").delay(1000).slideDown("slow");

                    }
                }

            });
            event.preventDefault();
        });

    });

});


