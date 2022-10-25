function unpackAbilities(object){
    let keys = Object.keys(object)
    let abilities = []
    for (let key of keys){
        abilities.push(object[key].ability.name)
    }
    return abilities
}
function unpackTypes(object){
    let keys = Object.keys(object)
    let types = []
    for (let key of keys){
        types.push(object[key].type.name)
    }
    return types
}

function showPokemon({name, abilities, height, weight, types, sprites}){ //weight in lbs, height in decimeters
    let spriteURL = sprites.front_default
    let abilitiesArray = unpackAbilities(abilities)
    let typesArray = unpackTypes(types)
    
    
    
    const sprite = document.createElement('img')
    sprite.src = spriteURL
    sprite.style.width = '100%'
    sprite.style.height = '100%'
    document.getElementById('sprite').append(sprite)

    const nameTag = document.createElement('h2')
    nameTag.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
    nameTag.classList.add('pokemon-text')
    document.getElementById('name').append(nameTag)

    const typeTag = document.createElement('h2')
    typeTag.innerHTML = `${typesArray.join()} Pokemon`
    typeTag.classList.add('pokemon-text')
    document.getElementById('type').append(typeTag)

    const heightTag = document.createElement('h2')
    heightTag.innerHTML = `${height*10}cm`
    heightTag.classList.add('pokemon-text')
    document.getElementById('height').append(heightTag)

    const weightTag = document.createElement('h2')
    weightTag.innerHTML = `${weight/10}kg`
    weightTag.classList.add('pokemon-text')
    document.getElementById('weight').append(weightTag)

}

async function fetchPokemon(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    showPokemon(data)
}

document.querySelector('#search-btn button').addEventListener('click', () => {
    let pokemonName = document.querySelector('#input-box input').value
    fetchPokemon(pokemonName)
})