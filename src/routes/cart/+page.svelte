<script>
    /**
     * @type {any[]}
     */
   import { cart } from '$lib/stores/cart.svelte.js';
   import { delivery, deliveryTrue, deliveryFalse } from '$lib/stores/delivery.svelte.js';
    // ...existing code...

    // פונקציה חדשה לטיפול בשינוי מצב המשלוח
    function handleDeliveryToggle(checked) {
        const deliveryPrice = calculateDeliveryPrice();
        if (checked) {
            deliveryTrue(deliveryPrice);
        } else {
            deliveryFalse();
        }
    }
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


    let includeDelivery = $state(false);

    const calculateDeliveryPrice = () => {
        let maxDelivery = 0;
        
        for (let item of cart.cart) {
            // בדיקת ה-delivery הכללי של המוצר
            if (item.delivery > maxDelivery) {
                maxDelivery = item.delivery;
            }

            // בדיקת ה-delivery בתוך ה-sizes
            if (item.sizes && item.sizes.length > 0) {
                for (let size of item.sizes) {
                    if (size.quantity > 0 && size.delivery > maxDelivery) {
                        maxDelivery = size.delivery;
                    }
                }
            }
        }
        
        return maxDelivery;
    };

    // עדכון חישוב הסכום הכולל
	let total = $derived(
        cart.cart.reduce((sum, item) => sum + calculatePrice(item) * item.quantity, 0) + 
        (delivery.delivery ? delivery.amount : 0)
    );
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
                    return size.price[kindIndex]; // החזר את המחיר לפי אינדקס הגודל והסוג
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
        <div class="item-main-info">
            <img width="50" src={item.images[0].src} alt={item.name}/>
            <div class="item-details">
                <h3>{item.name}</h3>
                {#if item.sizes?.length > 0}
                    <div class="item-options">
                        <span>גודל: {item.sizes.find(s => s.quantity > 0)?.name || '-'}</span>
                        {#if item.kind?.length > 0}
                            <span>סוג: {item.kind.find(k => k.quantity > 0)?.name || '-'}</span>
                        {/if}
                        {#if item.spacers?.length > 0}
						<span>ספייסר:  {item.spacers.find(k => k.quantity > 0)?.name || '-'}</span>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
        <div class="item-controls">
            <div class="quantity buttons_added">
                <input type="button" value="-" class="minus" onclick={() => minusItem(item)}>
                <input type="number" min="1" bind:value={item.quantity} class="qty">
                <input type="button" value="+" class="plus" onclick={() => plusItem(item)}>
            </div>
            <p class="item-price">₪{calculatePrice(item) * item.quantity}</p>
        </div>
    </div>
{/each}
<div class="delivery-option">
    <label>
        <input 
            type="checkbox" 
            checked={delivery.delivery}
            onchange={(e) => handleDeliveryToggle(e.target.checked)}
        >
        <span>הוסף משלוח</span>
        <span class="delivery-price">₪{calculateDeliveryPrice()}</span>
    </label>
</div>

<div class="summary-section">
    <div class="summary-row">
        <span>סכום ביניים:</span>
        <span>₪{cart.cart.reduce((sum, item) => sum + calculatePrice(item) * item.quantity, 0)}</span>
    </div>
    
    {#if delivery.delivery}
    <div class="summary-row">
        <span>משלוח:</span>
        <span>₪{delivery.amount}</span>
    </div>
    {/if}
    
    <div class="summary-row total">
        <span>סך הכל לתשלום:</span>
        <span>₪{total}</span>
    </div>
</div>
</div>
<div style="max-width: 90%; margin: 0 auto;">
	{#if total > 0}
    {#if check == false}
<button class="w-100 btn btn-primary btn-lg" onclick={()=>check = true} >ביצוע הזמנה</button>
    {:else}
    <Check amount={total} />
    {/if}
	{/if}
</div>

<style>
  
  .delivery-option {
        margin: 15px 0;
        padding: 15px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-align: right;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .delivery-option label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;
    }

    .delivery-price {
        font-weight: 600;
        color: #2c3e50;
    }

    .summary-section {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-top: 20px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);

		margin-left: auto;
        margin-right: auto;
    }

    .summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        color: #2c3e50;
    }

    .summary-row.total {
        margin-top: 10px;
        padding-top: 15px;
        border-top: 2px solid #eee;
        font-weight: bold;
        font-size: 1.1em;
    }
	    .delivery-option input[type="checkbox"] {
        width: 18px;
        height: 18px;
    }

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

		max-width: 1200px;
        margin: 100px auto;
        padding: 20px;
        width: 100%;
	}
	.cart-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid #ddd;
        padding: 1rem;
        width: 100%;
        background-color: #fff;
        border-radius: 8px;
    }

    @media (min-width: 768px) {
        .cart-item {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    .item-main-info {
        display: flex;
        gap: 1rem;
        align-items: start;
    }

    .item-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .item-details h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .item-options {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.9rem;
        color: #666;
    }

    @media (min-width: 768px) {
        .item-options {
            flex-direction: row;
            gap: 1rem;
        }
    }

    .item-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    @media (max-width: 768px) {
        .cart-list {
            padding: 10px;
        }

        .summary-section {
            max-width: 100%;
        }
    }
    @media (min-width: 768px) {
        .item-controls {
            width: auto;
        }
    }

    .quantity.buttons_added {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .quantity input {
        width: 40px;
        text-align: center;
        padding: 0.25rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .quantity input[type="button"] {
        background-color: #f0f0f0;
        cursor: pointer;
        width: 30px;
    }

    .quantity input[type="button"]:hover {
        background-color: #e0e0e0;
    }

    .item-price {
        font-weight: 600;
        font-size: 1.1rem;
        color: #2c3e50;
        margin: 0;
    }

</style>
