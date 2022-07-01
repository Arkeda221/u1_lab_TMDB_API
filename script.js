const API_KEY = '2fa6f5ffb7c2e35fcc5a22329277d0d8'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original/'

// global variables

const button = document.querySelector('button')
const moveiInput = document.querySelector('input')
const imageDiv = document.getElementById('img-div')
const display = document.querySelector('.movie-list')

//event listners
button.addEventListener(
  'click',
  async () => {
    let movie = moveiInput.value
    // console.log(movie)

    let response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
    )

    let renderList = response.data.results
    renderList.forEach((movie) => {
      const movieItem = document.createElement('div')
      const movieImage = IMAGE_BASE_PATH + movie.poster_path
      const movieTitle = document.createElement('div')
      const overView = document.createElement('div')
      overView.innerText = movie.overview
      movieTitle.innerText = movie.original_title + ':'
      movieItem.innerHTML = `<img src= ${movieImage}>`
      movieItem.append(movieTitle, overView)
      display.append(movieItem)

      console.log(response)
    })
  },
  { once: true }
)
