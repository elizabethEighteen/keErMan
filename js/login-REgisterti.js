$(function(){
	var $btn = $('#contennt .rightSection .bot .btn');
	var $total = $('#contennt .rightSection .ul1 input');
	
	/*下面*/
	var $username = $('#contennt .rightSection .ul2 input').eq(0);
	var $password = $('#contennt .rightSection .ul2 input').eq(1);
	var $acconsent = $('#contennt .rightSection .bot .accept');
	var isAccept = false;
	var isEmail = false;
	$acconsent.on('click',function(){
		isAccept = !isAccept;
		$(this).toggleClass('active');
	})
	$btn.on('click',function(){
		//上面input
		$total.each(function(index, el) {
			if($(el).val()){
				$(el).next('.warning').hide();
			}
			else {
				$(el).next('.warning').show();
			}
		});
		//接受协议
		// console.log(isAccept);
		if (isAccept) {
			$acconsent.next('.acceptWarning').hide();
		}else {
			$acconsent.next('.acceptWarning').show();
		}
		//邮箱和密码
		var rg1 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
		isEmail = rg1.test($username.val());
		if (isEmail) {
			$username.next('.warning').hide();
		}else {
			$username.next('.warning').show();
		}
		if ($password.val()) {
			$password.next('.warning').hide();
		}else {
			$password.next('.warning').show();
		}
	});
});