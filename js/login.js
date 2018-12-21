$(function(){
	/*read protical*/
	(function(){
		var $btn = $('#contennt .rightSection .checked')
		$btn.on('click',function(){
			$(this).toggleClass('active');
		})
	})();
	/*login*/
	(function(){
		var $btn = $('#contennt .rightSection .btn');
		var $userName = $('#contennt .rightSection .detail').eq(0);
		var $passWord = $('#contennt .rightSection .detail').eq(1);
		$btn.on('click',function(){
			// console.log($userName[0].value);
			var userValue = $userName[0].value;
			var passWordValue = $passWord[0].value;
			var isEmail = false;
			var isEmptPassword = false;
			var rg1 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			
			isEmail = rg1.test(userValue);
			if (passWordValue) {
				isEmptPassword = true;
			}
			if (isEmptPassword && isEmail) {

			}else {
				$userName.addClass('active');
				$passWord.addClass('active');
			}
		})
	})();
});