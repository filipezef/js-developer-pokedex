// constants for pokemon page HTML elements
const pokemonPageMainContent = document.getElementById('pokemonPageMainContent')
const pokemonPageAboutTable = document.getElementById('pokemonPageAboutTable')
const pokemonPageBreedingTable = document.getElementById(
  'pokemonPageBreedingTable'
)
const pokemonPageImage = document.getElementById('pokemonPageImage')

// constant for query string parameters
const pokemonID = new URLSearchParams(window.location.search).get('pokemonID')

function convertPokemonPageMainContent(pokemon) {
  return `
            <h1 class="pokemonPageName">${pokemon.name}</h1>
            <span class="pokemonPageNumber">#${pokemon.number}</span>
            <ol class="pokemonPageTypes">
              ${pokemon.types
                .map(type => `<li class="pokemonPageType ${type}">${type}</li>`)
                .join('')}
            </ol>
          `
}

function convertPokemonPageAboutTable(pokemon) {
  return `
            <tr>
                <td class="column1">Species</td>
                <td class="column2">${pokemon.species}</td>
            </tr>
            <tr>
                <td class="column1">Height</td>
                <td class="column2">${pokemon.height}</td>
            </tr>
            <tr>
                <td class="column1">Weight</td>
                <td class="column2">${pokemon.weight}</td>
            </tr>
            <tr>
                <td class="column1">Abilities</td>
                <td class="column2">${pokemon.abilities
                  .map(ability => `${ability}`)
                  .join(', ')}</td>
            </tr>  
          `
}

function convertPokemonPageBreedingTable() {
  return `
            <tr>
                <td class="column1">Gender</td>
                <td class="column2">{Gender}</td>
            </tr>
            <tr>
                <td class="column1">Egg Groups</td>
                <td class="column2">{EggGroups}</td>
            </tr>
            <tr>
                <td class="column1">Egg Cycle</td>
                <td class="column2">{EggCycle}</td>
            </tr>
           
            `
}

function convertPokemonPageImage(pokemon) {
  return `
            <img
                src="${pokemon.image}"
                alt="${pokemon.name}"
            />
          `
}

function loadPokemonPage() {
  pokeApi.getPokemonPageDetail().then(pokemon => {
    //update pokemon page background color
    const pokemonPageSection = document.querySelector('section')
    pokemonPageSection.classList.add(pokemon.type)

    //load individual pokemon information
    pokemonPageMainContent.innerHTML = convertPokemonPageMainContent(pokemon)
    pokemonPageAboutTable.innerHTML = convertPokemonPageAboutTable(pokemon)
    pokemonPageBreedingTable.innerHTML =
      convertPokemonPageBreedingTable(pokemon)
    pokemonPageImage.innerHTML = convertPokemonPageImage(pokemon)
    console.log(pokemon)
  })
}

loadPokemonPage()
