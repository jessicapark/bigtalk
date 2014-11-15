
var imgUrl = "http://jessicapark.github.io/bigtalk/invitation/images/weixin.png";  //注意必须是绝对路径

var lineLink = "http://jessicapark.github.io/bigtalk/invitation/";   //同样，必须是绝对路径
var descContent = 'The BIG Talk · 奇点大学北京公开课介绍 邀请函'; //分享给朋友或朋友圈时的文字简介
var shareTitle = 'The BIG Talk · 奇点大学北京公开课介绍 邀请函';  //分享title
var appid = ''; //apiID，可留空

function shareFriend() {
   WeixinJSBridge.invoke('sendAppMessage',{
       "appid": appid,
       "img_url": imgUrl,
       "img_width": "200",
       "img_height": "200",
       "link": lineLink,
       "desc": descContent,
       "title": shareTitle
   }, function(res) {
       //_report('send_msg', res.err_msg);
   })
}
function shareTimeline() {
   WeixinJSBridge.invoke('shareTimeline',{
       "img_url": imgUrl,
       "img_width": "200",
       "img_height": "200",
       "link": lineLink,
       "desc": descContent,
       "title": shareTitle
   }, function(res) {
          //_report('timeline', res.err_msg);
   });
}
function shareWeibo() {
   WeixinJSBridge.invoke('shareWeibo',{
       "content": descContent,
       "url": lineLink,
   }, function(res) {
       //_report('weibo', res.err_msg);
   });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
   // 发送给好友
   WeixinJSBridge.on('menu:share:appmessage', function(argv){
       shareFriend();
   });
   // 分享到朋友圈
   WeixinJSBridge.on('menu:share:timeline', function(argv){
       shareTimeline();
   });
   // 分享到微博
   WeixinJSBridge.on('menu:share:weibo', function(argv){
       shareWeibo();
   });
}, false);

window.onload = function(){
  donghuabefore(1);
  donghua(1);//加载完成后自动播放第一页的动画
}
function donghuabefore(index){//每次翻页动画开始前，先为动画做准备，比方说透明度变成1或者移出屏幕

  $thispage=$('.page'+index);
  if(index==1){
    $thispage.find('.fm2,.fm3,.fm4').css('opacity',0);
    $thispage.find('.fm2').css('width','0px');
    $thispage.find('.fm3').css('width','0px');
  }
  if(index==2){
    $thispage.find('.page-title').css('margin-top','50px');
    $thispage.find('.pic1,.pic3').css('margin-left','-1000px');
    $thispage.find('.pic2,.pic4').css('margin-left','1000px');
    $thispage.find('.pic5,.pic6,.page-title').css('opacity',0);
    $thispage.find('.pic5,.pic6').css('margin-top','50px');
  }
  if(index==3){
    $thispage.find('.alumnus img, .page-title').css('opacity',0);
    $thispage.find('.alumnus img:nth-child(1), .alumnus img:nth-child(2), .alumnus img:nth-child(3), .alumnus img:nth-child(4), .alumnus img:nth-child(5), .alumnus img:nth-child(6)').css('margin-top','50px');
  }
  if(index==4){
    $thispage.find('.item img, .page-title').css('opacity',0);
    $thispage.find('.item img:nth-child(1)').css('margin-left','20px');
    $thispage.find('.item img:nth-child(4)').css('margin-left','-20px');
    $thispage.find('.item img:nth-child(5)').css('margin-left','20px');
    $thispage.find('.item img:nth-child(2)').css('margin-left','-20px');
    $thispage.find('.item img:nth-child(3)').css('margin-left','20px');
    $thispage.find('.item img:nth-child(6)').css('margin-left','-20px');
  }
  if (index==5) {
    $thispage.find('.page5-text img, .page-title, .timetable img').css('opacity',0);
    $thispage.find('.page5-line').css('height','0px');
    $thispage.find('.page5-text img').css('margin-right','-50px');
    $thispage.find('.timetable img').css('margin-top','50px');
  }
  if (index==11) {
    $thispage.find('.footer-logo, .footer-text1, .footer-text2, .sponsor-logo').css('opacity',0);
    $thispage.find('.footer-logo').css('height','0px');
    $thispage.find('.footer-logo').css('width','0px');
    $thispage.find('.footer-text1').css('height','0px');
    $thispage.find('.footer-text1').css('width','0px');
    $thispage.find('.footer-text2').css('height','0px');
    $thispage.find('.footer-text2').css('width','0px');
    $thispage.find('.sponsor-logo').css('height','0px');
    $thispage.find('.sponsor-logo').css('width','0px');
  };
}
function movedonghua($who,delaytime,speed){
  if (delaytime==null){delaytime=0;}
  if (speed==null){speed=300;}
  $who.delay(delaytime).animate({
    marginLeft:'0px',
    opacity:'1.0',
  },speed);
}
function movedonghua_page5($who,delaytime,speed,marginwho){
  if (delaytime==null){delaytime=0;}
  if (speed==null){speed=500;}
  if (marginwho==null){marginwho="top";}
if (marginwho=="top"){
  $who.delay(delaytime).animate({
    marginTop:'5px',
    opacity:'1.0',
  },speed);
}
if  (marginwho=="right"){
  $who.delay(delaytime).animate({
    marginRight: '0px',
    opacity:'1.0',
  },speed);
}
}
function donghua(index){  //每次翻页动画完成后会自动调用这个函数并且将页数传给index这个变量
  $('.zsy').fadeOut(500);  //将所有页已经显示的动画隐去
  $thispage=$('.page'+index);

  if(index==1){
    $thispage.find('.fm2').animate({
    opacity:'1.0',
    width:'200px'
  }, 500,function(){
    $thispage.find('.fm2').animate({
    opacity:'1.0',
    width:'190px'
  }, 100,function(){
    $thispage.find('.fm3').animate({
    opacity:'1.0',
    width:'130px'
  }, 500,function(){
    $thispage.find('.fm3').animate({
    opacity:'1.0',
    width:'120px'
  }, 100,function(){
    $thispage.find('.fm4').animate({
    opacity:'1.0',
  }, 500,function(){

  });
  });
  });
  });
  });
    
  }//page1

  if(index==11){

    $thispage.find('.footer-logo').animate({
    opacity:'1.0',
    height:'56px',
    width:'149px'
  }, 300,function(){
    $thispage.find('.footer-text1').animate({
    opacity:'1.0',
    height:'43px',
    width:'206px'
  }, 300,function(){
    $thispage.find('.footer-text2').animate({
    opacity:'1.0',
    height:'33px',
    width:'216px'
  }, 300,function(){
    $thispage.find('.sponsor-logo').animate({
    opacity:'1.0',
    height:'64px',
    width:'198px'
  }, 300,function(){

  });
  });
  });
  });
    
  }//page11

  if(index==2){
  
    $thispage.find('.page-title').animate({
    opacity:'1.0',
    marginTop:'20px'
  }, 400,function(){
    $thispage.find('.pic1').animate({
    marginLeft:'10px',
  }, 400,function(){
    $thispage.find('.pic1').animate({
    marginLeft:'0px',
  }, 200,function(){
    $thispage.find('.pic2').animate({
    marginLeft:'-10px',
  }, 400,function(){
    $thispage.find('.pic2').animate({
    marginLeft:'0px',
  },200,function(){
    $thispage.find('.pic3').animate({
    marginLeft:'10px',
  },400,function(){
    $thispage.find('.pic3').animate({
    marginLeft:'0px',
  },200,function(){
    $thispage.find('.pic4').animate({
    marginLeft:'-10px',
  },400,function(){
    $thispage.find('.pic4').animate({
    marginLeft:'0px',
  },200,function(){
    $thispage.find('.pic5').animate({
    opacity:'1.0',
  },500,function(){
    $thispage.find('.pic6').animate({
    opacity:'1.0',
  },500,function(){
  
  }); 
  });  
  });  
  });
  });
  });
  });  
  });
  });
  });
  });
    
  }//page2

  if(index==3){
    movedonghua_page5($thispage.find('.page-title'),0,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(1)'),300,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(2)'),500,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(3)'),700,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(4)'),900,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(5)'),1100,300,"top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(6)'),1300,300,"top");
  }

  if(index==4){
    movedonghua_page5($thispage.find('.page-title'),0,300,"top");
    movedonghua($thispage.find('.item img:nth-child(1)'),300);
    movedonghua($thispage.find('.item img:nth-child(4)'),500);
    movedonghua($thispage.find('.item img:nth-child(5)'),700);
    movedonghua($thispage.find('.item img:nth-child(2)'),900);
    movedonghua($thispage.find('.item img:nth-child(3)'),1100);
    movedonghua($thispage.find('.item img:nth-child(6)'),1300);
/*讲一下这个函数的作用：
  
  movedonghua($选择器,延迟时间,持续时间)
  其中延迟时间都是相对于翻到这一页开始的0时刻，单位是毫秒，默认为0
  持续时间与animal中的speed参数意义一样，表示这个动画从开始到结束播放多少毫秒，默认为300
  
*/
  }//page4

if (index == 5) {

 $thispage.find('.page-title').animate({
        opacity: '1.0',
    },
    1000,
    function() {
        $thispage.find('.page5-line').animate({
            height: '276px',
        },
        1000)
      });
movedonghua_page5($thispage.find('.timetable img:nth-child(1)'),1900,500,"top");
movedonghua_page5($thispage.find('.timetable img:nth-child(2)'),2100,500,"top");
movedonghua_page5($thispage.find('.timetable img:nth-child(3)'),2300,500,"top");
movedonghua_page5($thispage.find('.timetable img:nth-child(4)'),2500,500,"top");
movedonghua_page5($thispage.find('.timetable img:nth-child(5)'),2700,500,"top");

movedonghua_page5($thispage.find('.page5-text img:nth-child(1)'),3000,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(2)'),3300,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(3)'),3600,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(4)'),3900,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(5)'),4200,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(6)'),4500,500,"right");
movedonghua_page5($thispage.find('.page5-text img:nth-child(7)'),4800,500,"right");

/*讲一下这个函数的作用：
  
  movedonghua_page5($选择器,延迟时间,持续时间,marginTop/marginRight模式)
  其中延迟时间都是相对于翻到这一页开始的0时刻，单位是毫秒，默认为0
  持续时间与animal中的speed参数意义一样，表示这个动画从开始到结束播放多少毫秒，默认为500
  marginTop/marginRight模式的关键字分别为"top"和"right"
  
*/

} //page5

}