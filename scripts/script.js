import { getNews } from "./api.js";

/*
    1. refs
    2. вішаємо слухач подій на сабміт форми
    3. у ф-ції сабміту створюємо запит використовуючи getNews і передаємо в якості аргументу те, що ми написали в інпут
    4. витягнути ті дані, що нам потрібні, сформувати розмітку і показати на екрані користувачу
    5. оброблювати помилки
    6. очистити інпут
*/

const refs = {
  form: document.getElementById("form"),
  newsWrapper: document.getElementById("newsWrapper"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const inputValue = refs.form.elements.news.value.trim();

  if (inputValue === "") {
    alert("Empty query!");
    return;
  }

  getNews(inputValue)
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error("Not found");

      return articles.reduce(
        (markup, currentNews) => markup + createMarkup(currentNews),
        ""
      );
    })
    .then(updateNewsList)
    .catch(onError)
    .finally(() => refs.form.reset());
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

function updateNewsList(markup) {
  refs.newsWrapper.innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateNewsList(`<p>${err.message}</p>`);
}
