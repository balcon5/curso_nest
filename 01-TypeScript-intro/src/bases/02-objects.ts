
export const pokemonIds = [1,20,30,34,66]


interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const pokemon: Pokemon = {
    id:1,
    name: 'Bulbasaur'
}