
export const favorites = $state({favorites: []});

export function addToFavorites(product) {
    favorites.favorites = [...favorites.favorites, product];
    localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
}

export function removeFromFavorites(product) {
    favorites.favorites = favorites.favorites.filter(p => p.id !== product.id);
    localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
}