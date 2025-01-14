<script>
	import { products } from '$lib/data/products';
    import { page } from '$app/state';
    import { cart, addToCart, removeFromCart, updateQuantity, updateSizeQuantity } from '$lib/stores/cart.svelte.js';
	import { goto } from '$app/navigation';
    let category = products.find(p => p.category === page.params.category);
    let item = category?.items?.find(i => i.id === page.params.id);
    let itemQuantity = $state(1);;

    function increment() {
        itemQuantity = Math.min(itemQuantity + 1);
    }

    function decrement() {
        itemQuantity = Math.max(1, itemQuantity - 1,1);
    }

    function handleAddToCart(item, itemQuantity = 1, sizeIndex = 0) {
        const existingItem = cart.cart.find(p => p.id === item.id);
        if (existingItem) {
            updateQuantity(item,  itemQuantity);
        } else {
            addToCart(item, itemQuantity, sizeIndex);
        }
    }

    function handleRemoveFromCart(item) {
        const existingItem = cart.cart.find(p => p.id === item.id);
        if (existingItem && existingItem.quantity > 1) {
            updateQuantity(item,  itemQuantity);
        } else {
            removeFromCart(item);
        }
    }
    let sizeIndex = $state(0)
</script>

    <section style="margin-top: 120px;" class="section" id="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="left-images">
                    {#if item?.images}
                        {#each item?.images as img}
                            {#if img?.only !== true}
                                <img src="{img?.src}" alt="{img?.alt}">
                            {/if}
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="right-content">
                    <h4>{item?.name}</h4>
                    <span class="price"> {item?.price} ₪</span>
                    <ul class="stars">
                    </ul>
                    <span>{item?.description}</span>
                    <div class="quote">
                        <i class="fa fa-quote-left"></i><p>{item?.quote}</p>
                    </div>
                    <div class="quantity-content">
                    
                        <div>
                            {#each item?.sizes as size, i}
                                <button onclick={()=>sizeIndex = i} style="margin: 5px;" class:active={sizeIndex === i}>{size.name}</button>
                            {/each}
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus" onclick={decrement}>
                                <input type="number" step="1" min="1" max="" name="quantity" bind:value="{itemQuantity}" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                                <input type="button" value="+" class="plus" onclick={increment}>
                            </div>

                            <div class="total " style="margin-top: 10px;">
                                <div class="main-border-button">
                                    <h4>עלות : {item?.price * itemQuantity} ₪</h4>
                                    {#if item && cart.cart && cart.cart.find(p => p.id === item.id)}
                                        <button class="active" onclick={() => goto('/cart')}>להשלמת הרכישה</button>
                                    {:else if item}
                                        <button onclick={() => handleAddToCart(item)}>הוסף לסל</button>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Product Area Ends ***** -->
     <style>
        button{
    border-color: #2a2a2a;
    color: #2a2a2a;
    font-size: 13px;
    border: 1px solid #fff;
    padding: 12px 25px;
    display: inline-block;
    font-weight: 500;
    transition: all .3s;
        }
        button:hover {
    color: #fff;
    background-color: #2a2a2a;
}
.active{
    border-color: #f1c40f;

}
     </style>
