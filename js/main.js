$(function () {
    // 좌우 스크롤
    $(window).scroll(function(){
        $('header').css('left', 0-$(this).scrollLeft());
    });

        var container = $('.slidershow'),
            slideGroup = container.find('.slideshow_slides'),
            slides = slideGroup.find('span'),
            nav = container.find('.slideshow_nav'),
            indecator = container.find('.indicator'),
            slideCount = slides.length,
            indecatorHtml = '',
            currentIndex = 0, // 현재 보고있는 것
            duration = 500,
            easing = 'easeInOutExpo',
            interval = 5000,
            timer;
    
        // 슬라이드를 가로로 배열
        // slides 마다 할일 , left 0% 100% 200% 300%
        // console.log(slides);
        slides.each(function (i) {
            var newLeft = i * 100 + '%';
            $(this).css({ 'left': newLeft });
            // <a href="">1</a>
            // var i = 2; i = i+2; i +=2
            // indicatorHtml = indicatorHtml + ??
            // indicatorHtml += ??
            indecatorHtml += '<a href="">' + (i + 1) + '</a>';
            // console.log(indecatorHtml);
        }); // slides.each
        // A.text(B); a요소의 b의 내용을 글씨 형태로 추가
        // A.html(B); a요소의 b의 내용을 html 형태로 추가
        indecator.html(indecatorHtml);
    
        // 슬라이드 이동 함수
        function goToSlide(index) {
            // i 0 left:0%, i 1 left:-100%
            slideGroup.animate({ left: -100 * index + '%' }, duration, easing);
            currentIndex = index;
            // console.log(currentIndex);
            updateNav(); // 처음인지 마지막인지 검사.active
        };
        function updateNav(){
            var navPrev = nav.find('.prev');
            var navNext = nav.find('.next');
            // 처음 currentIndex = 0 이전버튼이 안 보이도록
            if(currentIndex == 0){
                navPrev.addClass('disavled');
            }else{
                navPrev.removeClass('disavled');
            }
            
            // 마지막 currentIndex = 3 다음버튼이 안 보이도록
            if(currentIndex == slideCount-1){
                navNext.addClass('disavled');
            }else{
                navNext.removeClass('disavled');
            }
    
            // 모든요소에서 active 빼고, 원하는 요소에만 active 추가
            // indecator.find('a').removeClass('active');
            // .eq(숫자)
            // indecator.find('a').eq(currentIndex).addClass('active');
    
            // 원하는 요소에만 active를 추가하고 나머지들에서 active 빼기
            // 형제 자매는 영어로? siblings
            indecator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');
        }
    
        // 인디케이터 이동하기
        indecator.find('a').click(function (e) {
            e.preventDefault();
            var idx = $(this).index();
            // console.log(idx);
            goToSlide(idx);
        });
    
        // 좌우 버튼으로 이동하기
        // 다음버튼 클릭 c+1 -> gotoslide(?);
        // 이전버튼 클릭 c-1 -> gotoslide(?);
        nav.find('a').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('prev')) {
                // var i = currentIndex -1;
                goToSlide(currentIndex - 1);
            } else {
                // var i = currentIndex -1;
                goToSlide(currentIndex + 1);
            }
        });
        updateNav(); // 처음인지 마지막인지 검사
    
        // 자동 슬라이드 함수
        function startTimer(){
            // 일정시간 마다 할일
            // setInterval(할일, 시간), clearInterval(이름)
            // 할일(함수) function(){실제로 할일}
            timer = setInterval(function(){
                // nextindex c0 n1, c1 n2, .... c3 n0
                // (0+1)%4 = 1,... (3+1)%4 = 0
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            },interval);
        }
        startTimer();
    
        function stopTimer(){
            clearInterval(timer);
        }
        container.mouseenter (function(){
            stopTimer();
            // console.log(stopTimer);
        }).mouseleave(function(){
            startTimer();
        });

        // scroll
        var $menu = $('.quick_menu ul li'),
            $contents = $('#contents > section');

            console.log($contents);

        $menu.click(function(x){
            x.preventDefault();
            var idx = $(this).index();
            var section = $contents.eq(idx);

            var sectionDistance = section.offset().top;
            console.log(sectionDistance);

            $('html,body').stop().animate({scrollTop : sectionDistance});
        })
        $('.scroll').click(function (x) {
            x.preventDefault();
        
            $('html,body').animate({ scrollTop: $(this.hash).offset().top},500);
        })

        // $(window).scroll(function () {
        //     $contents.each(function () {
        //         if ($(this).offset().top <= $(window).scrollTop()) {
        //             var idx = $(this).index();
        //             $menu.removeClass('on');
        //             $menu.eq(idx).addClass('on');
        //         }
        //     });
        // });

        // sub menu
        $('.sub1').mouseover(function () {
            $('.line1').css('display', 'block');
        });
        $('.sub1').mouseleave(function () {
            $('.line1').css('display', 'none');
        });
        $('.sub2').mouseover(function () {
            $('.line2').css('display', 'block');
        });
        $('.sub2').mouseleave(function () {
            $('.line2').css('display', 'none');
        });
        $('.sub3').mouseover(function () {
            $('.line3').css('display', 'block');
        });
        $('.sub3').mouseleave(function () {
            $('.line3').css('display', 'none');
        });
        $('.sub4').mouseover(function () {
            $('.line4').css('display', 'block');
        });
        $('.sub4').mouseleave(function () {
            $('.line4').css('display', 'none');
        });
        $('.sub5').mouseover(function () {
            $('.line5').css('display', 'block');
        });
        $('.sub5').mouseleave(function () {
            $('.line5').css('display', 'none');
        });
    
});