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
							localStorage.setItem('cart', JSON.stringify(cart.cart));
					} else {
							cart.cart = cart.cart.filter((cartItem) => cartItem != product)
							localStorage.setItem('cart', JSON.stringify(cart.cart));
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of cart.cart) {
							if(item.id === product.id) {
								product.quantity += 1
								localStorage.setItem('cart', JSON.stringify(cart.cart));
								return;
							}
					}
	}

	let total = $derived(cart.cart.reduce((sum, item) => sum + calculatePrice(item) * item.quantity, 0));

 function close(){
	console.log("yy")
  check = false;
  cart.cart = [];
}
const calculatePrice = (item) => {
    // בדוק אם יש גדלים זמינים
    if (!item.sizes || item.sizes.length === 0) {
        return item.price; // אם אין גדלים, החזר את המחיר הבסיסי
    }

    // חפש את הגודל הראשון עם כמות זמינה
    for (let size of item.sizes) {
        if (size.quantity > 0) {
            // חפש את סוג ההדפסה הראשון עם כמות זמינה
            for (let kind of item.kind) {
                if (kind.quantity > 0) {
                    const sizeIndex = item.sizes.indexOf(size);
                    const kindIndex = item.kind.indexOf(kind);
                    return size.price[sizeIndex]; // החזר את המחיר לפי אינדקס הגודל והסוג
                }
            }
        }
    }

    return item.price; // אם כל הכמויות הן 0, החזר את המחיר הבסיסי
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
			<p>₪{calculatePrice(item) * item.quantity}</p>
		</div>
	{/each}
	<div dir="rtl" class="total">
		<h4>סך הכל:  ₪{total}</h4>
	</div>
</div>
<div style="max-width: 90%; margin: 0 auto;">
    {#if check == false}
<button class="w-100 btn btn-primary btn-lg" onclick={()=>check = true} >ביצוע הזמנה</button>
    {:else}
    <Check amount={total}/>
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
