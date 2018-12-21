$(function(){
	var $btn = $('#content .leftSection .accept .btn');
	var $userName = $('#content .leftSection  input').eq(0);
	var $total = $('#content .leftSection  input');
	var $textarea = $('#content .leftSection  textarea');

	var isEmail = false;
	var rg1 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	
	// console.log(isEmail);
	$btn.on('click',function(){
			// console.log(isEmail);
			// console.log($userName.val());
		isEmail = rg1.test($userName[0].value);
		if (isEmail) {
			$userName.next('.warning').hide();
		}else {
			$userName.next('.warning').show();
		}
		$total.each(function(index, el) {
			if (index != 0) {
				if ($(el).val()) {
					$(el).next('.warning').hide();
				}else {
					$(el).next('.warning').show();
				}
			}
		});
		if ($textarea.val()) {
			$textarea.next('.warning').hide();
		}else {
			$textarea.next('.warning').show();
		}
	});
});