$(function(){
	//移动端
	(function(){
		var $btn = $('#contennt .leftNav .title');

		var $span = $btn.find('span');
		var $ul = $('#contennt .leftNav ul');
		$btn[0].addEventListener('touchstart',function(){
			$span.toggleClass('active');
			$ul.toggle();
		});
	})();
});