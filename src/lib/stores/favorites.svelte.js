
export const favorites = $state({favorites: []});

export function addToFavorites(product) {
    if (favorites.favorites.find(p => p.id === product.id)) {
        return;
    }
    favorites.favorites = [...favorites.favorites, product];
    localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
}

export function removeFromFavorites(product) {
    console.log(product,favorites.favorites);
    favorites.favorites = favorites.favorites.filter(p => p.id !== product.id);
    localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
}