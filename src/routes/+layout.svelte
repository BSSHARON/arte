<script>
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	let { children } = $props();
    import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { cart } from '$lib/stores/cart.svelte';
	onMount(() => {
if (localStorage.getItem('cart')) {
	console.log(localStorage.getItem('cart'));
	cart.cart = JSON.parse(localStorage.getItem('cart'));
	console.log(cart.cart);
}
if (localStorage.getItem('favorites')) {
	favorites.favorites = JSON.parse(localStorage.getItem('favorites'));
}
});
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />