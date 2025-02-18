
export const delivery = $state({ delivery: false,amount:0 });

/**
 * Sets delivery to true and sets the amount, then stores it in local storage
 * @param {number} amount - the cost of delivery
 */
export function deliveryTrue (amount) {
 
    delivery.delivery = true;
    delivery.amount = amount;
    localStorage.setItem('delivery', JSON.stringify(delivery));
}

export function deliveryFalse () {
    delivery.delivery = false;
    delivery.amount = 0;
    localStorage.setItem('delivery', JSON.stringify(delivery));
}
