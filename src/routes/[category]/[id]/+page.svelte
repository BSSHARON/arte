<script>
    import { page } from '$app/state';
    import { cart, addToCart, removeFromCart, updateQuantity, updateSizeQuantity } from '$lib/stores/cart.svelte.js';
	import { goto } from '$app/navigation';
/** @type {import('./$types').PageProps} */
let { data } = $props();
    let item = data.item;
    let category = data.category;        
    let itemQuantity = $state(1);;

    function increment() {
        itemQuantity = Math.min(itemQuantity + 1);
    }

    function decrement() {
        itemQuantity = Math.max(1, itemQuantity - 1,1);
    }

    function handleAddToCart(item, itemQuantity = 1, sizeIndex = 0, kindIndex = 0, spacersIndex = 0) {
        const existingItem = cart.cart.find(p => p.id === item.id);
        if (existingItem) {
            updateQuantity(item,  itemQuantity);
        } else {
            console.log(itemQuantity)
            addToCart(item, itemQuantity, sizeIndex, kindIndex, spacersIndex);
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
    let spacersIndex = $state(0)
    import Seo from '$lib/components/seo/seo.svelte';
</script>
<Seo 
  title={`Arte | אמנות | ${item?.name}`}
  description={item?.description}
  url={page.url.pathname}
  keywords="art, אומנות, אמנות, ציורי שמן"
  image1={`https://${page.url.hostname}${item?.images[0]?.src}`}
  image2={`https://${page.url.hostname}${item?.images[0]?.src}`}
  image3={`https://${page.url.hostname}${item?.images[0]?.src}`} 
  image4={`https://${page.url.hostname}${item?.images[0]?.src}`} 
/>
    <section style="margin-top: 120px;" class="section" id="product">
        <div class="container">
            <div class="back-button">
                <button title='חזרה' onclick={() => goto(`/${category.category}`)} class="back-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5"/>
                        <polyline points="12 19 5 12 12 5"/>
                    </svg>
                    חזרה
                </button>
            </div>
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
                    <span dir="rtl" style="direction: rtl; text-align: right;">{item?.description}</span>
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

                            {#if item?.kind?.length > 0}
                            <div class="kind-select">
                                <h5 class="quantity-content-h5">בחירת סוג</h5>
                                <select bind:value={kindIndex} class="quantity-content-select select-arrow-padding">
                                    {#each item?.kind as kind, i}
                                        {#if item?.sizes[sizeIndex]?.price[i] !== null && item?.sizes[sizeIndex]?.price[i] !== undefined}
                                            <option class="quantity-content-option" value={i}>{kind.name}</option>
                                        {/if}
                                    {/each}
                                </select>
                            </div>
                            {/if}
                            {#if item?.spacers.length > 0}
                            <div class="kind-select">
                            <h5 class="quantity-content-h5">בחירת צבע</h5>
                            <select bind:value={spacersIndex} class="quantity-content-select select-arrow-padding">
                                    {#each item?.spacers as kind, i}
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
                                        <button onclick={() => handleAddToCart(item, itemQuantity, sizeIndex,spacersIndex)}>הוסף לסל</button>
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
.back-btn {
    background: transparent;
    border: none;
    color: #2a2a2a;
    padding: 8px 15px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.back-btn svg {
    transform: rotate(180deg); /* Flip the arrow for RTL */
    width: 20px;
    height: 20px;
}

.back-btn:hover {
    color: #f1c40f;
    background: transparent;
}
.back-button {
        margin-bottom: 20px;
        text-align: right;
    }
.back-btn:hover svg {
    stroke: #f1c40f;
}
</style>