<script>
    /**
     * @type {any[]}
     */
   import { cart } from '$lib/stores/cart.svelte.js';

  console.log(cart.cart)
</script>

<div class="cart-page " dir="rtl">
    <h1>סל הקניות</h1>
    {#if cart.cart.length > 0}
        <div class="cart-items">
            {#each cart.cart as item}
                <div class="cart-item">
                    <img src={item.images[0].src} alt={item.name} />
                    <div class="item-details">
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <p>סל הקניות ריק.</p>
    {/if}
</div>

<style>
    .cart-page {
        text-align: center;
        margin-top: 140px;
        max-width: 1200px;
        padding: 20px;
    }

    .cart-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    .cart-item {
        display: flex;
        gap: 10px;
        border: 1px solid #ddd;
        padding: 10px;
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
</style>
