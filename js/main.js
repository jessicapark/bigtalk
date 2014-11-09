var PIANX=50;var PIANY=100;
var dotx=[0,0,0,0,0,0,0,40,34,40,44,44,66,66,80,80,116,116,128,128,146,146,160,160,164,164,200,200,196,200,200];
var doty=[0,0,40,44,68,72,112,0,56,112,0,112,23,86,0,112,0,112,30,78,0,112,30,78,42,74,0,30,74,78,112];
var tempx=new Array();
var tempy=new Array();
var tempxs=new Array();
var tempys=new Array();
var ddd=new Array();
var dddd=new Array();
var lineP1=[1,2,7,3,4,11,13,8,12,10,5,6,9,14,15,17,16,19,21,30,29,23,22,27,26,20,18,25,28,24];
var lineP2=[2,7,1,4,11,13,8,12,10,3,6,9,5,15,17,16,14,18,19,21,30,29,23,22,27,26,20,24,25,28];
var lines=new Array();
var  ctx;
var ii=0;
var ww=300;
var hh=300;
var pp=1/100;
var ppp=0;
var ttt=100;
var RR=100;
var f=0;
$(document).ready(function () {

ww=$('nav').width();
//hh=ww/2;
if(ww>1200){ww=1200;}
PIANX=(ww-200)/2;
//PIANY=(hh-110)/2;
$('#canvas').attr('width',ww).attr('height',hh);
 init();//加载画面动画

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
  $('#canvas').hide();

 })

 //以下，关于big的动画
 $('.effect-jazz').live('click',function(){ 
  temp=$(this).attr('with');
    $('.whitebox').hide()
    x=$(this).offset().left;
    y=$(this).offset().top;
    tempw=$(this).width();
    temph=$(this).height();
    $('.boxwith'+temp).css({
      width: tempw,
      height: temph,
      left: x,
      top: y
    }).fadeIn('3000', function() {

        $(this).animate({
    
    height:'+=500px',
    top:'0px'
  });
    });
 })
});
window.onload = function(){

  //加载完成开始动画
    clearInterval(waittime);
    drawtimer=setInterval(timer,23);  
    ttt=100;
    

};

function init(){  
  ctx = document.getElementById('canvas').getContext('2d');
   ctx.strokeStyle="#9E0707";
   for (var i = 0; i < dotx.length; i++) {
  	dotx[i]+=PIANX;
  	doty[i]+=PIANY;
  
    
  };
  for (var i = 0; i < dotx.length; i++) {
  	tempx.push((Math.random()-0.5)*ww/2+dotx[i]);
  	tempy.push((Math.random()-0.5)*hh/2+doty[i]+RR);
  	ddd.push(2*Math.PI*(Math.random()-0.5)/60);
  	dddd.push(-1*Math.PI/2);
    
  };

 waittime=setInterval(wait,23);

 }  
   function timer(){
   	if(ppp>1){
   		clearInterval(drawtimer);
   		filler= setInterval("fill()",100);
   		ctx.fillStyle="rgba(224,6,21,1)";
   		return;
   	}
ctx.clearRect(0,0,1500,1500);

drawtemp();
line();
}
  function drawtemp() { 
  	ppp+=pp;
  	ttt--;
 	for (var i = 0; i < dotx.length; i++) { 
    xx=ppp*(dotx[i]-tempxs[i]);
    yy=ppp*(doty[i]-tempys[i]);
 	tempx[i]=tempxs[i]+xx;tempy[i]=tempys[i]+yy;
 	if((ttt+i)%10==9){
 	 alp=Math.random()+0.5;
 	ctx.fillStyle="rgba(224,6,21,"+alp+")";
 }
   ctx.beginPath();  
   ctx.arc(tempx[i],tempy[i],3,0,2*Math.PI);
   ctx.fill();
  };
   
}  
 function wait() { 
 	ctx.clearRect(0,0,1500,1500);
 	
 	ttt--;RR--;
   	var temp=3;
 	for (var i = 0; i < dotx.length; i++) { 
 		dddd[i]+=ddd[i];

    tempxs[i]=tempx[i]+Math.cos(dddd[i])*RR;
    tempys[i]=tempy[i]+Math.sin(dddd[i])*RR;
    if((ttt+i)%10==9){
    alp=Math.random()+0.5;
 	ctx.fillStyle="rgba(224,6,21,"+alp+")";
}
   ctx.beginPath();  
   ctx.arc(tempxs[i],tempys[i],3,0,2*Math.PI);
   ctx.fill();
   
  };
   
}  
 function draw() { 
 	for (var i = 0; i < dotx.length; i++) {

 	x=dotx[i];y=doty[i];

   ctx.beginPath();  
   ctx.arc(x,y,3,0,2*Math.PI);
   ctx.fill();
  };
   
}
function line(){
	
   for (var i = 0; i < parseInt(lineP1.length*ppp); i++) {
   ctx.beginPath(); 
   ctx.moveTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   ctx.lineTo(tempx[lineP2[i]],tempy[lineP2[i]]);
   ctx.stroke();

   }
}
function fill(){
	f++;
	if(f>7){clearInterval(filler)}
	if(f==7){ctx.clearRect(0,0,1500,1500);}
	//ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.fillStyle="rgba(224,6,21,1)";
	if(f<7)ctx.fillStyle="rgba(224,6,21,0.2)";
for (var i = 0; i < 3; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
   ctx.fill();
if(f<2)return;
	ctx.beginPath();
	if(f<7)ctx.fillStyle="rgba(224,6,21,0.3)";
for (var i = 3; i <10; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
   ctx.fill();
if(f<3)return;
   ctx.beginPath();
   if(f<7)ctx.fillStyle="rgba(224,6,21,0.4)";
for (var i = 10; i <13; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
   ctx.fill();
if(f<4)return;
 ctx.beginPath();
 if(f<7)ctx.fillStyle="rgba(224,6,21,0.6)";
for (var i = 13; i <17; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
      ctx.fill();
 if(f<5)return;
    ctx.beginPath();
    if(f<7)ctx.fillStyle="rgba(224,6,21,0.8)";
for (var i = 17; i <27; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
   ctx.fill();
   if(f<6)return;

       ctx.beginPath();
      if(f<7) ctx.fillStyle="rgba(224,6,21,1)";
for (var i = 27; i <30; i++) { 
   ctx.lineTo(tempx[lineP1[i]],tempy[lineP1[i]]);
   }
   ctx.fill();

$('#canvas').fadeOut(1000);
$('.logo').fadeTo(2000,1);
$('.elmt').fadeIn(2000);


}
