var imgUrl = "http://jessicapark.github.io/bigtalk/invitation/images/weixin.png"; //注意必须是绝对路径
var ttt = true;
var lineLink = "http://jessicapark.github.io/bigtalk/invitation/"; //同样，必须是绝对路径
var descContent = 'The BIG Talk · 奇点大学北京公开课介绍 邀请函'; //分享给朋友或朋友圈时的文字简介
var shareTitle = 'The BIG Talk · 奇点大学北京公开课介绍 邀请函'; //分享title
var appid = ''; //apiID，可留空

function shareFriend() {
  WeixinJSBridge.invoke('sendAppMessage', {
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
  WeixinJSBridge.invoke('shareTimeline', {
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
    WeixinJSBridge.invoke('shareWeibo', {
      "content": descContent,
      "url": lineLink,
    }, function(res) {
      //_report('weibo', res.err_msg);
    });
  }
  // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  // 发送给好友
  WeixinJSBridge.on('menu:share:appmessage', function(argv) {
    shareFriend();
  });
  // 分享到朋友圈
  WeixinJSBridge.on('menu:share:timeline', function(argv) {
    shareTimeline();
  });
  // 分享到微博
  WeixinJSBridge.on('menu:share:weibo', function(argv) {
    shareWeibo();
  });
}, false);

function loader() {

  if (ttt) {
    $('.loading').fadeIn(1000).delay(1000).fadeOut(1000);
  }
}

function _sendStatData(url){
  setTimeout(function(){

      var $statLink = $('<link rel="'+ (/baidubrowser/i.test(navigator.userAgent) ? 'alternate ' : '') +'stylesheet" />');
      $('head').append($statLink);

      $statLink.attr(
          'href'
          , url
      );

      setTimeout(function(){
          $statLink.remove();
      }, 5000);

  },0);
}

$(document).ready(function() {


  $('section').hide();
  $('.page1').show();
          particlesJS('particles-js', {
            particles: {
                color: '#ff0314',
                shape: 'circle',
                opacity: 1,
                size: 2.5,
                size_random: true,
                nb: 20,
                line_linked: {
                    enable_auto: true,
                    distance: 250,
                    color: '#ff0314',
                    opacity: 0.5,
                    width: 1,
                    condensed_mode: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 200
                },
                mode: 'grab'
            },
            retina_detect: true
        });
  var lll = setInterval("loader()", 2000);
});
window.onload = function() {
  _sendStatData('http://nsclick.baidu.com/v.gif?pid=107&wise=1&from=【topic】&fr=&soe=2&m_ni=0&act=big_show&act_data_1=invitation');
  ttt = false;
  $('.loading').hide();
  $('section').show();
  donghuabefore(1);
  donghua(1); //加载完成后自动播放第一页的动画
  onePageScroll(".main", {
    sectionContainer: "section",
    loop: true,
    responsiveFallback: false,
    beforeMove: function(index) {
      donghuabefore(index);
    },
    afterMove: function(index) {
      donghua(index);
    },

  });
}

function donghuabefore(index) { //每次翻页动画开始前，先为动画做准备，比方说透明度变成1或者移出屏幕

  $thispage = $('.page' + index);
  if (index == 1) {
    $thispage.find('.fm2,.fm3,.fm4').css('opacity', 0);
    $thispage.find('.fm2').css('width', '0px');
    $thispage.find('.fm3').css('width', '0px');
  }
  if (index == 2) {
    $thispage.find('.page-title').css('margin-top', '50px');
    $thispage.find('.pic1,.pic3').css('margin-left', '-1000px');
    $thispage.find('.pic2,.pic4').css('margin-left', '1000px');
    $thispage.find('.pic5,.pic6,.page-title').css('opacity', 0);
    $thispage.find('.pic5,.pic6').css('width', '0px');

  }
  if (index == 3) {
    $thispage.find('.alumnus img, .page-title').css('opacity', 0);
    $thispage.find('.alumnus img:nth-child(1), .alumnus img:nth-child(2), .alumnus img:nth-child(3), .alumnus img:nth-child(4), .alumnus img:nth-child(5), .alumnus img:nth-child(6)').css('margin-top', '50px');
  }
  if (index == 4) {
    $thispage.find('.item img, .page-title').css('opacity', 0);
    $thispage.find('.item img:nth-child(1)').css('margin-left', '20px');
    $thispage.find('.item img:nth-child(4)').css('margin-left', '-20px');
    $thispage.find('.item img:nth-child(5)').css('margin-left', '20px');
    $thispage.find('.item img:nth-child(2)').css('margin-left', '-20px');
    $thispage.find('.item img:nth-child(3)').css('margin-left', '20px');
    $thispage.find('.item img:nth-child(6)').css('margin-left', '-20px');
  }
  if (index == 5) {
    $thispage.find('.page5-text img, .page-title, .timetable img').css('opacity', 0);
    $thispage.find('.page5-line').css('height', '0px');
    $thispage.find('.page5-text img').css('margin-right', '-50px');
    $thispage.find('.timetable img').css('margin-top', '50px');
  }
  if (index == 6) {
    $thispage.find('.page-title').css('opacity', 0);
    $thispage.find('.page-title').css('margin-top', '100px');
  }
  if (index == 7) {
    $thispage.find('.page-title').css('opacity', 0);
    $thispage.find('.page-title').css('margin-top', '100px');
  }
  if (index == 8) {
    $thispage.find('.page-title').css('opacity', 0);
    $thispage.find('.page-title').css('margin-top', '100px');
  }
  if (index == 9) {
    $thispage.find('.table img, .page-title, .table-text img').css('opacity', 0);
    $thispage.find('.table img:nth-child(2), .table img:nth-child(4), .table img:nth-child(6), .table img:nth-child(8)').css('margin-right', '-200px');
    $thispage.find('.table img:nth-child(1), .table img:nth-child(3), .table img:nth-child(5), .table img:nth-child(7)').css('margin-top', '-200px');
    $thispage.find('.table-text img:nth-child(1)').css('margin-left', '-200px');
    $thispage.find('.table-text img:nth-child(2)').css('margin-left', '200px');
    $thispage.find('.table-text img:nth-child(3)').css('margin-left', '-200px');
    $thispage.find('.table-text img:nth-child(4)').css('margin-left', '200px');
    $thispage.find('.table-text img:nth-child(5)').css('margin-left', '-200px');
    $thispage.find('.table-text img:nth-child(6)').css('margin-left', '200px');
    $thispage.find('.table-text img:nth-child(7)').css('margin-left', '200px');
  }

  if (index == 10) {
    $thispage.find('.absolute').css('opacity', '0');
    $thispage.find('.absolute').css('margin-top', '0px');
  }
  if (index == 11) {
    $thispage.find('.footer-logo, .footer-text1, .footer-text2, .sponsor-logo').css('opacity', 0);
    $thispage.find('.footer-logo').css('height', '0px');
    $thispage.find('.footer-logo').css('width', '0px');
    $thispage.find('.footer-text1').css('height', '0px');
    $thispage.find('.footer-text1').css('width', '0px');
    $thispage.find('.footer-text2').css('height', '0px');
    $thispage.find('.footer-text2').css('width', '0px');
    $thispage.find('.sponsor-logo').css('height', '0px');
    $thispage.find('.sponsor-logo').css('width', '0px');
  };
}

function movedonghua($who, delaytime, speed) {
  if (delaytime == null) {
    delaytime = 0;
  }
  if (speed == null) {
    speed = 300;
  }
  $who.delay(delaytime).animate({
    marginLeft: '0px',
    opacity: '1.0',
  }, speed);
}

function movedonghua_page5($who, delaytime, speed, marginwho) {
  if (delaytime == null) {
    delaytime = 0;
  }
  if (speed == null) {
    speed = 500;
  }
  if (marginwho == null) {
    marginwho = "top";
  }
  speed2 = speed - 200;
  if (marginwho == "top") {
    $who.delay(delaytime).animate({
      marginTop: '0px',
      opacity: '1.0',
    }, speed2, function() {
      $who.animate({
        marginTop: '5px',
      }, 200, function() {

      });
    });
  }
  if (marginwho == "right") {
    $who.delay(delaytime).animate({
      marginRight: '0px',
      opacity: '1.0',
    }, speed);
  }
}

function donghua(index) 
{ //每次翻页动画完成后会自动调用这个函数并且将页数传给index这个变量
 
  $thispage = $('.page' + index);

  if (index == 1) {
    $thispage.find('.fm2').animate({
      opacity: '1.0',
      width: '200px'
    }, 500, function() {
      $thispage.find('.fm2').animate({
        opacity: '1.0',
        width: '190px'
      }, 100, function() {
        $thispage.find('.fm3').animate({
          opacity: '1.0',
          width: '130px'
        }, 500, function() {
          $thispage.find('.fm3').animate({
            opacity: '1.0',
            width: '120px'
          }, 100, function() {
            $thispage.find('.fm4').animate({
              opacity: '1.0',
            }, 500, function() {

            });
          });
        });
      });
    });

  } //page1

  if (index == 11) {

    $thispage.find('.footer-logo').animate({
      opacity: '1.0',
      height: '56px',
      width: '149px'
    }, 300, function() {
      $thispage.find('.footer-text1').animate({
        opacity: '1.0',
        height: '43px',
        width: '206px'
      }, 300, function() {
        $thispage.find('.footer-text2').animate({
          opacity: '1.0',
          height: '33px',
          width: '216px'
        }, 300, function() {
          $thispage.find('.sponsor-logo').animate({
            opacity: '1.0',
            height: '64px',
            width: '198px'
          }, 300, function() {

          });
        });
      });
    });

  } //page11

  if (index == 2) {


    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");

    $thispage.find('.pic1').delay(500).animate({
      marginLeft: '10px',
    }, 400, function() {
      $thispage.find('.pic1').animate({
        marginLeft: '0px',
      }, 200, function() {
        $thispage.find('.pic2').animate({
          marginLeft: '-10px',
        }, 400, function() {
          $thispage.find('.pic2').animate({
            marginLeft: '0px',
          }, 200, function() {
            $thispage.find('.pic3').animate({
              marginLeft: '10px',
            }, 400, function() {
              $thispage.find('.pic3').animate({
                marginLeft: '0px',
              }, 200, function() {
                $thispage.find('.pic4').animate({
                  marginLeft: '-10px',
                }, 400, function() {
                  $thispage.find('.pic4').animate({
                    marginLeft: '0px',
                  }, 200, function() {
                    $thispage.find('.pic5').animate({
                      opacity: '1.0',
                      width: '300px'
                    }, 200, function() {
                      $thispage.find('.pic6').delay(200).animate({
                        opacity: '1.0',
                        width: '300px'
                      }, 200, function() {

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

  } //page2

  if (index == 3) {
    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(1)'), 300, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(2)'), 500, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(3)'), 700, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(4)'), 1200, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(5)'), 1400, 500, "top");
    movedonghua_page5($thispage.find('.alumnus img:nth-child(6)'), 1600, 500, "top");
  }

  if (index == 4) {
    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");
    movedonghua($thispage.find('.item img:nth-child(1)'), 300);
    movedonghua($thispage.find('.item img:nth-child(4)'), 500);
    movedonghua($thispage.find('.item img:nth-child(5)'), 700);
    movedonghua($thispage.find('.item img:nth-child(2)'), 1100);
    movedonghua($thispage.find('.item img:nth-child(3)'), 1300);
    movedonghua($thispage.find('.item img:nth-child(6)'), 1500);

  } //page4

  if (index == 5) {

    $thispage.find('.page-title').animate({
        opacity: '1.0',
      },
      300,
      function() {
        $thispage.find('.page5-line').animate({
            height: '276px',
          },
          1000)
      });
    movedonghua_page5($thispage.find('.timetable img:nth-child(1)'), 1900, 500, "top");
    movedonghua_page5($thispage.find('.timetable img:nth-child(2)'), 2100, 500, "top");
    movedonghua_page5($thispage.find('.timetable img:nth-child(3)'), 2300, 500, "top");
    movedonghua_page5($thispage.find('.timetable img:nth-child(4)'), 2500, 500, "top");
    movedonghua_page5($thispage.find('.timetable img:nth-child(5)'), 2700, 500, "top");

    movedonghua_page5($thispage.find('.page5-text img:nth-child(1)'), 3000, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(2)'), 3300, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(3)'), 3600, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(4)'), 3900, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(5)'), 4200, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(6)'), 4500, 500, "right");
    movedonghua_page5($thispage.find('.page5-text img:nth-child(7)'), 4800, 500, "right");

  } //page5

  if (index == 6) {
    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");
  }
  if (index == 7) {
    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");
  }
  if (index == 8) {
    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");
  }


  if (index == 10) {
    $thispage.find('.absolute').animate({
      marginTop: '-180px',
      opacity: '1'
    }, 500)
  }

  if (index == 9) {

    movedonghua_page5($thispage.find('.page-title'), 0, 500, "top");

    movedonghua_page5($thispage.find('.table img:nth-child(2)'), 300, 300, "right");
    movedonghua_page5($thispage.find('.table img:nth-child(4)'), 500, 300, "right");
    movedonghua_page5($thispage.find('.table img:nth-child(6)'), 700, 300, "right");
    movedonghua_page5($thispage.find('.table img:nth-child(8)'), 900, 300, "right");

    movedonghua_page5($thispage.find('.table img:nth-child(1)'), 700, 500, "top");
    movedonghua_page5($thispage.find('.table img:nth-child(3)'), 900, 500, "top");
    movedonghua_page5($thispage.find('.table img:nth-child(5)'), 1100, 500, "top");
    movedonghua_page5($thispage.find('.table img:nth-child(7)'), 1300, 500, "top");


    $thispage.find('.table-text img:nth-child(1)').delay(1500).animate({
      marginLeft: '10px',
      opacity: '1.0',
    }, 400, function() {
      $thispage.find('.table-text img:nth-child(1)').animate({
        marginLeft: '0px',
        opacity: '1.0',
      }, 200, function() {
        $thispage.find('.table-text img:nth-child(2)').animate({
          marginLeft: '-10px',
          opacity: '1.0',
        }, 400, function() {
          $thispage.find('.table-text img:nth-child(2)').animate({
            marginLeft: '0px',
            opacity: '1.0',
          }, 200, function() {
            $thispage.find('.table-text img:nth-child(3)').animate({
              marginLeft: '10px',
              opacity: '1.0',
            }, 400, function() {
              $thispage.find('.table-text img:nth-child(3)').animate({
                marginLeft: '0px',
                opacity: '1.0',
              }, 200, function() {
                $thispage.find('.table-text img:nth-child(4)').animate({
                  marginLeft: '-10px',
                  opacity: '1.0',
                }, 400, function() {
                  $thispage.find('.table-text img:nth-child(4)').animate({
                    marginLeft: '0px',
                    opacity: '1.0',
                  }, 200, function() {
                    $thispage.find('.table-text img:nth-child(5)').animate({
                      opacity: '1.0',
                      marginLeft: '10px',
                    }, 400, function() {
                      $thispage.find('.table-text img:nth-child(5)').animate({
                        opacity: '1.0',
                        marginLeft: '0px',
                      }, 200, function() {
                        $thispage.find('.table-text img:nth-child(6)').animate({
                          opacity: '1.0',
                          marginLeft: '-10px',
                        }, 400, function() {
                          $thispage.find('.table-text img:nth-child(6)').animate({
                            opacity: '1.0',
                            marginLeft: '0px',
                          }, 200, function() {
                            $thispage.find('.table-text img:nth-child(7)').animate({
                              opacity: '1.0',
                              marginLeft: '-10px',
                            }, 400, function() {
                              $thispage.find('.table-text img:nth-child(7)').animate({
                                opacity: '1.0',
                                marginLeft: '0px',
                              }, 200, function() {

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
        });
      });
    });



  }
}