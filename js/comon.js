/*rem*/
(function() {
     setRem();
     window.addEventListener('orientation' in window ? "deviceorientation":"resize",setRem);
     function setRem(){
        var html = document.documentElement;
        var htmlWidth = html.getBoundingClientRect().width;
        html.style.fontSize = htmlWidth / 15 + "px";
     }
})();

/*添加header footer*/
(function(){
	var head = document.createElement('header');
	var foot = document.createElement('footer');
	var navDialog = document.createElement('div');
	var searchLog = document.createElement('div');
	var mask = document.createElement('div');
	var loginQuid = document.createElement('div');
	navDialog.id = 'navDialog';
	searchLog.id = 'searchLog';
	mask.id = 'mask';
	loginQuid.id = 'quidLogin'

	head.innerHTML = `
		<img src="../img/img_logo.png" alt="">
		<ul class="nav m-hide">
			<li><a href="../html/prodotti.html">PRODOTTI</a></li>
			<li><a href="../html/cataloghi.html">CATALOGHI</a></li>
			<li><a href="../html/team.html">TEAM</a></li>
			<li><a href="../html/designers.html">DESIGNERS</a></li>
		</ul>
		<div class="buttons">
			<a class="navBtn wishlist" href="javascript:"></a>
			<a class="navBtn login" href="javascript:"></a>
			<a class="navBtn search" href="javascript:"></a>
			<a class="navBtn more" href="javascript:"></a>
		</div>
	
		`
	foot.innerHTML = `
		<div class="top clearfix">
			<div class="leftSection left">
				<p class="small m-hide">Follow us</p>
				<p class="big m-hide">BE SOCIAL</p>
				<ul class="buttons clearfix">
					<li><a href="javascript:"></a></li>
					<li><a href="javascript:"></a></li>
					<li><a href="javascript:"></a></li>
					<li><a href="javascript:"></a></li>
					<li><a href="javascript:"></a></li>
					<li><a href="javascript:"></a></li>
				</ul>
			</div>
			<div class="rightSection right">
				<p class="small m-hide">Scarica l'app</p>
				<p class="big m-hide">MY POLIFORM</p>
				<ul class="buttons">
				<li><a href="javascript:"></a></li>
				<li><a href="javascript:"></a></li>
			</ul>
			</div>
		</div>
		<div class="bottom clearfix">
			<p class="leftScript left mleft">2018 POLIFORM S.P.A.</p>
			<ul class="ul2 right mright">
				<li><a href="javascript:">IT</a></li>
				<li><a href="javascript:">EN</a></li>
				<li><a href="javascript:">DE</a></li>
				<li><a href="javascript:">FR</a></li>
				<li><a href="javascript:">ES</a></li>
			</ul>
			<ul class="ul1 right mright">
				<li><a href="javascript:">CONTATTI</a></li>
				<li><a href="javascript:">RISERVATA</a></li>
				<li><a href="javascript:">PRIVACY</a></li>
				<li><a href="javascript:">NOTE LEGALI</a></li>
				<li><a href="javascript:">COOKIE</a></li>
				<li><a href="javascript:">SCREDITS</a></li>
			</ul>
		</div>
		`
		navDialog.innerHTML = `
		<ul>
			<li><a href="../html/prodotti.html">PRODOTTI</a></li>
			<li><a href="../html/cataloghi.html">CATALOGHI</a></li>
			<li><a href="../html/team.html">TEAM</a></li>
			<li><a href="../html/designers.html">DISIGNERS</a></li>
			<li><a href="../html/chiSiamo.html">CHI SIAMO</a></li>
			<li><a href="../html/myLife.html">MY LIFE</a></li>
			<li><a href="../html/news.html">NEWS</a></li>
			<li><a href="../html/login.html">PRESS RELEASE</a></li>
			<li><a href="../html/contatti.html">CONTATTI</a></li>
			<li><a href="../html/newsletters.html">NEWSLETTERS</a></li>
			<li><a href="../html/areaRiservata.html">AREA RISERVATA</a></li>
		</ul>
		<div class="close"></div>
		<div class="btns clearfix pcHide">
			<div class="wish"></div>
			<div class="login"></div>
		</div>
	`
	searchLog.innerHTML = `
	<div class="mid clearfix">
			<input type="text" placeholder="Search the site...">
			<div class="btn">OK</div>
		</div>
		<span class="close"></span>
	</div>
	`
	loginQuid.innerHTML = `
	<img class="img1" src="../img/icon_lock.png" alt="">
	<img class="img2" src="../img/loginQuid.png" alt="">
	<input class="input1" type="text" placeholder="Username">
	<input class="input2" type="text" placeholder="Password">
	<div class="btn">Login</div>
	<div class="version">v2.6</div>
	<div class="switch">SWITCH TO CLIENT</div>
	`


	document.body.appendChild(head);
	document.body.appendChild(foot);
	document.body.appendChild(navDialog);
	document.body.appendChild(searchLog);
	document.body.appendChild(mask);
	document.body.appendChild(loginQuid);
	
})();
/*click logo*/
	
(function(){
	var $logoBtn = $('header img');
	$logoBtn.on('click',function(){
		window.location.href = '../index.html';
	});
})();
/*navDialog*/
(function(){
	var $navBtn = $('header .more');
	var $navDialog = $('#navDialog');
	var $close = $navDialog.find('.close');
	var $login = $navDialog.find('.login');
	var $mask = $('#mask');
	var $loginLog = $('#quidLogin');
	$navBtn.on('click',function(){

		$navDialog.show();
	});
	$close.on('click',function(){
		$navDialog.hide();
	});
	$login.on('click',function(){
		$navDialog.hide();
		$mask.show();
		$loginLog.show();
	});
})();
/*search*/
(function(){
	var $btn = $('header .search');
	$btn.on('click',function(){
		// alert(1);
	})
})();
/*searchlog*/
	(function(){
		var $dialog = $('#searchLog');
		var $btn = $('header .search');
		var $close = $('#searchLog .close');

		$btn.on('click',function(){
			$dialog.toggle();
		})
		$close.on('click',function(){
			$dialog.hide();
		})
	})();
/*quidLogin*/
	(function(){
		var $mask = $('#mask');
		var $btn = $('header .login')
		var $loginLog = $('#quidLogin');
		var $loginbtn = $loginLog.find('.btn');
		$btn.on('click',function(){
			$mask.show();
			$loginLog.show();
		});
		$loginbtn.on('click',function(){
			$mask.hide();
			$loginLog.hide();
		})
	})();