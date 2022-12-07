// constants for pokemon page HTML elements
const pokemonPageMainContent = document.getElementById('pokemonPageMainContent')
const pokemonPageAboutTable = document.getElementById('pokemonPageAboutTable')
const pokemonPageBreedingTable = document.getElementById(
  'pokemonPageBreedingTable'
)
const pokemonPageImage = document.getElementById('pokemonPageImage')

// constants for query string parameters
// you can use the window.location.search to get the query string parameters
const queryString = window.location.search
console.log(queryString)

// you can use URLSearchParams function to get specific query string parameters
const urlParams = new URLSearchParams(queryString)
const pokemonID = urlParams.get('pokemonID')
console.log(pokemonID)

// pokeAPI for pokemonPage
pokeApi.getPokemonDetail = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(response => response.json())
    .then(convertPokeApiDetailToPokemon)
}

function convertPokemonPageMainContent() {
  return `
            <h1 class="pokemonPageName">pokemon.name</h1>
            <span class="pokemonPageNumber">#${pokemonID}</span>
            <ol class="pokemonPageTypes">
                <li class="pokemonPageType grass">test</li>
                <li class="pokemonPageType grass">test</li>
            </ol>
          `
}

function convertPokemonPageAboutTable() {
  return `
            <tr>
                <td class="column1">#${Species}</td>
                <td class="column2">#${Species}</td>
            </tr>
            <tr>
                <td class="column1">#${Height}</td>
                <td class="column2">#${Height}</td>
            </tr>
            <tr>
                <td class="column1">#${Weight}</td>
                <td class="column2">#${Weight}</td>
            </tr>
            <tr>
                <td class="column1">#${Abilities}</td>
                <td class="column2">#${Abilities}</td>
            </tr>  
          `
}

function convertPokemonPageBreedingTable() {
  return `
            <tr>
                <td class="column1">#${Gender}</td>
                <td class="column2">#${Gender}</td>
            </tr>
            <tr>
                <td class="column1">#${EggGroups}</td>
                <td class="column2">#${EggGroups}</td>
            </tr>
            <tr>
                <td class="column1">#${EggCycle}</td>
                <td class="column2">#${EggCycle}</td>
            </tr>
           
            `
}

function convertPokemonPageImage() {
  return `
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}"
            />
          `
}

function loadPokemonPage() {
  pokemonPageMainContent.innerHTML = convertPokemonPageMainContent()
  pokemonPageAboutTable.innerHTML = convertPokemonPageAboutTable
  //   pokemonPageBreedingTable.innerHTML = convertPokemonPageBreedingTable()
  //   pokemonPageImage.innerHTML = convertPokemonPageImage()
}

loadPokemonPage()