const endpoint = "https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29.js"

const cities = []

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordsToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi")
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        return ` 
        <li>
        <span class="name">&{place.state}</span>
        <span class="population">&{place.population}</span>
        </li>
        `
    }).join('') 
    suggestions.innerHTML = html
    
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener(change, displayMatches)
   