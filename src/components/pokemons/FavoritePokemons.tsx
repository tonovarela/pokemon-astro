import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from 'solid-js';
import { FavoritePokemonCard } from "./FavoritePokemonCard";
import { getPokemonsFromLocalStorage } from "src/utils/getPokemonFromStorage";




export const FavoritePokemons = () => {
    const [pokemons, setPokemons] = createSignal(getPokemonsFromLocalStorage());
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
                        
            <For each={pokemons()}>{(pokemon: FavoritePokemon) => (
                <FavoritePokemonCard pokemon={pokemon} />
            )
            }</For>


        </div>
    )
}