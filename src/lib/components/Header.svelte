<script>
	import { page } from '$app/state';
    import { cart } from '$lib/stores/cart.svelte.js';
	import { favorites } from '$lib/stores/favorites.svelte';
    let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

  $effect(() => {
	console.log(favorites.favorites,cart.cart, favorites.favorites.length);
  });
 
</script>
 <!-- ***** Header Area Start ***** -->
 <header class="header-area header-sticky">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="main-nav">
					<!-- ***** Logo Start ***** -->
					<a href="/" class="logo">
						<img src="/images/logo.png">
					</a>
					<!-- ***** Logo End ***** -->
					<!-- ***** Menu Start ***** -->
					<ul class="nav" style:display={menuOpen ? 'block' : 'none'}>
						<li class="scroll-to-section"><a href="/" class:active={page.url.pathname === '/'}>דף הבית</a></li>
						<li class="scroll-to-section"><a href="/about" class:active={page.url.pathname === '/about'}>אודות</a></li>
						<li class="scroll-to-section"><a href="/oilpaintings" class:active={page.url.pathname === '/oilpaintings'}>ציורי שמן</a></li>
						<li class="scroll-to-section"><a href="/digitalart" class:active={page.url.pathname === '/digitalart'}>אומנות דיגיטלית</a></li>
						<li class="submenu">
							<a href="javascript:;">מארזים - בטון</a>
							<ul>
								<li><a href="/">Lovely White</a></li>
								<li><a href="/">Minimal Moods</a></li>
								<li><a href="/">Neutral Vibes</a></li>
								<li><a href="/">Timeless Concrete</a></li>
							</ul>
						</li>
						<li class="submenu">
							<a >בטון - עבודת יד</a>
							<ul>
								<li><a href="/baton01" class:active={page.url.pathname === '/baton01'}>אקססוריז לעיצוב הבית</a></li>
								<li><a href="/baton02" class:active={page.url.pathname === '/baton02'}>קערות בטון מעוצבות  </a></li>
								<li><a href="/baton03" class:active={page.url.pathname === '/baton03'}>פמוטי בטון </a></li>
								<li><a href="/baton04" class:active={page.url.pathname === '/baton04'}>אגרטלים מבטון</a></li>
							</ul>
						</li>
						<li class="scroll-to-section"><a href="/baton03" class:active={page.url.pathname === '/baton03'}>נרות, מבשמים ואווירה</a></li>
					</ul>        
					<a class='menu-trigger' onclick={toggleMenu} >
						<span>Menu</span>
					</a>
					<!-- ***** Menu End ***** -->
          <ul class="nav">
            <li class="scroll-to-section">
              <a href="/favorites">
                <i class="fa fa-heart"></i>
                <span>{favorites.favorites ? Object.keys(favorites.favorites).length : 0}</span>
              </a>
            </li>
            <li class="scroll-to-section">
              <a href="/cart">
                <i class="fa fa-shopping-cart"></i>
                <span>{cart.cart ? cart.cart.length : 0}</span>
              </a>
            </li>
          </ul>
				</nav>
			</div>
		</div>
	</div>
</header>
