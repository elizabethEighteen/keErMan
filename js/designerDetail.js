$(function(){
	(function(){
		$btns = $('#contennt .production li');
		// alert($btns.length);
		$btns.on('click',function(){
			window.location.href = '../html/prodottiDetail.html';
		});
	})();
	/*导航栏*/
	(function(){
		var $btn = $('#contennt .moreDesigners p');
		var  $ul = $('#contennt .moreDesigners ul')
		var $lis = $ul.find('li');
		$btn.on('click',function(){
			// alert(1);	
			$ul.toggle();
		})
		$lis.on('click',function(){
			$ul.hide();
			$btn.html($(this).html());
		})

	})();
});