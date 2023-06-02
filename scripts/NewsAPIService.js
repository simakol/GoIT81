const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

export default class NewsAPIService {
  constructor() {
    this.page = 1;
    this.searchValue = "";
  }

  getNews() {
    const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${this.searchValue}&pageSize=6&page=${this.page}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.incrementPage();
        return data;
      });
  }

  setSearchValue(query) {
    this.searchValue = query;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
