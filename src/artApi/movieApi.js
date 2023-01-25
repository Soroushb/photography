import axios from 'axios'
export default {
    getMovies: (title) =>
    axios({
        'method':'GET',
        'url': 'https://flixster.p.rapidapi.com/search',
        'headers': {
            'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
            'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
        },
        'params': {
            'query': title,
        },
    })
}