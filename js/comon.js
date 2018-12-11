/*添加header footer*/
(function(){
	var head = document.createElement('header');
	var foot = document.createElement('footer');
	head.innerHTML = `
		<img src="../img/img_logo.png" alt="">
		<ul class="nav">
			<li><a href="../html/prodotti.html">PRODOTTI</a></li>
			<li><a href="../html/cataloghi.html">CATALOGHI</a></li>
			<li><a href="../html/reteVendita.html">RETE VENDITA</a></li>
			<li><a href="../html/contract.html">CONTRACT</a></li>
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
	document.body.appendChild(head);
	document.body.appendChild(foot);
})();
/*click logo*/
	
(function(){
	var $logoBtn = $('header img');
	$logoBtn.on('click',function(){
		window.location.href = '../index.html';
	});
})()