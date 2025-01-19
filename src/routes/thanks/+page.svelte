<script>
import { page } from "$app/state";
import { onMount } from "svelte";
import { goto } from '$app/navigation';
	import { cart } from "$lib/stores/cart.svelte";

	let success = false;

	onMount(() => {
		const params = page.url.searchParams;
		success = params.get('success') === 'true';
        cart.cart = [];
	});
</script>

{#if success}
	<div class="text-center mt-20">
		<h1 class="text-4xl font-bold text-green-600">תודה רבה!</h1>
		<p class="text-lg mt-4">הזמנתך אושרה בהצלחה.</p>
	</div>
{:else}
	<div class="text-center mt-20">
		<h1 class="text-4xl font-bold text-red-600">אופס!</h1>
		<p class="text-lg mt-4">משהו השתבש. אנא נסה שוב.</p>
	</div>
{/if}
