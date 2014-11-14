
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
  }
  if(index==2){
    $thispage.find('.pic1,.pic3').css('margin-left','-600px');
    $thispage.find('.pic2,.pic4').css('margin-left','600px');
    $thispage.find('.pic5,.pic6').css('opacity',0);
  }
}

function donghua(index){  //每次翻页动画完成后会自动调用这个函数并且将页数传给index这个变量
  $('.zsy').fadeOut(500);  //将所有页已经显示的动画隐去
  $thispage=$('.page'+index);

if(index==1){

    $thispage.find('.fm2').animate({
    opacity:'1.0',
    height:'+=5%',
    width:'+=5%'
  }, 2000,function(){
    $thispage.find('.fm3').animate({
    opacity:'1.0',
    height:'+=5%',
    width:'+=5%'
  }, 1000,function(){
    $thispage.find('.fm4').animate({
    opacity:'1.0',
    //height:'+=5%',
    //width:'+=5%'
  }, 1000,function(){

  });
  });
  });
    
  }//page1

if(index==2){
  
    $thispage.find('.pic1').animate({
    marginLeft:'0px',
  }, 1000,function(){
    $thispage.find('.pic2').animate({
    marginLeft:'0px',
  }, 1000,function(){
    $thispage.find('.pic3').animate({
    marginLeft:'0px',
  },1000,function(){
    $thispage.find('.pic4').animate({
    marginLeft:'0px',
  },1000,function(){
    $thispage.find('.pic5').animate({
    opacity:'1.0',
  },1000,function(){
    $thispage.find('.pic6').animate({
    opacity:'1.0',
  },2000,function(){
    
  });
  });
  });
  });
  });
  });
    
  }//page2
}