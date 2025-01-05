/**
 * @typedef {Object} cart
 * @property {Array<product>} cart - Array of products in the cart
 * 
 * @typedef {Object} product
 * @property {string|number} id - Unique identifier of the product
 * @property {string} [name] - Name of the product
 * @property {number} [price] - Price of the product
 * @property {string} [description] - Description of the product
 * @property {string} [image] - URL of the product image
 * @property {number} [quantity] - Quantity of the product
 * @property {any} [any] - Any other product properties
 * 
 */
export const cart = $state({cart/** @type {cart[]} **/: []});

/**
 * Adds a product to the cart and updates the local storage.
 *
 * @param {product} product - The product to be added to the cart.
 */

export function addToCart(product) {
    if (cart.cart.find(p => p.id === product.id)) {
        return;
    }
    cart.cart = [...cart.cart, product];
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}

/**
 * Removes a product from the cart and updates the local storage.
 *
 * @param {product} product - The product to be removed from the cart.
 */
export function removeFromCart(product) {
    cart.cart = cart.cart.filter(p => p.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}