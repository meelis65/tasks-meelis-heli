const movieData = require('./moviedata.json')

movieData.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +movie.imdbVotes.replace(',', '')
})

//console.log('movie', movieData)

//console.log('Ex 1')

const moviesBetween = movieData.filter(movie => {
    if (movie.Year >= 1962 && movie.Year <=1972){
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

const mostRated = moviesBetween.reduce((perviousValue, currentValue) =>{
    if (perviousValue.imbVotes > currentValue.imbVotes){
        return perviousValue
    }   else {
        return currentValue
    }
})

//console.log('mostRated', mostRated)

let bestRatingString = 'Best rated movie is '
bestRatingString += bestRating.Title
bestRatingString += ', directed by '
bestRatingString += bestRating.Director
bestRatingString += 'and was released in '
bestRatingString += bestRating.Released + '.'

console.log(bestRatingString)

let mostRatedString = 'Most rated movie is '
mostRatedString += mostRated.Title
mostRatedString += ', direct by '
mostRatedString += mostRated.Director
mostRatedString += ' and was released in '
mostRatedString += mostRated.Released + '.'

console.log(mostRatedString)


console.log('Ex 2')

const includesDrama = movieData.filter(movie => {
    if (movie.Genre.includes('Drama')) {
        return movie
    }
})

console.log('includesDrama', includesDrama)