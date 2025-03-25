<script>
  import { products } from '$lib/data/products';
  import { page } from '$app/state';
  import { cart, addToCart, removeFromCart } from '$lib/stores/cart.svelte.js';
  import { favorites, addToFavorites, removeFromFavorites } from '$lib/stores/favorites.svelte.js';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

  let categoryData = $state({});
  let items = $state([]);
  let hasPagination = $derived(items.length > 9);

  $effect(() => {
    const currentCategory = products.find(
      (p) => p.category === page.params.category
    );
    if (currentCategory) {
      categoryData = currentCategory;
      items = currentCategory.items;
    }
  });
  console.log()
//                  <li><a  onclick={() => cart.cart.map(i => i.id).includes(item.id) ? removeFromCart(item) : addToCart(item)}><i class:active={cart.cart.map(i => i.id).includes(item.id)} class="fa fa-shopping-cart"></i></a></li>

</script>
{#key page.params.category}



<!-- ***** Products Area Starts ***** -->
<section class="section" style="margin-top: 100px;"  id="products"  in:fly="{{ y: 200, duration: 2000 }}" out:fly="{{ duration: 2000, y: 200 }}" >
    <div class="container">
      {#if categoryData && categoryData.subjects &&  categoryData?.subjects.length > 0}
      <div class="back-button">
        <button title='חזרה' onclick={() => goto(`/subject/${categoryData.subjects[0]}`)} class="back-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            חזרה
        </button>
      </div>
      {/if}
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>{categoryData?.header}</h2>
            <span>{categoryData?.sub}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container" >
      <div class="row"  id="portfolio" dir="ltr" >
        {#each items as item}
        <div class="col-lg-4 item" data-rel={item.id} style="" >
          <div class="item">
            <div class="thumb">
              <div class="hover-content">
                <ul dir="rtl">	
                  <li><a href={`/${page.params.category}/${item.id}`}><i  class="fa fa-eye "></i></a></li>
                  <li><a  onclick={() => favorites.favorites.map(i => i.id).includes(item.id) ? removeFromFavorites(item) : addToFavorites(item)}><i class:active={favorites.favorites.map(i => i.id).includes(item.id)} class="fa fa-star"></i></a></li>
                </ul>
              </div>
              <img src={item.images[0].src} alt={item.images[0].alt}>
            </div>
            <div class="down-content">
              <a class="linkhover" href={`/${page.params.category}/${item.id}`}><h4 class="linkhover">{item.name}</h4></a>
              <span>{item.price} ₪</span>
              <ul class="stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </section>
  {/key}
  <style>
    .linkhover:hover{
        color: #d6d688 !important;
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