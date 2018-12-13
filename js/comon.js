/*添加header footer*/
(function(){
	var head = document.createElement('header');
	var foot = document.createElement('footer');
	var navDialog = document.createElement('div');
	navDialog.id = 'navDialog';

	head.innerHTML = `
		<img src="../img/img_logo.png" alt="">
		<ul class="nav">
			<li><a href="../html/prodotti.html">PRODOTTI</a></li>
			<li><a href="../html/cataloghi.html">CATALOGHI</a></li>
			<li><a href="../html/team.html">TEAM</a></li>
			<li><a href="../html/designers.html">DESIGNERS</a></li>
		</ul>
		<div class="buttons">
			<a class="navBtn wishlist" href="javascript:"></a>
			<a class="navBtn login" href="../html/login.html"></a>
			<a class="navBtn search" href="javascript:"></a>
			<a class="navBtn more" href="javascript:"></a>
		</div>
	
		`
	foot.innerHTML = `
		<div class="top clearfix">
			<div class="leftSection left">
				<p class="small">Follow us</p>
				<p class="big">BE SOCIAL</p>
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
				<p class="small">Scarica l'app</p>
				<p class="big">MY POLIFORM</p>
				<ul class="buttons">
				<li><a href="javascript:"></a></li>
				<li><a href="javascript:"></a></li>
			</ul>
			</div>
		</div>
		<div class="bottom clearfix">
			<p class="leftScript left">2018 POLIFORM S.P.A.</p>
			<ul class="ul2 right">
				<li><a href="javascript:">IT</a></li>
				<li><a href="javascript:">EN</a></li>
				<li><a href="javascript:">DE</a></li>
				<li><a href="javascript:">FR</a></li>
				<li><a href="javascript:">ES</a></li>
			</ul>
			<ul class="ul1 right">
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
	`
	document.body.appendChild(head);
	document.body.appendChild(foot);
	document.body.appendChild(navDialog);
	
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
	$navBtn.on('click',function(){

		$navDialog.show();
	});
	$close.on('click',function(){
		$navDialog.hide();
	});
})();