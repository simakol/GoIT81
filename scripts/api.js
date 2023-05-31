const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

function getNews(query) {
  const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${query}`;
  return fetch(url).then((res) => res.json());
}

export { getNews };
