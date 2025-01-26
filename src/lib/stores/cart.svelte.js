/**
 * @typedef {Object} CartItem
 * @property {string|number} id - Unique identifier of the product
 * @property {string} [name] - Name of the product
 * @property {number} [price] - Price of the product
 * @property {string} [description] - Description of the product
 * @property {string} [image] - URL of the product image
 * @property {number} [quantity] - Quantity of the product
 * @property {any} [any] - Any other product properties
 */

/**
 * @typedef {object} CartState
 * @property {CartItem[]} cart
 */
export const cart = $state(/** @type {CartState} */{ cart: [] });


/*export function addToCart(product, quantity = 1, sizeIndex = 0) {
    const existingProduct = cart.cart.find(p => p.id === product.id);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + quantity;
    } else {
        cart.cart = [...cart.cart, { ...product, quantity}];
        if (product.sizes && product.sizes.length > 0) {
            cart.cart[cart.cart.length - 1].sizes[sizeIndex].quantity += quantity;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}*/
/**
 * Adds a product to the cart and updates the local storage.
 *
 * @param {CartItem} product - The product to be added to the cart.
 * @param {number} [quantity=1] - The quantity to add (optional, default is 1).
 * @param {number} [sizeIndex=0] - The index of the selected size (optional, default is 0).
 */
export function addToCart(product, quantity = 1, sizeIndex = 0, kindIndex = 0) {
    console.log(product, quantity, sizeIndex);
    const existingProductIndex = cart.cart.findIndex((p) => p.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Product already exists in the cart
      const existingProduct = cart.cart[existingProductIndex];
      existingProduct.quantity = (existingProduct.quantity || 0) + quantity;
  
      // Update size quantity if applicable
      if (existingProduct.sizes && existingProduct.sizes.length > sizeIndex) {
        existingProduct.sizes[sizeIndex].quantity =
          (existingProduct.sizes[sizeIndex].quantity || 0) + quantity;
      }
    } else {
      // Product is new to the cart
      const newProduct = { ...product, quantity };
  
      // Initialize size quantity if applicable
      if (newProduct.sizes && newProduct.sizes.length > 0) {
        newProduct.sizes[sizeIndex].quantity = quantity;
      }
      if (newProduct.kind && newProduct.kind.length > 0) {
        newProduct.kind[kindIndex].quantity = quantity;
      }
      cart.cart = [...cart.cart, newProduct];
    }
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}
  
/**
 * Updates the quantity of a product in the cart.
 *
 * @param {CartItem} product - The product to update.
 * @param {number} quantity - The new quantity.
 */
export function updateQuantity(product, quantity) {
    const existingProduct = cart.cart.find(p => p.id === product.id);
    if (existingProduct) {
        existingProduct.quantity = Math.max(1, quantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}
export function updateSizeQuantity(product, quantity, size) {
    const existingProduct = cart.cart.find(p => p.id === product.id);
    if (existingProduct) {
        existingProduct.sizes[size] = Math.max(1, quantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}
/**
 * Removes a product from the cart and updates the local storage.
 *
 * @param {CartItem} product - The product to be removed from the cart.
 * @param {number} [quantity] - The quantity to remove (optional). If not provided, the item is removed entirely.
 */
export function removeFromCart(product, quantity) {
    if (quantity === undefined) {
        cart.cart = cart.cart.filter(p => p.id !== product.id);
    } else {
        const existingProduct = cart.cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity -= quantity;
            if (existingProduct.quantity <= 0) {
                cart.cart = cart.cart.filter(p => p.id !== product.id);
            }
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart.cart));
}
