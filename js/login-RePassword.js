$(function(){
	/*login*/
	(function(){
		var $btn = $('#contennt .rightSection .btn');
		var $userName = $('#contennt .rightSection .detail').eq(0);
		$btn.on('click',function(){
			// console.log($userName[0].value);
			var userValue = $userName[0].value;
			var isEmail = false;
			var rg1 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			
			isEmail = rg1.test(userValue);
			
			if (isEmail) {
				$userName.removeClass('active')
			}else {
				$userName.addClass('active');
			}
		})
	})();
});