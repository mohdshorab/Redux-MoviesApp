import { LOAD_HOLLYWOOD_MOVIES } from "../actions/actions";

const initialState = {
    bollywood: [
        {
            _id: "1",
            name: "Gadar",
            releaseYear: 2001,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadar--ek-prem-katha-et00002956-24-03-2017-19-52-43.jpg"
        },
        {
            _id: "2",
            name: "Kabir Singh",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BOTIyMTNkMWQtZDJlYi00OGJmLTliN2MtOGE0YjY4NzFiYTNmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_FMjpg_UX1000_.jpg"
        },
        {
            _id: "3",
            name: "Jung",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BMTI5MzgxOTYyNV5BMl5BanBnXkFtZTcwMjgxNDE0MQ@@._V1_.jpg"
        },
        {
            _id: "4",
            name: "RRR",
            releaseYear: 2022,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
        },
        {
            _id: "5",
            name: "Pushpa",
            releaseYear: 2022,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 9,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg"
        },
        {
            _id: "6",
            name: "Jannat",
            releaseYear: 2004,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 9,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91iiaDveGFL._RI_.jpg"
        },
        {
            _id: "7",
            name: "Rockstar",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg"
        },
        {
            _id: "8",
            name: "War",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
        },
        {
            _id: "9",
            name: "Dabang",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://i2.cinestaan.com/image-bank/1500-1500/37001-38000/37342.jpg"
        },
        {
            _id: "10",
            name: "Gabbar",
            releaseYear: 1999,
            certificate: "A",
            runtime: "139 min",
            genre: "Drama",
            imdbRating: 8.8,
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            metaScore: "66",
            director: "David Fincher",
            imageUrl: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/95/73/0_q7ct0csh_1531492829698_l_medium.jpg"
        },

    ]
};

const BollywoodMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HOLLYWOOD_MOVIES:
            return {
                bollywood: [...state.bollywoodMovies, action.bollywood],
            };
        default:
            return state;
    }
};

export default BollywoodMoviesReducer;
