<script>
  import { products } from '$lib/data/products';
  import { page } from '$app/state';
  import { cart, addToCart, removeFromCart } from '$lib/stores/cart.svelte.js';
  import { favorites, addToFavorites, removeFromFavorites } from '$lib/stores/favorites.svelte.js';
	import { fly, fade } from 'svelte/transition';

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


</script>
{#key page.params.category}



<!-- ***** Products Area Starts ***** -->
<section class="section" style="margin-top: 100px;"  id="products"  in:fly="{{ y: 200, duration: 2000 }}" out:fly="{{ duration: 2000, y: 200 }}" >
    <div class="container">
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
                  <li><a  onclick={() => cart.cart.map(i => i.id).includes(item.id) ? removeFromCart(item) : addToCart(item)}><i class:active={cart.cart.map(i => i.id).includes(item.id)} class="fa fa-shopping-cart"></i></a></li>
                </ul>
              </div>
              <img src={item.images[0].src} alt={item.images[0].alt}>
            </div>
            <div class="down-content">
              <h4>{item.name}</h4>
              <span>{item.price} ₪</span>
              <ul class="stars">
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
  .active{
    color: #f1c40f;
  }
</style>