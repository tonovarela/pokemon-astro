import type { FavoritePokemon } from "@interfaces/favorite-pokemon";

export const getPokemonsFromLocalStorage = (): FavoritePokemon[] => {
    const pokemons = localStorage.getItem('favoritePokemons');
    return pokemons ? JSON.parse(pokemons) : [];
}
