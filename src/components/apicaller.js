async function fetchMoviesByName(query) {
  try {
    let response = await fetch("http://api.tvmaze.com/search/shows?q=" + query);
    let showsData = await response.json();
    return showsData;
  } catch (error) {
    console.error(error);
  }
}

async function fetchShowById(query) {
  try {
    let response = await fetch("http://api.tvmaze.com/shows/" + query);
    let showData = await response.json();
    return showData;
  } catch (error) {
    console.error(error);
  }
}

export { fetchMoviesByName, fetchShowById };
