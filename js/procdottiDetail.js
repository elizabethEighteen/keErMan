$(function(){
	/*banner*/

	/*点击爱心*/
	(function(){
		var $btn = $('#contennt .bot .btns .btn1');
		$btn.on('click',function(){
			$(this).toggleClass('active');
		});
	})();
	/*创建bannerul*/
	(function(){
		var $img = $('#contennt .image');
		var arr = ['../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg'];
		arr.reverse();
		// console.log(arr);
		for(var i=0; i<arr.length; i++) {
			if (i == 0) {
				var img1 = document.createElement('img');
				img1.src = arr[i];
				// $img[0].appendChild(img);
				//站位
				var white = document.createElement('div');
				white.className = 'white';
				var mask = $img.find('.mask');
				mask[0].appendChild(img1);
				mask[0].appendChild(white);

			}
			var img = document.createElement('img');
			img.src = arr[i];
			img.className = 'img m-hide'
			if (i == arr.length-1) {
				img.className = 'img'
			}
			$img[0].appendChild(img);
			// console.log(img);
		}
	})();
	/*bannerUl*/
	(function(){
		var $leftArrow = $('#contennt .leftArrow');
		var $rightArrow = $('#contennt .rightArrow');
		var $imgs = $('#contennt .image .img');
		var iNow = $imgs.length-1;
		var iRight = iNow-1;
		var iLeft = iNow+1;

		$leftArrow.on('click',function(){
			var $wrap = $('#contennt .image');
			var $imgWidth = $imgs.width();
			var $imgHeight = $imgs.height();
			// console.log($imgWidth);

			// $wrap.width($imgWidth);
			// $wrap.height($imgHeight);
			$imgs.each(function(index, el) {
				
				$(el).css('position','absolute');
				$(el).css('left',$imgWidth);
				
			});
			$imgs.eq(iNow%$imgs.length).css('left',0);
			/*移动*/
			$imgs.eq(iNow%$imgs.length).animate({left:-$imgWidth});
			$imgs.eq(iRight%$imgs.length).animate({left:0});
			iNow--;
			iRight--;
			iLeft--;


		});
		$rightArrow.on('click',function(){
			var $wrap = $('#contennt .image');
			var $imgWidth = $imgs.width();
			var $imgHeight = $imgs.height();
			// console.log($imgWidth);

			// $wrap.width($imgWidth);
			// $wrap.height($imgHeight);
			$imgs.each(function(index, el) {
				$(el).css('position','absolute');
				$(el).css('left',-$imgWidth);
			});
			$imgs.eq(iNow%$imgs.length).css('left',0);
			/*移动*/
			$imgs.eq(iNow%$imgs.length).animate({left:$imgWidth});
			$imgs.eq(iLeft%$imgs.length).animate({left:0});
			iNow++;
			iRight++;
			iLeft++;
		})

		window.onresize = function(){
			var $imgWidth = $imgs.width();
			$imgs.each(function(index, el) {
				$(el).css('position','absolute');
				$(el).css('left',-$imgWidth);
			});
			$imgs.eq(iNow%$imgs.length).css('left',0);
			// $leftArrow.css('top','50%');
		};
		
	})();
	//
});