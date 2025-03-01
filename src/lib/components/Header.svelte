<script>
	import { page } from '$app/state';
    import { cart } from '$lib/stores/cart.svelte.js';
	import { favorites } from '$lib/stores/favorites.svelte';
    let menuOpen = $state(false);
	import { navigating } from '$app/state';
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
	let subMenu1open = $state(false);
	let subMenu2open = $state(false);
	function toggleSubMenu1  (){
		subMenu1open = !subMenu1open;	
	}
	function toggleSubMenu2  (){
		subMenu2open = !subMenu2open;	
	}
	$effect(() => {
		if(navigating.to && menuOpen) {
			menuOpen = false;
		}
		})
 let scrollY = $state(0)
</script>
<svelte:window bind:scrollY/>
 <!-- ***** Header Area Start ***** -->
 <header class="header-area header-sticky " class:background-header={scrollY > 100}>
	 
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="main-nav" >
					<!-- ***** Logo Start ***** -->
					<a href="/" class="logo">
						<img src="/images/logo.png">
					</a>
					<!-- ***** Logo End ***** -->
					<!-- ***** Menu Start ***** -->
					<ul class="nav" style:display={menuOpen ? 'block' : 'none'} >
						<li class="scroll-to-section"><a href="/" class:active={page.url.pathname === '/'}>דף הבית</a></li>
						<li class="scroll-to-section"><a href="/about" class:active={page.url.pathname === '/about'}>אודות</a></li>
						<li class="scroll-to-section"><a href="/oilpaintings" class:active={page.url.pathname === '/oilpaintings'}>ציורי שמן</a></li>
						<li class="scroll-to-section"><a href="/baton07" class:active={page.url.pathname === '/subject/art'}>מארזי בטון  </a></li>
					<!---	אפשר להשתמש בזה אם תרצה עוד תפריט נפתח
					<li class="submenu" onclick={toggleSubMenu1}>
						<a >בטון - עבודת יד</a>
							<ul class:active={subMenu2open}>
								<li><a href="/baton01" class:active={page.url.pathname === '/baton01'}> מארזים בטון </a></li>
								<li><a href="/baton01" class:active={page.url.pathname === '/baton01'}>אקססוריז לעיצוב הבית</a></li>
								<li><a href="/baton02" class:active={page.url.pathname === '/baton02'}>קערות בטון מעוצבות  </a></li>
								<li><a href="/baton03" class:active={page.url.pathname === '/baton03'}>פמוטי בטון </a></li>
								<li><a href="/baton04" class:active={page.url.pathname === '/baton04'}>אגרטלים מבטון</a></li>
							</ul>
						</li>
					-->
						<li class="scroll-to-section"><a href="/subject/photos" class:active={page.url.pathname === '/subject/photos'}>אמנות דיגיטלית </a></li>

						<!----<li class="submenu" onclick={toggleSubMenu2} >-->
						<li class="scroll-to-section"><a href="/subject/baton" class:active={page.url.pathname === '/subject/baton'}>בטון עבודת יד </a></li>
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
					<a class='menu-trigger' onclick={toggleMenu} >
						<span>Menu</span>
					</a>
					<!-- ***** Menu End ***** -->
     
				</nav>
			</div>
		</div>
	</div>
</header>
