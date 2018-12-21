$(function(){
	/*rem*/
(function() {
	 setRem();
	 window.addEventListener('orientation' in window ? "deviceorientation":"resize",setRem);
	 function setRem(){
	    var html = document.documentElement;
	    var htmlWidth = html.getBoundingClientRect().width;
	    html.style.fontSize = htmlWidth / 15 + "px";
	 }
})();
	/*click logo*/
	var $logoBtn = $('header img');
	$logoBtn.on('click',function(){
		window.location.href = './index.html';
	});
	/*navDialog*/
	(function(){
		var $navBtn = $('header .more');
		var $navDialog = $('#navDialog');
		var $close = $navDialog.find('.close');
		var $login = $navDialog.find('.login');
		var $mask = $('#mask');
		var $loginLog = $('#quidLogin');

		$navBtn.on('click',function(){

			$navDialog.show();
		});
		$close.on('click',function(){
			$navDialog.hide();
		});
		$login.on('click',function(){
			$navDialog.hide();
			$mask.show();
			$loginLog.show();
		});
	})();
	/*searchlog*/
	(function(){
		var $dialog = $('#searchLog');
		var $btn = $('header .search');
		var $close = $('#searchLog .close');

		$btn.on('click',function(){
			$dialog.toggle();
		})
		$close.on('click',function(){
			$dialog.hide();
		})
	})();
	/*quidLogin*/
	(function(){
		var $mask = $('#mask');
		var $btn = $('header .login')
		var $loginLog = $('#quidLogin');
		var $loginbtn = $loginLog.find('.btn');
		$btn.on('click',function(){
			$mask.show();
			$loginLog.show();
		});
		$loginbtn.on('click',function(){
			$mask.hide();
			$loginLog.hide();
		})
	})();
	/*banner*/
	(function(){
		var $imgs = $('#content .slider li');
		// console.log($imgs.length);
		var iNow = 0;
		var timer = null;
		clearInterval(timer);
		timer = setInterval(function(){
			iNow ++;
			if (iNow == 3) {
				iNow = 0
			}
			// console.log(iNow);
			$imgs.eq(iNow).show().siblings().hide();
		},3000);
		$imgs.on('mouseover',function(){
			clearInterval(timer);
		});
		$imgs.on('mouseout',function(){
			timer = setInterval(function(){
			iNow ++;
			if (iNow == 3) {
				iNow = 0
			}
			// console.log(iNow);
			$imgs.eq(iNow).show().siblings().hide();
		},3000);
		});
	})();
});