$(function(){
	/*更多设计师*/
	var $btn = $('#contennt .moreDesigners');
	var $ul = $btn.find('ul');
	var $span = $btn.find('span');
	var $lis = $ul.find('li');
	var $p = $btn.find('p');

	$btn.on('click',function (){
		$ul.toggle();
		$span.toggleClass('active');
	});
	$lis.on('click',function(){
		$p.html($(this).html());
	});
});