$(function(){
	/*点击左侧导航栏*/
	var $btns = $('#contennt .leftNav li');
	$btns.on('click',function (){
		$(this).toggleClass('active');
	});
	/*点击内容图片*/
	(function(){
		var $btns = $('#contennt .right li');
		$btns.on('click',function(){
			window.location.href = '../html/prodottiDetail.html';
		})
	})();
	//移动端
	(function(){
		var $btn = $('#contennt .leftNav .title');
		var $span = $btn.find('span');
		var $ul = $('#contennt .leftNav ul');
		$btn[0].addEventListener('touchstart',function(){
			$span.toggleClass('active');
			$ul.toggle();
		})
	})();
});