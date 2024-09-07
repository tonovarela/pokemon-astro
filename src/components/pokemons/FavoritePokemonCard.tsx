import type { FavoritePokemon } from "@interfaces/favorite-pokemon";


import { createSignal, Show, type Component } from "solid-js";
import { getPokemonsFromLocalStorage } from "src/utils/getPokemonFromStorage";


interface Props {
    pokemon :FavoritePokemon
}



export const FavoritePokemonCard:Component<Props> = ({pokemon}) => {
    const [isVisible,setIsVisible] = createSignal(true);
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;   

    const deleteFavoritePokemon = (pokemon:FavoritePokemon) => {
         const pokemons = getPokemonsFromLocalStorage();
         const newPokemons = pokemons.filter((p:FavoritePokemon)=> p.id !== pokemon.id);
         localStorage.setItem('favoritePokemons',JSON.stringify(newPokemons));    
        setIsVisible(false);
    }
    return(
        <Show when={isVisible()}>
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemons/${pokemon.name}`} >
            <img src={imageSrc} alt={pokemon.name} class="w-32 h-32" 
            style={`view-transition-name: ${pokemon.name}-image`}
            />
            <p class="capitalize"> #{pokemon.id} {pokemon.name}</p>
            </a>
            <button onClick={()=>deleteFavoritePokemon(pokemon)} 
            class=" text-red-400 px-2 py-1 rounded">
                Borrar</button>

        </div>
         </Show>
    );
}