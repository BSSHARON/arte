<script>
import { page } from "$app/state";
import { onMount } from "svelte";
import { goto } from '$app/navigation';
	import { cart } from "$lib/stores/cart.svelte";

	let success = false;

	onMount(async() => {
		const params = page.url.searchParams;
		success = params.get('success') === 'true';
		if (success && localStorage.getItem('cart')) {
            try {
                const response = await fetch('/api/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cart: localStorage.getItem('cart'),client: localStorage.getItem('client'), kind: false, phone: localStorage.getItem('lastPaymentId'),delivery: localStorage.getItem('delivery') })
                });
                if (!response.ok) {
                    console.error('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }
        }
        cart.cart = [];
		localStorage.removeItem('cart');
	});
</script>

{#if success}
	<div class="text-center my-custom-margin">
		<h1 class="display-4 text-success">תודה רבה!</h1>
		<p class="lead mt-4">הזמנתך אושרה בהצלחה.</p>
	</div>
{:else}
	<div class="text-center my-custom-margin">
		<h1 class="display-4 text-danger">אופס!</h1>
		<p class="lead mt-4">משהו השתבש. אנא נסה שוב.</p>
	</div>
{/if}
<style>
	.my-custom-margin {
	   margin-top: 8rem; /* או כל גודל אחר שתרצה */
	   margin-bottom: 4rem;
	 }
   </style>