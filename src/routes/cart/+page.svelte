<script>
    /**
     * @type {any[]}
     */
   import { cart } from '$lib/stores/cart.svelte.js';

   let cartPay = false;
  console.log(cart.cart)
	import Check from '$lib/components/Check.svelte';
    
    let check = $state(false);
	const minusItem = (product) => {
		for(let item of cart.cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
					} else {
							cart.cart = cart.cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of cart.cart) {
							if(item.id === product.id) {
								product.quantity += 1
								return;
							}
					}
	}

	let total = $derived(cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0));

 function close(){
	console.log("yy")
  check = false;
  cart.cart = [];
}
</script>
<div class="cart-list" style="margin-top: 100px;">
	<h1>עגלת קניות</h1>

	{#each cart.cart as item }
		<div class="cart-item">
			<h3>{item.name}</h3>
			<img width="50" src={item.images[0].src} alt={item.name}/>
				<div class="quantity buttons_added">
					<input type="button" value="-" class="minus" onclick={() => {minusItem(item)}}>
					<input type="number" step="1" min="1" max="" name="quantity" bind:value="{item.quantity}" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
					<input type="button" value="+" class="plus" onclick={() => plusItem(item)}>
				</div>
			<p>₪{item.price * item.quantity > 0 ? item.price * item.quantity : item.price}</p>
		</div>
	{/each}
	<div dir="rtl" class="total">
		<h4>סך הכל:  ₪{total}</h4>
	</div>
</div>
<div >
    {#if check == false}
<button class="w-100 btn btn-primary btn-lg" onclick={()=>check = true} >ביצוע הזמנה</button>
    {:else}
    <Check />
    {/if}
</div>

<style>
  

    .cart-item {
        display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
        border: 1px solid #ddd;
        padding: 10px;
		width: 100%;
        background-color: #fff;
    }

    .cart-item img {
        max-width: 100px;
        height: auto;
    }

    .item-details {
        display: flex;
        flex-direction: column;
    }

	
	.total {
		text-align: left;
	}
	
	.cart-list {
		border: 2px  black;
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		background-color: #f7f7f7;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
</style>
