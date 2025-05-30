//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}


const getRandomPokemon = async () => {
    const randomIndex = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
    return await response.json();
}

const printImageAndName = async () => {
    const { name, img } = await getImageAndName(1);
    return `<section>
                <img src="${img}" alt="${name}">
                <h1>${name}</h1>
            </section>`;
}

const getRandomDogImage = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    try {
        if (response.ok) {
            let data = await response.json();
            return data.message;
        }
        else {
            throw "ERROR!!!"
        }
    } catch (error) {

    }

}


const getRandomPokemonImage = async () => {
    let pokemon = await getRandomPokemon();
    return pokemon.sprites.front_default;
}

const getRandomCharacter = async () => {
    const randomId = Math.floor(Math.random() * 826);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    return await response.json();
}

const getRandomCharacterInfo = async () => {
    const character = await getRandomCharacter();
    return {
        img: character.image,
        name: character.name,
        episodes: character.episode,
        firstEpisode: character.episode[0],
        dateEpisode: character.created

    };
}