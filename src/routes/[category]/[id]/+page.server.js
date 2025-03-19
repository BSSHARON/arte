/** @type {import('./$types').PageLoad} */
import { products } from '$lib/data/products';
export function load({ params }) {
    const category = products.find(p => p.category === params.category);
    const item = category?.items?.find(i => i.id === params.id);
    return {
        item,
        category
    };
}