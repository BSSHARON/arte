<script>
	import { products } from '$lib/data/products';
    import { page } from '$app/state';
    import { cart, addToCart, removeFromCart } from '$lib/stores/cart.svelte.js';
    let category = products.find(p => p.category === page.params.category);
    let item = category?.items?.find(i => i.id === page.params.id);

</script>
 <!-- ***** Main Banner Area Start ***** -->
 <div class="page-heading" id="top">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="inner-content">
                    <h2></h2>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ***** Main Banner Area End ***** -->
    <section class="section" id="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="left-images">
                    {#each item.images as img}
                    {#if img.only !== true}
                    <img src="{img.src}" alt="{img.alt}">
                    {/if}
                    {/each}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="right-content">
                    <h4>{item.name}</h4>
                    <span class="price"> {item.price} ₪</span>
                    <ul class="stars">
                    </ul>
                    <span>{item.description}</span>
                    <div class="quote">
                        <i class="fa fa-quote-left"></i><p>{item.quote}</p>
                    </div>
                    <div class="quantity-content">
                        <div class="left-content">
                            {#if item && cart.cart && cart.cart.find(p => p.id === item.id)}
                            <button onclick={() => removeFromCart(item)}>הסר מהסל</button>
                        {:else if item}
                            <button onclick={() => addToCart(item)}>הוסף לסל</button>
                        {/if}
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus"><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""><input type="button" value="+" class="plus">
                            </div>
                            <div class="total " style="margin-top: 10px;">
                                <div class="main-border-button"> 
                                    <h4>עלות : {item.price} ₪</h4>
    
                                    {#if item && cart.cart && cart.cart.find(p => p.id === item.id)}
                                    <button onclick={() => removeFromCart(item)}>הסר מהסל</button>
                                {:else if item}
                                    <button onclick={() => addToCart(item)}>הוסף לסל</button>
                                {/if}</div>
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
     </style>
