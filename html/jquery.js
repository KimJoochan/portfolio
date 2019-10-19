module.exports=function(){return `
  $('#ban_wrap').click(function() {
                   $('#ban_wrap').animate({
                       left: -$('#banner').width()
                   }, function() {
                       $('#ban_wrap>li').first().appendTo('#ban_wrap');
                       $('#ban_wrap').css({
                           left: 0
                       })
                   })
               });

  let mbBanclick = 0;
           $('#mb_ban').click(function() {
               mbBanclick++;
               $('#mb_ban_wrap>li').fadeOut(500);
               $('#mb_ban_wrap>li').eq(mbBanclick).fadeIn();
               if (mbBanclick > 1) {
                   mbBanclick = -1;
               }
           })
  let tabCli = 0;
        $('#tabBut').click(function() {
            if (tabCli % 2 == 0) {
                $('#tabMainNav').stop().slideDown(500);
                tabCli = 1;
            } else if (tabCli % 2 == 1) {
                $('#tabMainNav').stop().slideUp(500);
                tabCli = 0;
            }
        });
        let tabSub = 0;
        $('#tabMainNav>li').click(function() {
            if (tabSub == 0) {
                $(this).find('.tabSubNav').stop().slideDown(500);
                tabSub = 1;
            } else if (tabSub == 1) {
                $('.tabSubNav').stop().slideUp(500);
                tabSub = 0;
            }
        })
  $('#left').click(function() {
    $('#ban_wrap').animate({
        left: -$('#banner').width()
      }, function() {
          $('#ban_wrap>li').first().appendTo('#ban_wrap');
          $('#ban_wrap').css({
              left: 0
          })
        })
      });
   $('#right').click(function() {
      $('#ban_wrap>li').last().prependTo('#ban_wrap');
      $('#ban_wrap').css({
          left: -$('#banner').width()
      }).animate({
          left: 0
      });
  })//메인배너슬라이드
  $('#nav>li').mouseenter(function() {
       $(this).find('.subNav').stop().slideDown();
   }).mouseleave(function() {
       $('.subNav').stop().slideUp();
   })
   $('.subNav>li').mouseenter(function() {
       $(this).find('.dowNav').stop().slideDown();
   }).mouseleave(function() {
       $('.dowNav').stop().slideUp();
   });
   $('.dowNav').mouseleave(function() {
       $('.dowNav').stop().slideUp();
   })//메누바
    let current = 0;
         $('#inner>li').click(function() {
              $('#inner>li').removeClass('on');
              $(this).addClass('on');
                var nowC = $(this).index();
               if (current == nowC) {
                     return;
                 }
                 $("#innerHal>li").hide();
                 $("#innerHal>li").eq(current).show().css({
                     left: 0
                 }).stop().animate({
                     left: -$('.abMask').width()
                 }, 2000);
                 $("#innerHal>li").eq(nowC).show().css({
                     left: $('.abMask').width()
                 }).stop().animate({
                     left: 0
                 }, 2000);
                 current = nowC;
             });//내부 고시원 상세보기 슬라이드
             $("#recChart>li").click(function() {
                  $(this).find(".moreView").stop().fadeIn(500);
                  let click_View = $(this).find(".moreView");
                  setTimeout(function() {
                      click_View.stop().slideUp(500);
                  }, 2000)
              })
        let cur = 0;
        $('#outer>li').click(function() {
          $('#outer>li').removeClass('on');
          $(this).addClass('on');
             var nowD = $(this).index();
             if (cur == nowD) {
                 return;
               }
           $("#outerHal>li").hide();
           $("#outerHal>li").eq(cur).show().css({
               left: 0
           }).stop().animate({
               left: -$('.abMask').width()
           }, 2000);
           $("#outerHal>li").eq(nowD).show().css({
           left: $('.abMask').width()
           }).stop().animate({
           left: 0
           }, 2000);
           cur = nowD;
         })//고시원 외부 상세보기 슬라이드

`
};
