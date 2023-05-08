// GET SELECTORS
const list = document.querySelector('.list')
const keyUp = document.querySelector('#txt-search')

// RENDER FIRST POKEMON
let pokemons = []

const documentReadyrenderListPokemons = async () => {
   let boxs = ``

   const response = await fetch(`https://localhost:44344/api/pokemon?name=`)
   const jsonData = await response.json()
   pokemons = jsonData.Data

   pokemons.map((pokemon) => {
      const box = `<div class="box">
                  <p id="name-fruit">${pokemon.NAME}</p>
               </div>`
      boxs += box
   })

   list.insertAdjacentHTML('afterbegin', boxs)
}

documentReadyrenderListPokemons()

// LOGIC SEARzCHING
keyUp.addEventListener('keyup', async (event) => {
   console.log('running logic search')
   const value = event.target.value.toLowerCase()

   const response = await fetch(
      `https://localhost:44344/api/pokemon?name=${value}`
   )
   const jsonData = await response.json()
   pokemons = jsonData.Data

   list.innerHTML = ''

   if (event.target.value == '') documentReadyrenderListPokemons()
   let boxs = ''

   pokemons.map((pokemon) => {
      if (pokemon.NAME.toLowerCase().includes(value)) {
         const box = `<div class="box">
                        <p id="name-fruit">${pokemon.NAME}</p>
                     </div>`
         boxs += box
      }
   })

   list.insertAdjacentHTML('afterbegin', boxs)
})
