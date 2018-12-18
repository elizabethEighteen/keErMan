$(function(){
	/*点击左侧导航栏*/
	var $btns = $('#contennt .leftNav li');
	$btns.on('click',function (){
		$(this).toggleClass('active');
	});
});