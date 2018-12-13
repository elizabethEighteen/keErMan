$(function(){
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
		$navBtn.on('click',function(){

			$navDialog.show();
		});
		$close.on('click',function(){
			$navDialog.hide();
		});
	})();
});