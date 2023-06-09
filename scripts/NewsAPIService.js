const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

export default class NewsAPIService {
  constructor() {
    this.page = 1;
    this.searchValue = "";
  }

  /*
  1. async - оголошує асинхронну ф-цію, а в свою чергу асинхронна ф-ція ЗАВЖДИ повертає проміс
  2. await не можна використовувати за межами асинхронної ф-ції
  3. await заморожує виконання асинхронної фукції до тих пір поки проміс не перейде у стан Fullfilled або Rejected
  4. await повертає дані з промісу, а не сам проміс
  5. async/await потрібні для того щоб зробити імітацію синхронності всередині асинхронного коду
  */

  async getNews() {
    const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${this.searchValue}&pageSize=6&page=${this.page}`;

    const res = await axios.get(url);
    this.incrementPage();
    return res.data;

    // return axios.get(url).then((res) => {
    //   this.incrementPage();
    //   return res.data;
    // });

    // axios
    // return axios.get(url).then((res) => {
    //   this.incrementPage();
    //   return res.data;
    // });

    // fetch
    // return fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.incrementPage();
    //     return data;
    //   });
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
