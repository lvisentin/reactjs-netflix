const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b822441b5788e5af34364bd716eab043';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}/${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },
        ]
    },

    getMovieInfo: async(movieId, type) => {
        const info = await basicFetch(`${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        return info;
    }
}