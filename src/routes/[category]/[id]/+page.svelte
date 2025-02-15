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

    function handleAddToCart(item, itemQuantity = 1, sizeIndex = 0, kindIndex = 0) {
        const existingItem = cart.cart.find(p => p.id === item.id);
        if (existingItem) {
            updateQuantity(item,  itemQuantity);
        } else {
            console.log(itemQuantity)
            addToCart(item, itemQuantity, sizeIndex, kindIndex);
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
    let kindIndex = $state(0)
</script>

    <section style="margin-top: 120px;" class="section" id="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="left-images">
                    {#if item?.images}
                        {#each item?.images as img}
                            {#if img?.only !== true}
                                <img class="" src="{img?.src}" alt="{img?.alt}" style="object-fit: contain; width: 100%; height: auto;">
                            {/if}
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="right-content">
                    <h4>{item?.name}</h4>
                    <span class="price"> {(item?.sizes.length > 0 ? item?.sizes[sizeIndex]?.price[kindIndex] : item?.price)} ₪</span>
                    <ul class="stars">
                    </ul>
                    <span>{item?.description}</span>
                    <div class="quote">
                        <i class="fa "></i><p>{item?.quote}</p>
                    </div>
                    <br>
                    <div class="">
                    
                        <div class="t">
                            {#if item?.sizes.length > 0}
                            <br>

                            <div class="size-select">

                            <h5 class="quantity-content-h5">בחירת מידה</h5>
                            <select bind:value={sizeIndex} class="quantity-content-select select-arrow-padding">
                                    {#each item?.sizes as size, i}
                                        <option class="quantity-content-option" value={i}>{size.name}</option>
                                    {/each}
                            </select>
                            </div>
                            {/if}

                            {#if item?.kind.length > 0}
                            <div class="kind-select">
                            <h5 class="quantity-content-h5">בחירת סוג</h5>
                            <select bind:value={kindIndex} class="quantity-content-select select-arrow-padding">
                                    {#each item?.kind as kind, i}
                                        <option class="quantity-content-option" value={i}>{kind.name}</option>
                                    {/each}
                            </select>
                            </div>
                            {/if}

                        </div>
                        <div  class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus" onclick={decrement}>
                                <input type="number" step="1" min="1" max="" name="quantity" bind:value="{itemQuantity}" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                                <input type="button" value="+" class="plus" onclick={increment}>
                            </div>

                            <div class="total " style="margin-top: 10px;">
                                <div class="main-border-button gray-background">
                                    <h4>עלות : {(item?.sizes.length > 0 ? item?.sizes[sizeIndex]?.price[kindIndex] : item?.price) * itemQuantity} ₪</h4>
                                    {#if item && cart.cart && cart.cart.find(p => p.id === item.id)}
                                        <button class="active" onclick={() => goto('/cart')}>להשלמת הרכישה</button>
                                    {:else if item}
                                        <button onclick={() => handleAddToCart(item, itemQuantity, sizeIndex,kindIndex)}>הוסף לסל</button>
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
        .size-select, .kind-select {
  background-color: #f2f2f2; /* Light gray background */
  border: 1px solid #d9d9d9; /* Slightly darker gray border */
  color: #2a2a2a; /* Dark gray text */
  padding: 5px;
  margin: 5px;
  font-size: 14px;
}

.size-select option, .kind-select option {
  background-color: #fff; /* White background for options */
  color: #2a2a2a; /* Dark gray text for options */
}

.size-select:focus, .kind-select:focus {
  outline: none;
  box-shadow: 0 0 5px #f1c40f; /* Yellow box shadow on focus */
}
  

    .quantity-content-h5 {
        color: #2a2a2a; /* Dark gray text */
        font-size: 18px;
        margin-bottom: 10px;
        text-align: right;
    }

    .quantity-content-select {
        background-color: #fff; /* White background */
        border: 1px solid #ccc; /* Light gray border */
        padding: 8px;
        margin-bottom: 10px;
        width: 100%;
        border-radius: 3px;
    }

    .quantity-content-option {
        background-color: #fff; /* White background */
        color: #333; /* Dark gray text */
    }
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
