<script>
  import { products } from '$lib/data/products';
  import { page } from '$app/state';
  import { cart, addToCart, removeFromCart } from '$lib/stores/cart.svelte.js';
  import { favorites } from '$lib/stores/favorites.svelte.js';
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

 function addToFavorites(item) {
    if (!(favorites.favorites.includes(item.id))) {
      favorites.favorites.push(item.id);
    }
  }


</script>
{#key page.params.category}

<div class="page-heading" id="top"  in:fly="{{ y: 200, duration: 2000 }}" out:fly="{{ duration: 2000, y: 200 }}">
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

<!-- ***** Products Area Starts ***** -->
<section class="section" id="products"  in:fly="{{ y: 200, duration: 2000 }}" out:fly="{{ duration: 2000, y: 200 }}" >
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
                <ul>
                  <li><a href={`/${page.params.category}/${item.id}`}><i class="fa fa-eye"></i></a></li>
                  <li><a  onclick={() => addToFavorites(item)}><i class="fa fa-star"></i></a></li>
                  <li><a  onclick={() => addToCart(item)}><i class="fa fa-shopping-cart"></i></a></li>
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
        {#if hasPagination}
        <div class="col-lg-12">
          <div class="pagination">
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li class="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">></a>
              </li>
            </ul>
          </div>
        </div>
        {/if}
      </div>
    </div>
  </section>
  {/key}
