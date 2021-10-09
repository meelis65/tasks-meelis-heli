const movies = require('./moviedata.json')

movies.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +movie.imdbVotes.replace(',', '')
    movie.Actor = movie.Actors.split(', ')
})
//console.log('movie', movieData)

//console.log('Ex 1')
const moviesBetween = movies.filter(movie => {
    if (movie.Year >= 1962 && movie.Year <=1972) {
        return movie
    }
})
//console.log('moviesBetween', moviesBetween)

const bestRating = moviesBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imbRating > currentValue.imbRating) {
        return previousValue
    } else {
        return currentValue
    }
})
//console.log('bestRating', bestRating)

const mostRating = moviesBetween.reduce((perviousValue, currentValue) =>{
    if (perviousValue.imbVotes > currentValue.imbVotes){
        return perviousValue
    }   else {
        return currentValue
    }
})
//console.log('mostRating', mostRating)

let bestRatingString = 'Best rated movie is '
bestRatingString += bestRating.Title
bestRatingString += ', directed by '
bestRatingString += bestRating.Director
bestRatingString += 'and was released in '
bestRatingString += bestRating.Released + '.'

console.log(bestRatingString)

let mostRatingString = 'Most rated movie is '
mostRatingString += mostRating.Title
mostRatingString += ', direct by '
mostRatingString += mostRating.Director
mostRatingString += ' and was released in '
mostRatingString += mostRating.Released + '.'

console.log(mostRatingString)

//console.log('Ex 2')
const genreMovies = movies.filter((movieGenre) => {
    if (movieGenre.Genre.includes('Drama')) {
        return movieGenre
    }
})
// console.log('Drama', genreMovies)

const bestRated = genreMovies.reduce((perviousValue, currentValue) => {
    if (perviousValue.imdbVotes > currentValue.imdbVotes) {
        return perviousValue
    }  else{
        return currentValue
    }
})
// console.log('mostRating', mostRating)

const mostRated = genreMovies.reduce((perviousValue, currentValue) => {
    if (perviousValue.imbVotes > currentValue.imdbVotes) {
        return perviousValue
    } else{
        return currentValue
    }
})
// console.log('mostRating*, mostRating)

let bestRatedString = 'Best rated drama is '
bestRatedString += mostRated.Title
bestRatedString += ', directed by '
bestRatedString += bestRated.Director
bestRatedString += ' and was released in '
bestRatedString += bestRated.Released + '.'

console.log(bestRatedString)

let mostRatedString = 'Mosted rated drama is '
mostRatedString += mostRated.Title
mostRatedString += ', directed by '
mostRatedString += mostRating.Director
mostRatedString += ' and was released in '
mostRatedString += mostRated.Released + '.'

console.log(mostRatedString)

//console.log('Ex 3*)

function getMoviesR(Rated) {
    return movies.filter((Ratte) => {
        return Rated.Rated === Rated
    })
}
const rMovies = getMoviesR('R')
//console.log('rMovies, rMovies)´

const ratedRTitles = rMovies.map(movie => {
    return movie.Title
})
//console.log('raatedRTitles', ratedRTitles)

let rateString = 'Movies that are rated R are: '
for (let i = 0; i < ratedRTitles.lenght; i++) {
    const ending = i + 1 === ratedRTitles.lenght
    if (ending) {
        rateString += ratedRTitles[i] + ','
    }else {
        rateString += ratedRTitles[i] + ','
    }
}
console.log(rateString)

let actors = []
rMovies.map(movie => {
    movieActor.map(actor => {
        actor.push(actor)
    })
})
//console.log(actors)

let uniqeActors = [...new Set(actors)]
// console.log('uniqeActors', uniqueActors)

let actorString = 'Actors that palyed in that movie '
actorString += uniqeActors.join(', ') + '.'
console.log(actorString)