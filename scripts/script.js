import NewsAPIService from "./NewsAPIService.js";
import LoadMoreBtn from "./components/LoadMoreBtn.js";

const refs = {
  form: document.getElementById("form"),
  newsWrapper: document.getElementById("newsWrapper"),
};

const newsAPIService = new NewsAPIService();
const loadMoreBtn = new LoadMoreBtn({
  selector: "#loadMore",
  isHidden: true,
});

refs.form.addEventListener("submit", onSubmit);
loadMoreBtn.button.addEventListener("click", fetchArticles);

function fetchArticles() {
  loadMoreBtn.disable();
  return generateArticlesMarkup().then((markup) => {
    appendNewToNewsList(markup);
    loadMoreBtn.enable();
  });
}

function onSubmit(event) {
  event.preventDefault();
  const inputValue = refs.form.elements.news.value.trim();

  if (inputValue === "") {
    alert("Empty query!");
    return;
  }
  clearNewsList();
  newsAPIService.setSearchValue(inputValue);
  loadMoreBtn.show();
  newsAPIService.resetPage();

  fetchArticles()
    .catch(onError)
    .finally(() => refs.form.reset());
}

function generateArticlesMarkup() {
  return newsAPIService.getNews().then(({ articles }) => {
    if (articles.length === 0) throw new Error("Not found");

    return articles.reduce(
      (markup, currentNews) => markup + createMarkup(currentNews),
      ""
    );
  });
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="article-card">
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || "Unknown"}</h3>
    <img src=${
      urlToImage ||
      "https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
    } class="article-img">
    <p class="article-description">${description}</p>
    <a href=${url} target="_blank" class="article-link">Read more</a>
</div>
    `;
}

function appendNewToNewsList(markup) {
  refs.newsWrapper.insertAdjacentHTML("beforeend", markup);
}

function clearNewsList() {
  refs.newsWrapper.innerHTML = "";
}

function onError(err) {
  console.error(err);
  updateNewsList(`<p>${err.message}</p>`);
}

//! ===========

// window.addEventListener("scroll", handleScroll);

// function handleScroll() {
//   const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     fetchArticles();
//   }
// }
