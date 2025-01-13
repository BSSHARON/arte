<script>
	import { allItems } from '$lib/data/products';

	/**
	 * @type {string | string[]}
	 */
	import { favorites } from '$lib/stores/favorites.svelte';
	/**
	 * @type {string | any[]}
	 */

</script>

<div class="favorites-page">
	<h1>המועדפים שלי</h1>
	{#if favorites.favorites.length > 0}
		<div class="product-list">
			{#each favorites.favorites as product}
				<a href="/{product.category}/{product.id}" class="product-card">
					<img class="w-50" src={product.images[0].src} alt={product.name} />
					<p>{product.name}</p>
				</a>
			{/each}
		</div>
	{:else}
		<p>אין מוצרים במועדפים.</p>
	{/if}
</div>

<style>
	.favorites-page {
		text-align: center;
        margin-top: 140px;
        max-width: 1200px;
        padding: 20px;
    }

	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 20px;
	}

	.product-list .product-card {
		display: block;
		text-align: center;
		text-decoration: none;
		color: #333;
		border: 1px solid #ddd;
		padding: 10px;
		transition: transform 0.3s ease-in-out;
		background-color: #fff;
	}

	.product-list .product-card:hover {
		transform: scale(1.05);
	}

	.product-list img {
		max-width: 100%;
		height: auto;
	}
</style>