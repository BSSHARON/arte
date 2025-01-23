<script>
    import { products, subjects } from '$lib/data/products';
    import { page } from '$app/state';
      import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
  
    let categoryData = $state({});
    let items = $state([]);
  
    onMount(() => {
    const currentCategory = products.filter(
      (p) => p.subjects.includes(page.params.subjects)
    );
    console.log(currentCategory)
    if (currentCategory) {
      categoryData = subjects.find( 
        (p) => p.name == page.params.subjects
      );
      items = currentCategory
      console.log(items)
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
              <span>{categoryData?.description}
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
                    <li><a href={`/${item.category}`}><i  class="fa fa-eye "></i></a></li>
                  </ul>
                </div>
                <img src={item?.image} alt="תמונ">
              </div>
              <div class="down-content">
                <h4>{item.header}</h4>
                <p>{item.sub}</p>
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