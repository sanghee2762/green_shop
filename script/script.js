(function($){

  let  cnt= 0;
  // 1. 메인버튼에 마우스 오버시 이벤트 
  // - 버튼 하일라이트 효과
  // - 해당(this).next() 서브메뉴가 부드럽게 나타난다.
  $('.main-btn').on({
    mouseenter: function(){  //마우스만 동작
      $('.main-btn').removeClass('on'); 
      $(this).addClass('on');

      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(300);
    },
    focusin: function(){  //키보드 동작(탭키) : 접근 고려한 이벤트
      $('.main-btn').removeClass('on'); 
      $(this).addClass('on');

      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(300);
    }

  });

  // 2. 헤더영역을 떠나면 
  // - 버튼 하일라이트 효과 삭제
  // - 해당(this).next() 서브메뉴가 부드럽게 사라진다.
  $('#header').on({
    mouseleave: function(){
      $('.main-btn').removeClass('on'); 
      $('.sub').stop().slideUp(300);
    }
  });


  // 섹션1 메인슬라이드
  cnt=0;
  // 1. 메인슬라이드 함수
  function mainSlide(){
    $('.slide-wrap').animate({left: -1200*cnt }, 600, function(){
      cnt===3?cnt=0:cnt;
      $('.slide-wrap').animate({left: -1200*cnt }, 0);

      // if(cnt===3){
      //   cnt=0;
      //   $('.slide-wrap').animate({left: -1200*cnt }, 0);
      // }
    });
  }

  // 2. 다음카운트 함수
  function nextCount(){
    cnt++;
    mainSlide();
  }

  // 3. 자동타이머 함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();


  //모달 열기
  $('.modal-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeIn(300);
    }
  });

  $('.modal-close-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeOut(300);
    }
  });


})(jQuery);