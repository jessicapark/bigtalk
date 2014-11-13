
//以下活动介绍的白色野渐现动画
 $('.thefree').live('click',function(){ //给要呼出白色背景的div加上class=thefree with=?
  temp=$(this).attr('with');
  $('.freeout').hide();
   x=0;
    y=$(document).scrollTop();
    tempw=$(window).width();
    temph=$(window).height();  
  $(".with"+temp).css({
      // width: tempw,
      // height: temph,
      left: x,
      top: y
    }).fadeIn();    //<div class="freeout with?">video?</div>
 })

 //关闭播放框
 $('.close').live('click',function(){ 
  $('.whitebox').fadeOut();
  $('.freeout').fadeOut();
 })

 $('.tabs nav ul li').live('click',function(){ 
  $('.whitebox').hide();
  $('.freeout').hide();
  window.scroll(0,0);

 })
