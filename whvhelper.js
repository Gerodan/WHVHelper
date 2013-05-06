// ==UserScript==
// @name          WHV Helper
// @namespace     http://weibo.com/gerodan10
// @author        Gerodan <gerodan10@gmail.com>
// @description   Work Holiday Visa Helper
// @homepage      http://weibo.com/gerodan10
// @include       https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=46
// @require       http://lib.sinaapp.com/js/jquery/1.8.3/jquery.min.js
// @version       0.1
// ==/UserScript==

//页面加载完成执行JS
 setTimeout(alertThis,1000);

function alertThis(){
var obj = $('body');
var key1 = 'China';
var key2 = 'Unfortunately the available places for this Working Holiday Scheme have been filled';

if (obj.length > 0) {
    var text = document.body.textContent || document.body.innerText;
    var isChina = text.indexOf(key1) >= 0;
    var noQuota = text.indexOf(key2) >= 0;
    
  if(isChina&&!noQuota){
        alert("Working Holiday Visa for China DO Have Quota");
         ring();
	}
   
    
    setTimeout(alertThis,10000);
	}
}

function ring () {
    GM_log('ringing!');
    var url = 'http://static.fishlee.net/resources/audio/song.ogg';
    var a = new window.Audio(url);
    a.play();
    setTimeout(ring,11000);
}
    
