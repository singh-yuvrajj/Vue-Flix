const API_KEY = "67ed6132bffd21db257c8fb399a53562";

const requests = {
    "Trending" : `/trending/all/week?api_key=${API_KEY}&laguage=en-US`,
    "TV Shows":`/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc`,
    "Movies":`/discover/movie?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc`,
}

export default requests;